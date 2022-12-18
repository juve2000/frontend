import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";

export const Search = () => {
  return (
    <Row className="header">
      <Col span={6}>Logo</Col>
      <Col span={6}>Search</Col>
      <Col span={6}>account</Col>
    </Row>
  );
};
