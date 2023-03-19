import React from "react";
import { Outlet } from "react-router-dom";
import { CarriersList } from "./CarriersList";
import { Row, Col } from "antd";

export const CarriersPage = (props: any) => {
  return (
    <Row>
      <Col span={24}>
        {/* <CarriersList /> */}
        <Outlet />
      </Col>
    </Row>
  );
};
