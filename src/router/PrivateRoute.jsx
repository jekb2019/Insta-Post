import React from 'react';
import { Redirect, Route } from 'react-router';
import { isLoggedIn } from '../utils/helper';

const loggedIn = isLoggedIn();

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (loggedIn ? Component : <Redirect to="/signin" />)}
    />
  );
};

export default PrivateRoute;
