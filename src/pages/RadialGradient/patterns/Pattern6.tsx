import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 7 / 100%;
    background-color: @p(#f8b501, #06acb5, #fc3d3c);
    overflow: hidden;
  }

  transform: rotate(@pn(45deg, -45deg)) scale(.9);

  --c: @p(#fff4e0, #f8b501, #06acb5, #fc3d3c);

  background-repeat: space;
  background-position: center;
  background-color: #17191d;
  background-image: @m(4, radial-gradient(
    var(--c) 35%, transparent 0
  ));
  background-size: @m(4, @pn(100% 40%, 40% 100%));

  @random(.5) {
    background-size: @m(4, @pn(25% 25%, 25% 25%));
  }

  @random(.4) {
    background-size: @m(4, @pn(100% 30%, 30% 100%));
  }

  @random(.3) {
    background-size: @m(4, @pn(100% 45%, 45% 100%));
  }

  @random(.2) {
    background-size: @m(4, @pn(60% 45%, 45% 60%));
  }

  @random(.2) {
    background-image: @m(4, radial-gradient(var(--c) 50%, transparent 0));
    background-size: @m(4, @pn(100% 60%, 60% 100%));
  }

  ::after {
    content: '';
    position: absolute;
    left: @pn(auto, 105%);
    top: @pn(105%, auto);
    @size: 50%;
    background-image: radial-gradient(@p(#17191d, #fff4e0) @r(20%, 60%), transparent 0);
  }
`

export default function Pattern6() {
  return <Pattern />
}
