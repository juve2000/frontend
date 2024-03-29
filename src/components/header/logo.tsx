import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import logo from "../../img/logo.svg";
import logo2 from "../../img/Logo2.svg";
import burger from "../../img/burger.svg";
import newLogo from "../../img/newLogo.svg";

export const Logo = () => {
  return <img src={newLogo} style={{ width: "100%", maxWidth: "195px" }} />;
};

export const Logo2 = () => {
  return <img src={newLogo} style={{ width: "100%", maxWidth: "195px" }} />;
};

export const BurgerIcon = () => {
  return (
    <img
      src={burger}
      style={{ width: "15px", maxWidth: "195px", cursor: "pointer" }}
    />
  );
};
