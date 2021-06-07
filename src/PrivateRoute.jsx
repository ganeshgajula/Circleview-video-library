import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../src/context/AuthProvider";

export const PrivateRoute = ({ path, ...props }) => {
  const { isUserLoggedIn } = useAuth();

  return isUserLoggedIn ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
