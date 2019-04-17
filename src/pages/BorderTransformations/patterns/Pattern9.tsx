import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 5 / 100%;
  }

  --n: calc(
    @abs(@abs(@row() - 3) + @abs(@col() - 3) - 5) / 5
  );

  margin: -10%;
  transition: .2s ease @r(.6s);
  will-change: transform;
  transform: scale(calc(1.8 * var(--n))) rotate(37deg);

  border: 1px solid hsla(
    calc(5 + 5 * @i()), 90%, 75%,
    @r(.3, .8)
  );
`

export default function Pattern9() {
  return <Pattern />
}
