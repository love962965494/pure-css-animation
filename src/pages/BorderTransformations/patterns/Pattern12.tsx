import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 10 / 100%;
  }

  transition: .2s ease @r(.6s);
  will-change: transform;

  width: @r(200%);
  transform: rotate(-45deg) translateY(@r(-50%, 50%));

  border-top: 1px solid hsla(
    calc(5 + 2 * @i()), 90%, 75%,
    @r(.8)
  );
`

export default function Pattern12() {
  return <Pattern />
}
