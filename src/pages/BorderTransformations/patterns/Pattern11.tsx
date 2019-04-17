import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 20 x 1 / 100%;
  }

  @place-cell: -5% -5%;
  @size: calc(@row() * 9% + @r(-2%, 2%));

  transition: .2s ease @r(.6s);
  will-change: transform;

  transform: rotate(45deg) translateX(50%);
  border-radius: 50%;
  border: @r(3px) dashed hsla(
    calc(5 + 10 * @i()), 90%, 75%,
    @r(.8)
  );
`

export default function Pattern11() {
  return <Pattern />
}
