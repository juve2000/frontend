import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Row, Col } from "antd";
import { Header } from "../header/header";
import { SideBar } from "../SideBar/SideBar";

export const ClientLayout = () => {
  return (
    <>
      <Row style={{ paddingLeft: 23, paddingRight: 25 }}>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row style={{ paddingLeft: 27, paddingRight: 25 }}>
        <Col span={6}>
          <SideBar />
        </Col>
        <Col span={18}>
          content
          <Outlet />
        </Col>
      </Row>
    </>
  );
};
