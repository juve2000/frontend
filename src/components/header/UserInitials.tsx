import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Dropdown } from "antd";
import { LogOutNoButton } from "../access/LogOut";
import { CaretLeftOutlined } from "@ant-design/icons";

export const UserInitials = (props: any) => {
  const user = useSelector((state: any) => state.auth.user);
  const [firstName] = user.first_name.split("");
  const [lastName] = user.last_name.split("");
  const navigate = useNavigate();
  const location = useLocation();
  const UserMenu = () => {
    return (
      <Dropdown
        placement="bottomLeft"
        trigger={["click"]}
        className="menu-option orange"
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
                    className="icon-fi-rr-settings"
                    style={{
                      marginRight: 10,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </span>{" "}
                  User settings
                </div>
              ),
            },
            {
              key: "2",
              label: (
                <div
                  onClick={() => {
                    navigate(`/client/carriers/create`);
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span style={{ marginRight: 10 }}>
                    <CaretLeftOutlined />
                  </span>{" "}
                  <LogOutNoButton />
                </div>
              ),
            },
          ],
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <div
            className="user-initials ubuntu"
            style={{ marginRight: 10, fontSize: 13 }}
          >
            {firstName.toUpperCase()} {lastName.toUpperCase()}
          </div>
          <div style={{ color: "#2B3D4DB2" }}>
            <div>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
            <div>
              <span style={{ marginRight: 4 }}>{user.first_name}</span>
              <span>{user.last_name}</span>
            </div>
          </div>
        </div>
      </Dropdown>
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <UserMenu />
    </div>
  );
};
