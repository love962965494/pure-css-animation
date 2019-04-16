import React from 'react'
import Doodle from '../../Doodle';

const Pattern = Doodle`
  :doodle {
    @grid: 50 x 1 / 100%;
  }

  transition: @r(.3s, .8s) ease @r(.6s);
  will-change: transform;

  @place-cell: center;
  @size: calc(@i() * 3%);

  transform: rotate(@r(360deg));

  border-radius: 50%;
  border: 1px solid transparent;
  border-top-color: hsla(
    calc(5 + 4 * @i()), 90%, 75%,
    @r(.8)
  );
`

export default function Pattern4() {
  return <Pattern />
}
