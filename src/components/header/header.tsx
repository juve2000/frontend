import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import { Logo } from "./logo";
import { UserSettings } from "./UserSettings";
import { LogOut } from "../access/LogOut";
import menuCollapse from "../../img/menu-collapse.svg";

import "./header.scss";

export const Header = (props: any) => {
  const { toggleMenu } = props;
  return (
    <Row className="header">
      <Col className="flex-start" span={4}>
        <div style={{ marginLeft: 25 }}>
          <Logo />
        </div>
      </Col>
      <Col span={12}>
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <img
            src={menuCollapse}
            style={{ cursor: "pointer" }}
            onClick={toggleMenu}
          />
        </div>
      </Col>
      <Col span={8} style={{ paddingRight: 20 }}>
        <UserSettings />
      </Col>
    </Row>
  );
};
