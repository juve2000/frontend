import React from "react";
import { Row, Col, Button } from "antd";
import { useSelector } from "react-redux";
import { LogOut } from "../access/LogOut";
import { UserInitials } from "./UserInitials";

export const UserSettings = (props: any) => {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <Row
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        justifyContent: "flex-end",
      }}
    >
      <div style={{ marginRight: 20 }}>
        <Button className="orange">Create unit</Button>
      </div>
      {/* <div style={{ marginRight: 20, fontSize: 20, color: "black" }}>
        <span className="icon-fi-rr-bell-ring" />
      </div> */}
      <div>
        <UserInitials />
      </div>
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <LogOut />
      </div>
    </Row>
  );
};
