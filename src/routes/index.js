import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../screens/Home'
import Hello from '../screens/Hello'
import CounterScreen from '../screens/CounterScreen'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={CounterScreen} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
