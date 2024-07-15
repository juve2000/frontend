import React from "react";
import { Row, Col } from "antd";

export const FooterBottomPart = () => {
  return (
    <Row className="footer-bottom-container">
      <Col md={{ span: 20 }}>
        <Row>
          <Col md={{ span: 8 }} className="footer-bottom-item">
            Privacy Policy
          </Col>
          <Col md={{ span: 8 }} className="footer-bottom-item">
            Terms & Conditions
          </Col>
          <Col md={{ span: 8 }} className="footer-bottom-item">
            Cookie Policy
          </Col>
        </Row>
      </Col>
      <Col md={{ span: 4 }}>© Gbmf</Col>
    </Row>
  );
};
