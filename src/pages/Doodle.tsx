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

export const update = ($ev: MouseEvent) => {
  const target = $ev.target as EventTarget & { update?: () => void }

  if (target && target.update) {
    target.update()
  }
}

export default ([rule = '']: TemplateStringsArray) => () => <css-doodle>{rule}</css-doodle>
