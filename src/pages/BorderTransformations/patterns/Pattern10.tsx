import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 9 / 100%;
  }

  --color: hsla(
    calc(5 + 2 * @i()), 90%, 75%,
    @r(.8)
  );

  transition: .2s ease @r(.6s);
  will-change: transform;

  border-top: 1px solid var(--color);
  border-left: 1px solid var(--color);
  margin: -.5px;

  transform: translate(-25%, -20%);
  
  @even {
    transform: translate(115%, 30%);
  }
`

export default function Pattern10() {
  return <Pattern />
}
