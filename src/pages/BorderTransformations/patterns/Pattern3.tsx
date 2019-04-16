import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 18 x 1 / 100%;
    --deg: @r(16deg, 24deg);
  }

  transition: @r(.3s, .6s) ease @r(.6s);
  will-change: transform;

  --color: hsla(
    calc(5 + 5 * @i()), 90%, 75%,
    @r(.3, .8)
  );

  @place-cell: 110% center;
  @size: 120%;

  border-radius: 50%;
  border: 1px solid var(--color);
  transform: rotate(calc(@i() * var(--deg)));
  transform-origin: 0 center;
`

export default function Pattern3() {
  return <Pattern />
}
