import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopBar from './components/TopBar'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import Page404 from './pages/Page404'

const DefaultContainer = () => (
  <div className="container-fluid">
    <TopBar />

    <Switch>
      <div className="container">
        <Route exact path="/home" component={HomePage} />
        <Route path="/idea/view/:id?" component={HomePage} />
        <Route component={Page404} />
      </div>
    </Switch>
  </div>
)

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={DefaultContainer} />
      </Switch>
    </BrowserRouter>
  )
}
