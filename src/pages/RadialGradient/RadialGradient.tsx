import React, { useEffect } from 'react'
import Patterns from './patterns'
import './RadialGradient.scss'
import { update } from '../Doodle'

const { Pattern1, Pattern2, Pattern3, Pattern4, Pattern5, Pattern6 } = Patterns

export default function RadialGradient() {
  useEffect(() => {
    document.body.addEventListener('click', update)

    return () => {
      document.body.removeEventListener('click', update)
    }
  }, [])

  return (
    <>
      <header>
        <div className="wrap">
          <h1>Radial-gradient</h1>
          <p>
            Patterns with{' '}
            <a href="https://css-doodle.com" target="_blank">
              css-doodle
            </a>{' '}
            and CSS{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient" target="_blank">
              radial-gradient()
            </a>
            .
          </p>
        </div>
      </header>

      <ul className="patterns">
        <li>
          <Pattern1 />
        </li>
        <li>
          <Pattern2 />
        </li>
        <li>
          <Pattern3 />
        </li>
        <li>
          <Pattern4 />
        </li>
        <li>
          <Pattern5 />
        </li>
        <li>
          <Pattern6 />
        </li>
      </ul>
    </>
  )
}
