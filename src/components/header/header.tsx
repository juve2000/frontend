import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import { Logo } from "./logo";
import { LogOut } from "../access/LogOut";

import "./header.scss";

export const Header = () => {
  return (
    <Row className="header">
      <Col className="flex-start" span={6}>
        <Logo />
      </Col>
      <Col span={6}>Search</Col>
      <Col span={6}>
        <LogOut />
      </Col>
    </Row>
  );
};
