import React from "react";
import { Row, Col } from "antd";
import { FooterMenuTitle } from "./FooterMenuTitle";
import { FooterMenuItems } from "./FooterMenuItems";

export const FooterMenu = () => {
  return (
    <Row>
      <Col md={{ span: 8 }} xs={{ span: 24 }}>
        <FooterMenuTitle />
      </Col>
      <Col md={{ span: 16 }} xs={{ span: 24 }}>
        <FooterMenuItems />
      </Col>
    </Row>
  );
};
