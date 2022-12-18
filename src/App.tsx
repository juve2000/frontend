import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Spin } from "antd";
import { SignIn } from "./components/access/SignIn";
import { SignUp } from "./components/access/SignUp";
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
  const loading = useSelector((state: any) => state.auth.loading);
  // const types = generateAllPermissions(ALL_PERMISSION_TYPES);
  const { checkPermission, PermitionType } = usePermissions();
  useEffect(() => {
    dispatch(getLoggedInUserReq());
  }, []);

  useEffect(() => {
    console.log("permissions", PermitionType);
    console.log(
      "permission",
      PermitionType.ELD.ELD_CREATE,
      checkPermission(PermitionType.ELD.ELD_CREATE)
    );
  }, [PermitionType]);

  if (loading) {
    return <Spin />;
  }

  return <div className=".bg-main">{<MainRouter />}</div>;
}

export default App;
