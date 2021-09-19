import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopBar from './components/TopBar'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import PageNotFound from './pages/PageNotFound'

const DefaultContainer = () => (
  <>
    <TopBar />

    <div className="container-fluid pt-3">
      <Switch>
        <Route path="/home" exact={true} component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </>
)

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={DefaultContainer} />
      </Switch>
    </BrowserRouter>
  )
}
