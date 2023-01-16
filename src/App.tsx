import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Spin } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { MainRouter } from "./routes";
import axios from "axios";
import { getLoggedInUserReq } from "./actions/auth";
import {
  generateAllPermissions,
  ALL_PERMISSION_TYPES,
  generatePermission,
} from "./constants/role";

import { usePermissions } from "./hooks/usePermissions";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const loading = useSelector((state: any) => state.auth.loading);
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(getLoggedInUserReq());
  }, []);

  React.useEffect(() => {
    console.log("location", location);
  }, [location]);

  if (loading) {
    return <Spin />;
  }

  if (location.pathname === "/" && isAuth) {
    navigate("/client");
  }
  if (location.pathname === "/" && !isAuth) {
    navigate("/signin");
  }

  return (
    <div className="bg-main app-container ubuntu main hw100">
      {<MainRouter />}
    </div>
  );
}

export default App;
