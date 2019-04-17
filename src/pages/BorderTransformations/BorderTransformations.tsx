import React, { useEffect } from 'react'
import './BorderTransformations.scss'
import Patterns from './patterns'

const {
  Pattern1,
  Pattern2,
  Pattern3,
  Pattern4,
  Pattern5,
  Pattern6,
  Pattern7,
  Pattern8,
  Pattern9,
  Pattern10,
  Pattern11,
  Pattern12
} = Patterns

const update = ($ev: MouseEvent) => {
  const target = $ev.target as EventTarget & { update?: () => void }

  if (target && target.update) {
    target.update()
  }
}

export default function BorderTransformations() {
  useEffect(() => {
    document.body.addEventListener('click', update)
    document.body.addEventListener('mouseover', update)

    return () => {
      document.body.removeEventListener('click', update)
      document.body.removeEventListener('mouseover', update)
    }
  }, [])

  return (
    <>
      <Pattern1 />
      <Pattern2 />
      <Pattern3 />
      <Pattern4 />
      <Pattern5 />
      <Pattern6 />
      <Pattern7 />
      <Pattern8 />
      <Pattern9 />
      <Pattern10 />
      <Pattern11 />
      <Pattern12 />
      <p>
        Build with
        <a href="http://yuanchuan.name/css-doodle/" target="_blank">
          css-doodle
        </a>
      </p>
    </>
  )
}
