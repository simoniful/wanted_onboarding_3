import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login.js';
import Singup from './Signup.js';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Singup} />
        </Switch>
      </Router>
    );
  }
}
