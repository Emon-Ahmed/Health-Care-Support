import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({ children, ...rest }) {
  const { user, loading } = useAuth();
  if (loading) {
   return <div className="spinner-grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
}
