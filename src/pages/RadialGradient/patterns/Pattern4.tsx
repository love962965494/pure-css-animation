import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 7 / 100%;
  }

  background: @p(#fff4e0, #f8b501, #06acb5, #17191d, #fc3d3c);

  ::after {
    content: '';
    position: absolute;

    @size: 100%;
    
    background: @m(4, radial-gradient(
      circle at @p(-40% -40%, 140% 140%, 140% -40%, -40% 140%),
      @p(#fff4e0, #f8b501, #06acb5, #17191d, #fc3d3c) 50%,
      transparent 50%
    )),
    radial-gradient(
      @p(#fff4e0, #f8b501, #06acb5, #17191d, #fc3d3c) @r(10%, 40%),
      transparent 0
    );
  }
`

export default function Pattern4() {
  return <Pattern />
}
