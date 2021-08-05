import { checkAuth } from 'utils/auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';
import Admin from './pages/Admin';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Login} />
      <PrivateRoute
        exact
        path='/user'
        userTypes={['teacher', 'parent']}
        component={User}></PrivateRoute>
      <PrivateRoute exact path='/admin' userTypes={['admin']} component={Admin}></PrivateRoute>
    </Switch>
  </Router>
);

const PrivateRoute = ({ component: Component, userTypes: _userTypes, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (checkAuth(_userTypes) ? <Component {...props} /> : <Redirect to='/' />)}
    />
  );
};

export default Routes;
