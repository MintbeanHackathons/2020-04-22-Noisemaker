import React from 'react'
import {Route, Switch, Router, Redirect} from 'react-router-dom'
import {HomePage} from '../components'
import {history} from '../utils'

const Routes = function (props) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}
export default Routes
