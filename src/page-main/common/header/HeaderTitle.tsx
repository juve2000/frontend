import { Button, Row, Col } from "antd";
import React from "react";

export const HeaderTitle = () => {
  return (
    <Row>
      <Col md={{ span: 6 }}></Col>
      <Col md={{ span: 12 }}>
        <div className="header-title-container">
          <div className="title">Stay on Track, Stay Compliant</div>
          <div className="subTitle">
            Empowering Logistics Companies and Owner- Operators with HOS and ELD
            Services
          </div>
          <div className="header-title-btn-container">
            <Button className="black">Get a Free Demo</Button>
            <Button className="orange">See Pricing</Button>
          </div>
        </div>
      </Col>
      <Col md={{ span: 6 }}></Col>
    </Row>
  );
};
