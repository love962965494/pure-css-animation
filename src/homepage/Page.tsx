import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import App from './App'
import Routes from '../routes/routes'

const redirectToDashboard = () => <Redirect to="/dashboard" push={true} />

export default function Page() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" render={redirectToDashboard} />
        <Route exact={true} path="/dashboard" component={App} />
        <Routes />
      </Switch>
    </BrowserRouter>
  )
}
