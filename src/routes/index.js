import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../screens/Home'
import Hello from '../screens/Hello'
import CounterScreen from '../screens/CounterScreen'
import UploadContract from '../screens/UploadContract'
import UploadOffer from '../screens/UploadOffer'
import AgencyMenu from '../screens/AgencyMenu'
import CompanyMenu from '../screens/CompanyMenu'
import Explore from '../screens/Explore'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'
import Welcome from '../components/Welcome'


const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={CounterScreen} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/explore" component={Explore} />
      <Route path="/agency_menu" component={AgencyMenu} />
      <Route path="/company_menu" component={CompanyMenu} />
      <Route path="/upload_contract" component={UploadContract} />
      <Route path="/upload_offer" component={UploadOffer} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
