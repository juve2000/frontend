import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { HeaderBar } from "../common/header/HeaderBar";
import { HeaderTitle } from "../common/header/HeaderTitle";
import dashboardImage from "../../img/header/dashboard.png";

export const HeaderSection = (props: any) => {
  return (
    <Row>
      <Col sm={{ span: 24 }} className="header-bar-section-container">
        <HeaderBar />
      </Col>
      <Col sm={{ span: 24 }}>
        <HeaderTitle />
      </Col>
      <Col sm={{ span: 1 }} />
      <Col
        sm={{ span: 22 }}
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={dashboardImage} alt="dashboard" />
      </Col>
    </Row>
  );
};
