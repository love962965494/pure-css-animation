import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 12 x 1 / 100%;
    --deg: @r(3deg, 7deg);
  }

  --start: calc(@i() * var(--deg));

  transition: .2s ease @r(.6s);
  will-change: transform;
  transform: rotate(var(--start));

  @place-cell: center;
  @size: calc(@i() * 9%);

  border: 1px solid hsla(
    calc(5 + 10 * @i()), 90%, 75%,
    @r(.8)
  );
`
export default function Pattern1() {
  return <Pattern />
}
