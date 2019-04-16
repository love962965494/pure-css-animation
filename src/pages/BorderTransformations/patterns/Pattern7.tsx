import React from 'react'
import Doodle from '../../Doodle';

const Pattern = Doodle`
  :doodle {
    @grid: 5 / 100%;
  }

  transition: .2s ease @r(.6s);
  will-change: transform;

  border-radius: 50%;
  border: @r(10px) double hsla(
    calc(5 + 4 * @i()), 90%, 75%,
    @r(.8)
  );

  @row(even) { --x: 25%; }
  @row(odd) { --x: -25% }
  @col(even) { --y: -10%; }
  @col(odd) { --y: 10%; }

  transform: translate(var(--x), var(--y)) rotate(@r(360deg)) scale(@r(.4, .95));
`

export default function Pattern7() {
  return <Pattern />
}
