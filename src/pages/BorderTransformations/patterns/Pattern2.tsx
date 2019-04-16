import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 5x8 / 100%;
  }
 
  @size: 210%;
  @place-cell: 110% -40%;

  transition: .2s ease @rand(.6s);
  will-change: transform;

  border-radius: @rand(50%, 60%) 80%; 
  transform: translate(
    calc(50% * @cos(@PI() / 20 * @index())),
    calc(50% * @sin(@PI() / 20 * @index()))
  );

  border: 1px solid hsla(
    calc(5 + @col() * 20), 90%, 75%,
    @rand(.3, .8)
  );
`

export default function Pattern2() {
  return <Pattern />
}
