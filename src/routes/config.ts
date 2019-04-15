import PageConfig from '../pages'
import { ComponentClass } from 'react'
import { RouteComponentProps } from 'react-router'

// tslint:disable-next-line:no-var-requires
const importModule = require('./__import__production').default

interface IRouteConfig {
  id: string
  path: string
  title: string
  description: string
  reference: string
  component: ComponentClass<RouteComponentProps>
  preview: any
}

const { AnimatedCssSeasons, FloatingHeart } = PageConfig

const config: IRouteConfig[] = [
  {
    id: '01',
    path: '/app/animatedCssSeasons',
    title: 'Animated CSS Seasons',
    description: AnimatedCssSeasons.description,
    reference: AnimatedCssSeasons.reference,
    component: importModule(AnimatedCssSeasons.component),
    preview: AnimatedCssSeasons.preview
  },
  {
    id: '02',
    path: '/app/floatingHeart',
    title: 'Floating Heart',
    description: FloatingHeart.description,
    reference: FloatingHeart.reference,
    component: importModule(FloatingHeart.component),
    preview: FloatingHeart.preview
  }
]

export default config
