import React from 'react'
import 'css-doodle'

declare global {
  namespace JSX {
    // tslint:disable-next-line: interface-name
    interface IntrinsicElements {
      'css-doodle': any
    }
  }
}

export default ([rule = '']: TemplateStringsArray) => () => <css-doodle>{rule}</css-doodle>
