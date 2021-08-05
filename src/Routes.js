import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';
import Admin from './pages/Admin';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/user' component={User} />
      <Route exact path='/admin' component={Admin} />
    </Switch>
  </Router>
);

export default Routes;
