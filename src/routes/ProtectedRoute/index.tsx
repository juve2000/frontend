import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";

export const ProtectedRoute = ({ children }: any) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  React.useEffect(() => {
    console.log("isAuth", isAuthenticated);
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return isAuthenticated && children;
};
