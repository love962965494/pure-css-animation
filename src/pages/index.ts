import AnimatedCssSeasonsPreview from './AnimatedCssSeasons/AnimatedCssSeasons.gif'
import FloatingHeartPreview from './FloatingHeart/FloatingHeart.gif'

interface IPageConfig {
  [key: string]: IPageItemConfig
}

interface IPageItemConfig {
  id: string
  title: string
  description: string
  reference: string
  component: string
  preview: any
}

const config: IPageConfig = {
  AnimatedCssSeasons: {
    id: '01',
    title: '四季变化动画',
    description: '一个关于四季变化的动画效果实现',
    reference: 'https://codepen.io/agathaco/pen/rpZoYd',
    component: '/AnimatedCssSeasons/AnimatedCssSeasons',
    preview: AnimatedCssSeasonsPreview
  },
  FloatingHeart: {
    id: '02',
    title: '漂浮的心',
    description: '使用css-doodle实现的一个漂浮的心的动画效果',
    reference: 'https://codepen.io/yuanchuan/pen/wZJqNK',
    component: '/FloatingHeart/FloatingHeart',
    preview: FloatingHeartPreview
  }
}

export default config
