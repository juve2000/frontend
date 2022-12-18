import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import { CustomIcon } from "../common/CustomIcon";

import "./header.scss";

export const Header = () => {
  return (
    <Row className="header">
      <Col span={6}>
        <CustomIcon />
      </Col>
      <Col span={6}>Search</Col>
      <Col span={6}>account</Col>
    </Row>
  );
};
