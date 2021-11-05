import React from 'react';
import { Redirect, Route } from 'react-router';
import { isLoggedIn } from '../utils/helper';

const loggedIn = isLoggedIn();

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        loggedIn && restricted ? <Redirect to="/home" /> : Component
      }
    />
  );
};

export default PublicRoute;
