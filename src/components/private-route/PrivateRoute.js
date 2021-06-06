import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ children,...rest }) => {
  const location = useLocation();
  const { isAuthorised } = useSelector((state) => state.login);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthorised ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
