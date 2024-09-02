import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  } else return children;
};

export default ProtectedRoute;
