import React from "react";
import { Row, Col } from "antd";
import logo from "../../../img/header/logo.svg";

export const FooterMenuTitle = () => {
  return (
    <Row className="footer-menu-title-container">
      <Col xs={{ span: 24 }} className="logo">
        <img src={logo} alt="logo" />
      </Col>
      <Col xs={{ span: 24 }} className="title">
        Data visualization, and expense management for your business.
      </Col>
    </Row>
  );
};
