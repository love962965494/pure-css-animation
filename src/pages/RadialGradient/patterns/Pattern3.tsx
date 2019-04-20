import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 7 / 100%;
  }

  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    
    @size: 900% 1022%;
    --pos: @pn(100% 50%, 0 50%);
    background: @m(50, (
      radial-gradient(
        ellipse 100% 40%,
        @pn(#f8b501, #fc3d3c, #17191d, #06acb5, #fff4e0) 50%,
        transparent 0
      )
      var(--pos) / calc(@n() * 2%) calc(@n() * 2%)
      no-repeat
    ));
  }

  @row(even) {
    ::after {
      background: @m(50, (
        radial-gradient(
          ellipse 100% 40%,
          @pn(#17191d, #fc3d3c, #f8b501, #fff4e0, #06acb5) 50%,
          transparent 0
        )
        var(--pos) / calc(@n() * 2%) calc(@n() * 2%)
        no-repeat
      ));
    }
  }
`

export default function Pattern3() {
  return <Pattern />
}
