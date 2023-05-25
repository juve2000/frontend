import React from "react";
import { Row, Col, Button, Dropdown } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import { LogOut } from "../access/LogOut";
import { UserInitials } from "./UserInitials";

export const UserSettings = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const UnitMenu = () => {
    return (
      <Dropdown.Button
        placement="bottomLeft"
        trigger={["click"]}
        className="menu-option orange"
        icon={<DownOutlined />}
        menu={{
          items: [
            {
              key: "1",
              label: (
                <div
                  onClick={() => {
                    navigate(`/client/carriers/create`);
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span
                    className="icon-fi-rr-inbox"
                    style={{ marginRight: "10px" }}
                  ></span>{" "}
                  Carrier
                </div>
              ),
            },
            {
              key: "2",
              label: (
                <div
                  onClick={() => {
                    navigate(`/client/drivers/create`);
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span
                    className="icon-fi-rr-user"
                    style={{ marginRight: "10px" }}
                  ></span>{" "}
                  Driver
                </div>
              ),
            },
            {
              key: "3",
              label: (
                <div
                  onClick={() => {
                    navigate(`/client/trailer/create`);
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span
                    className="icon-fi-rr-trailer"
                    style={{ marginRight: "10px" }}
                  ></span>{" "}
                  Trailer
                </div>
              ),
            },
            {
              key: "4",
              label: (
                <div
                  onClick={() => {
                    navigate(`/client/vehicle/create`);
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span
                    className="icon-fi-rr-truck-side"
                    style={{ marginRight: "10px" }}
                  ></span>{" "}
                  Vehicle
                </div>
              ),
            },
            {
              key: "5",
              label: (
                <div
                  onClick={() => {
                    navigate(`/client/device/create`);
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span
                    className="icon-fi-rr-data-transfer"
                    style={{ marginRight: "10px" }}
                  ></span>{" "}
                  Devices
                </div>
              ),
            },
            {
              key: "6",
              label: (
                <div
                  onClick={() => {
                    navigate(`/client/driver_group/create`);
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span
                    className="icon-fi-rr-folder"
                    style={{ marginRight: "10px" }}
                  ></span>{" "}
                  Group
                </div>
              ),
            },
          ],
        }}
      >
        Create unit
      </Dropdown.Button>
    );
  };
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
      <div style={{ marginRight: 20 }} className="create-unit">
        <UnitMenu />
      </div>
      {/* <div style={{ marginRight: 20, fontSize: 20, color: "black" }}>
        <span className="icon-fi-rr-bell-ring" />
      </div> */}
      <div>
        <UserInitials />
      </div>
      {/* <div style={{ marginLeft: 20, marginRight: 20 }}>
        <LogOut />
      </div> */}
    </Row>
  );
};
