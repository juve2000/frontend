import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Row, Col } from "antd";
import { Header } from "../header/header";
import { SideBar } from "../SideBar/SideBar";

export const ClientLayout = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
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
