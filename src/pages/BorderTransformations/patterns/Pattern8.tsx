import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 7 / 100%;
  }

  transition: .2s ease @r(.6s);
  will-change: transform;

  border: 1px solid hsla(
    calc(5 + 4 * @i()), 90%, 75%,
    @r(.8)
  );

  @size: 30% 100%;
  @row(even) { --x: 100%; }
  @row(odd) { --x: 0%; }
  @col(even) { --y: -20%; }
  @col(odd) { --y: 20%; }

  transform: translate(var(--x), var(--y))
             rotate(@r(360deg))
             scale(@r(.5, .95));
`

export default function Pattern8() {
  return <Pattern />
}
