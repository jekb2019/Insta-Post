import React from 'react';
import { Redirect, Route } from 'react-router';

const PublicRoute = ({
  component: Component,
  isLoggedIn,
  restricted,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() =>
        isLoggedIn && restricted ? <Redirect to="/home" /> : Component
      }
    />
  );
};

export default PublicRoute;
