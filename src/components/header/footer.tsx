import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col } from "antd";
import { Logo } from "./logo";
import { UserSettings } from "./UserSettings";
import { LogOut } from "../access/LogOut";
import menuCollapse from "../../img/menu-collapse.svg";

import "./header.scss";

export const Footer = (props: any) => {
  const { toggleMenu } = props;
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);
  console.log("x", location.pathname === ("/client" || "/client/"));
  return (
    <Row
      className="footer"
      style={{
        width: "100%",
        paddingLeft: "16px",
        position: "fixed",
        paddingBottom: "16px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Col className="flex-start" span={8}>
        <div>© 2023 Highest Gears LLC | All rights reserved</div>
      </Col>
      <Col className="flex-start" span={6}>
        <div>Privacy Policy</div>
      </Col>
      <Col className="flex-start" span={4}>
        <div>Terms & Conditions</div>
      </Col>
      <Col
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: 26,
          alignItems: "center",
        }}
        span={6}
      >
        <div>created by GBMF</div>
      </Col>
    </Row>
  );
};
