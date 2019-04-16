import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 5 / 100%;
  }

  transition: .2s ease @r(.6s);
  will-change: transform;

  margin: 2%;

  @even {
    margin: 10%;
  }

  border-radius: @p(0% 100%, 100% 0%);
  border: 1px solid hsla(
    calc(5 + 6 * @row() * @col()), 90%, 75%,
    @r(.8)
  );

  transform: translate(
    @p(-10%, 10%)
  );
`

export default function Pattern5() {
  return <Pattern />
}
