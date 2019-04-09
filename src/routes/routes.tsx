import routeConfig from './config'
import { Switch, Route } from 'react-router-dom'
import React from 'react'

export default function Routes() {
  return (
    <Switch>
      {routeConfig.map((route) => (
        <Route key={route.id} path={route.path} component={route.component} />
      ))}
    </Switch>
  )
}
