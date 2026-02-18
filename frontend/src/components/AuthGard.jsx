import React, { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AuthGard = (Component) => {
  return function AuthGardComponent(props) {
    const { isAuthenticated, loading } = useContext(AuthProvider);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return <Component {...props} />;
  };
};

export default AuthGard;
