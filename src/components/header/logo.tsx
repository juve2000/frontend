import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import logo from "../../img/logo.svg";
import logo2 from "../../img/Logo2.svg";

export const Logo = () => {
  return <img src={logo} style={{ width: "100%", maxWidth: "195px" }} />;
};

export const Logo2 = () => {
  return <img src={logo2} style={{ width: "100%", maxWidth: "195px" }} />;
};
