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
  const { isAuthenticated, user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(getLoggedInUserReq());
    console.log("env", process.env.REACT_APP_API);
  }, []);

  if (loading) {
    return <Spin />;
  }

  // if (isAuthenticated) {
  //   if (!user.company?.name) {
  //     // navigate("/client/company");
  //   } else {
  //     // navigate("/client");
  //   }
  // }

  if (location.pathname === "/" && isAuthenticated) {
    // if (!user.company?.name) {
    //   navigate("/client/company");
    // } else {
    //   navigate("/client");
    // }
    navigate("/client");
  }
  if (location.pathname === "/" && !isAuthenticated) {
    navigate("/signin");
  }

  return (
    <div className="app-container ubuntu main hw100">{<MainRouter />}</div>
  );
}

export default App;
