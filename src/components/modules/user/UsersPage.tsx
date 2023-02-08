import React from "react";
import { Outlet } from "react-router-dom";
import { UsersList } from "./UsersList";
import { Row, Col } from "antd";

export const UsersPage = (props: any) => {
  return (
    <Row>
      <Col span={24}>Users page</Col>
      <Col span={24}>
        {/* <CarriersList /> */}
        <Outlet />
      </Col>
    </Row>
  );
};
