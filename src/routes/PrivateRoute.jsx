import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <span>Loading...</span>;
  if (user?.email) {
    return children;
  }
  console.log(location.pathname);
  console.log(location.state);
  return <Navigate to="/login" state={location.pathname} replace={true} />;
};

export default PrivateRoute;
