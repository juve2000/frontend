import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { debounce } from "lodash";
import { useLocation, useNavigate } from "react-router-dom";
import { MainRouter } from "./routes";
import { getLoggedInUserReq } from "./actions/auth";
import { setScreenSize } from "./actions";

import { getScreenDimension } from "./utils/screen";

import { usePermissions } from "./hooks/usePermissions";
import { screenTypeSelector } from "./utils/screen";
import io from "socket.io-client";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const loading = useSelector((state: any) => state.auth.loading);
  const { isAuthenticated, user } = useSelector((state: any) => state.auth);
  const state = useSelector((state: any) => state);
  const screen = useSelector((state: any) =>
    screenTypeSelector(state?.screen?.width)
  );

  useEffect(() => {
    dispatch(setScreenSize(getScreenDimension(window)));
  }, []);

  const onScreenResized = debounce((e) => {
    dispatch(setScreenSize(getScreenDimension(e.target)));
  }, 300);

  useEffect(() => {
    window.addEventListener("resize", onScreenResized);
  }, []);

  useEffect(() => {
    dispatch(getLoggedInUserReq());
    console.log("env", process.env.REACT_APP_API);
  }, []);

  useEffect(() => {
    console.log("STATE", state);
  }, [state]);

  if (loading) {
    return <Spin />;
  }

  // if (isAuthenticated) {
  //   if (!user.company?.name) {
  //     navigate("/client/company");
  //   } else {
  //     navigate("/client");
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
