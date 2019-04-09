import React, { useEffect } from 'react'
import Rainbow from './components/Rainbow/Rainbow'
import Cloud from './components/Cloud/Cloud'
import TreeGroup from './components/TreeGroup/TreeGroup'
import Bush from './components/Bush/Bush'
import './AnimatedCssSeasons.scss'

const lightColours = ['#93d5eb', '#add63a', '#c5d63a', '#febe42']
const mediumColours = ['#66bbd8', '#92c938', '#acc52b', '#ff9d25']
const darkColours = ['#4da2bb', '#2a9d5c', '#89a503', '#ff6b2f']
const backgroundColours = ['#cbe9f4', '#daf8ff', '#feec98', '#ffdc8a']
const bushColours = ['#ffffff', '#3ebf6d', '#99b31a', '#fd6d2e']
const cloudColours = ['#ffffff', '#ffffff', '#ffffff', '#eaf9fe']
const seasons = ['Winter', 'Spring', 'Summer', 'Autumn']

export default function AnimatedCssSeasons() {
  useEffect(() => {
    const oHtml = document.getElementsByTagName('html')[0]
    const oRainbow = document.querySelector('.rainbow')!
    const oRabbit = document.querySelector('.rabbit')!
    const oSnowList = document.querySelectorAll('.snow')
    const oRainList = document.querySelectorAll('.rain')
    const oFlowersList = document.querySelectorAll('.flower')
    let count = 1
    let season: string = ''

    function updateSeason() {
      oHtml.style.setProperty('--bgd-color', backgroundColours[count])
      oHtml.style.setProperty('--light', lightColours[count])
      oHtml.style.setProperty('--medium', mediumColours[count])
      oHtml.style.setProperty('--dark', darkColours[count])
      oHtml.style.setProperty('--bush', bushColours[count])
      oHtml.style.setProperty('--cloud', cloudColours[count])

      season = seasons[count]

      oSnowList.forEach((oSnow) =>
        season !== seasons[0]
          ? oSnow.setAttribute('style', 'display: none;')
          : oSnow.setAttribute('style', 'display: block;')
      )

      oRabbit.classList.toggle('animated', season === seasons[0] || season === seasons[2])
      oRainbow.classList.toggle('animated', season === seasons[1])

      if (season === seasons[1]) {
        oHtml.style.setProperty('--rabbit', '#9e6255')
      }

      oFlowersList.forEach((oFlower) => oFlower.classList.toggle('animated', season === seasons[1]))

      if (season === seasons[2]) {
        oHtml.style.setProperty('--sun', '#ffb53a')
        oHtml.style.setProperty('--rabbit', '#9E6255')
      } else {
        oHtml.style.setProperty('--sun', 'transparent')
        oHtml.style.setProperty('--rabbit', '#ffffff')
      }

      oRainList.forEach((oRain) =>
        season === seasons[3]
          ? oRain.setAttribute('style', 'display: block;')
          : oRain.setAttribute('style', 'display: none;')
      )

      count = (count + 1) % seasons.length
    }

    let timer = 0
    let requestAnimationFrameId = 0
    function animate() {
      if (++timer % 600 === 0) {
        updateSeason()
      }

      requestAnimationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(requestAnimationFrameId)
    }
  }, [])
  return (
    <div id="container">
      <div className="season" />
      <div className="sun" />
      <Rainbow />
      <Cloud />
      <div className="base">
        <Bush />
        <div className="rabbit animated">
          <div className="head">
            <div className="ear" />
            <div className="ear" />
          </div>
        </div>
        <TreeGroup />
      </div>
    </div>
  )
}
