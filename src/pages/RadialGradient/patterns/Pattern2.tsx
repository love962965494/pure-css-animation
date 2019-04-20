import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 7 / 100%;
  }

  overflow: hidden;
  --pos: @pn(100% 50%, 0 50%);

  ::after {
    content: '';
    position: absolute;
    @size: 1800% 600%;
    background: @m(50, (
      radial-gradient(
        ellipse 80% 32%,
        @pn(#fff4e0, #06acb5, #17191d, #fc3d3c, #f8b501) 45%,
        transparent 0
      )
      var(--pos) / calc(@n() * 2%) calc(@n() * 2%)
      no-repeat
    ));
  }
`

export default function Pattern2() {
  return <Pattern />
}
