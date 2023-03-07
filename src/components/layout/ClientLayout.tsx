import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Row, Col, Form, Button, Input } from "antd";
import { Header } from "../header/header";
import { SideBar } from "../SideBar/SideBar";
import { CommonInput } from "../common/inputs";
import { validate } from "../../utils/validation";
import { carrierForm } from "../modules/carrier/carrier-form";
import "./clientlayout.scss";

export const ClientLayout = () => {
  const [form] = Form.useForm();
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(true);
  const handleSubmit = (values: any) => {
    console.log("form", form);
    console.log("values", values);
  };

  return (
    <>
      <Row className="header-container">
        <Col span={24}>
          <Header toggleMenu={() => setIsOpenSidebar(!isOpenSidebar)} />
        </Col>
      </Row>
      <Row style={{ paddingLeft: 27, paddingRight: 25, paddingTop: 60 }}>
        <Col span={isOpenSidebar ? 3 : 1}>
          <SideBar isOpen={isOpenSidebar} />
        </Col>
        <Col
          span={isOpenSidebar ? 17 : 19}
          style={{
            paddingLeft: 25,
            paddingTop: 25,
          }}
        >
          <Outlet />
        </Col>
        <Col span={4}>
          <div>widget</div>
        </Col>
      </Row>
    </>
  );
};
