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

const { AnimatedCssSeasons, FloatingHeart, BorderTransformations, RadialGradient } = PageConfig

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
  },
  {
    id: '03',
    path: '/app/borderTransformations',
    title: 'Border Transformations',
    description: BorderTransformations.description,
    reference: BorderTransformations.reference,
    component: importModule(BorderTransformations.component),
    preview: BorderTransformations.preview
  },
  {
    id: '04',
    path: '/app/radialGradient',
    title: 'Radial Gradient',
    description: RadialGradient.description,
    reference: RadialGradient.reference,
    component: importModule(RadialGradient.component),
    preview: RadialGradient.preview
  }
]

export default config
