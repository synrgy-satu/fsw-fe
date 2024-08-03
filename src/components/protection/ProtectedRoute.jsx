import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { authState } = useAuth();

  if (!authState) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
