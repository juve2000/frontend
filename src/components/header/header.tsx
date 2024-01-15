import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import { Logo } from "./logo";
import { UserSettings } from "./UserSettings";
import { LogOut } from "../access/LogOut";
import menuCollapse from "../../img/menu-collapse.svg";

import "./header.scss";

export const Header = (props: any) => {
  const { toggleMenu } = props;
  const navigate = useNavigate();
  return (
    <Row className="header">
      <Col className="flex-start" span={4}>
        <div
          style={{
            marginLeft: 25,
            cursor: "pointer",
            // backgroundColor: "#ffab00",
            padding: "5px 10px",
          }}
          onClick={() => navigate("/")}
        >
          <Logo />
        </div>
      </Col>
      <Col span={12}>
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          {/* <img
            src={menuCollapse}
            style={{ cursor: "pointer" }}
            onClick={toggleMenu}
          /> */}
        </div>
      </Col>
      <Col span={8} style={{ paddingRight: 25 }}>
        <UserSettings />
      </Col>
    </Row>
  );
};
