import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Col } from "antd";

export const UnitsPage = (props: any) => {
  return (
    <Row>
      <Col span={24}>
        <Outlet />
      </Col>
    </Row>
  );
};
