import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 6 / 100%;
  }

  --color: hsla(
    calc(5 + 5 * @i()), 90%, 75%,
    @r(.8)
  );

  transition: .2s ease @r(.6s);
  will-change: transform;
  margin: 2px;
  border-radius: 50%;
  border-left: 1px solid var(--color);
  border-top: 1px solid var(--color);

  @row(even) { --x: 20%; }
  @row(odd) { --x: -20% }
  @col(even) { --y: -20% }
  @col(odd) { --y: 20% }

  transform: translate(var(--x), var(--y)) rotate(@r(360deg));
`

export default function Pattern6() {
  return <Pattern />
}
