import React from "react";

import { Row, Col } from "antd";

import "./log-top-panel.scss";

export const LogViolationPanel = (props: any) => {
  return (
    <Row>
      <Col
        span={24}
        className="ubuntu log-violation-container bold"
        style={{ display: "flex", fontWeight: "bold" }}
      >
        <div style={{ color: "#374957", marginRight: 20 }}>Violation</div>
        <div style={{ color: "#FD371F" }}>Signature 11 Hours driving limit</div>
      </Col>
    </Row>
  );
};
