import React from 'react'
import Doodle from '../../Doodle'

const Pattern = Doodle`
  :doodle {
    @grid: 8 x 1 / 100%;
    background-color: #17191d;
    background-image: 
      radial-gradient(
        @p(#fff4e0, #f8b501, #06acb5, #fc3d3c) 4%, transparent 0
      ),
      radial-gradient(
        #17191d 8%, transparent 0
      ),
      radial-gradient(
        @p(#fff4e0, #f8b501, #06acb5, #fc3d3c) 10%, transparent 0
      );
    
    overflow: hidden;
  }


  @place-cell: center;
  @size: 50%;

  transform-origin: -50% 50%;
  transform: translateX(100%) rotate(calc(1turn / @size() * @i()));

  ::before, ::after {
    content: '';
    position: absolute;
  }

  ::before {
    @size: 24%;
    left: -27%;
    transform-origin: -100% center;
    transform: rotate(22deg);
    background: 
      radial-gradient(
        ellipse 100% 80%, 
        @pd(#fff4e0, #f8b501, #06acb5, #fc3f3c) 50%,
        transparent 0
      )
      20% 50% / 40% 40% no-repeat,
      radial-gradient(
        ellipse 100% 80%, #17191d 50%, transparent 0
      )
      10% 50% / 80% 80% no-repeat,
      radial-gradient(
        ellipse 100% 80%,
        @pd(#fff4e0, #f8b501, #06acb5, #fc3c3c) 50%,
        transparent 0
      )
      0 / 100% 100% no-repeat;
  }

  ::after {
    @size: 100% 72%;
    right: 0;
    background: 
      radial-gradient(
        @pd(#fff4e0, #f8b501, #06acb5, #fc3d3c) 30%,
        transparent 0
      )
      2% 50% / 25% 25% no-repeat,
      radial-gradient(
        #17191d 50%,
        transparent 0
      )
      5% 50% / 25% 25% no-repeat,
      radial-gradient(
        @pd(#fff4e0, #f8b501, #06acb5, #fc3c3d) 70%,
        transparent 0
      )
      8% 50% / 30% 30% no-repeat,
      radial-gradient(
        #17191d 60%,
        transparent 0
      )
      0% 50% / 50% 50% no-repeat,
      radial-gradient(
        @pd(#fff4e0, #f8b501, #06acb5, #fc3c3d) 70%,
        transparent 0
      );
  }
`

export default function Pattern5() {
  return <Pattern />
}
