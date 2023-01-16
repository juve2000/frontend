import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";

export const SideBarItem = () => {
  return (
    <Row className="side-bar">
      <Col span={6}>Side bar</Col>
    </Row>
  );
};
