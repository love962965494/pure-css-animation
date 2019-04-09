import PageConfig from '../pages'
import { ComponentClass } from 'react'
import { RouteComponentProps } from 'react-router'

// tslint:disable-next-line:no-var-requires
const importModule = require('./__import__' + process.env.NODE_ENV).default

interface IRouteConfig {
  id: string
  path: string
  title: string
  description: string
  component: ComponentClass<RouteComponentProps>
  preview: any
}

const { AnimatedCssSeasons } = PageConfig

const config: IRouteConfig[] = [
  {
    id: '01',
    path: '/app/animatedCssSeasons',
    title: 'Animated CSS Seasons',
    description: AnimatedCssSeasons.description,
    component: importModule(AnimatedCssSeasons.component),
    preview: AnimatedCssSeasons.preview
  }
]

export default config
