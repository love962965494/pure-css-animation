import AnimatedCssSeasonsPreview from './AnimatedCssSeasons/AnimatedCssSeasons.gif'

interface IPageConfig {
  [key: string]: IPageItemConfig
}

interface IPageItemConfig {
  id: string
  title: string
  description: string
  component: string
  preview: any
}

const config: IPageConfig = {
  AnimatedCssSeasons: {
    id: '01',
    title: '四季变化动画',
    description: '一个关于四季变化的动画效果实现',
    component: '/AnimatedCssSeasons/AnimatedCssSeasons',
    preview: AnimatedCssSeasonsPreview
  }
}

export default config
