import React from 'react';
import { Redirect, Route } from 'react-router';

// const loggedIn = isLoggedIn();

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (isLoggedIn ? Component : <Redirect to="/signin" />)}
    />
  );
};

export default PrivateRoute;
