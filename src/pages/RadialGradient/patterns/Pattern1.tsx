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
    
    @size: 200%;
    --pos: @pn(0 100%, 100% 0, 100% 100%, 0 0);
    
    background: 
      repeating-radial-gradient(
        circle at var(--pos),
        transparent 0,
        transparent @r(5%, 8%),
        @p(#fff4e0, #f8b501, #06ac85, #fc3d3c) @lr(),
        @lp() calc(@lr() + 1px)
      ),
      @m(5, (
        radial-gradient(
          @pn(#f8b501, #fc3d3c, #06acb5, #fff4e0, #17191d) 50%,
          transparent 0
        )
        var(--pos) / calc(@n() * 20%) calc(@n() * 20%)
        no-repeat
      ));
  }
`

export default function Pattern1() {
  return <Pattern />
}
