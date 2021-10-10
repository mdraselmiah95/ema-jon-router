import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={() => (user.email ? children : <Redirect></Redirect>)}
    ></Route>
  );
};

export default PrivateRoute;
