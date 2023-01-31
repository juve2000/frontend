import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col, Menu, Button, Spin } from "antd";
import { usePermissions } from "../../hooks/usePermissions";
import type { MenuProps } from "antd";
import { getUsersListReq } from "../../actions/user";

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

export const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { checkPermission, PermissionType } = usePermissions();
  const usersList = useSelector((state: any) => state.user.usersList);

  const getPath = (path: string) => {
    return `${pathname}/${path}`;
  };

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    link?: any,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    console.log("render");
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  React.useEffect(() => {
    console.log("users", users);
  }, [usersList]);

  const getUsers = () => {
    if (!usersList.length) {
      dispatch(getUsersListReq({}));
    }
  };

  const users: MenuItem[] = [
    getItem("Navigation One", "sub1", "/", <MailOutlined />, [
      getItem("Option 5", "5", "/", <Spin />),
    ]),
  ];

  const items = React.useMemo(() => {
    return [
      getItem(
        "Units",
        "units",
        getPath("units"),

        null,
        [
          getItem("All Units", "allunits", "/allunits", <MailOutlined />),
          getItem("Logs", "logs", "/logs", <MailOutlined />),
        ]
      ),
      getItem(
        "Dashboard",
        "dashboard",
        getPath("dashboard"),
        <span className="icon-icon-atention"></span>,
        []
      ),
      getItem("Navigation One", "sub1", "/", <MailOutlined />, [
        ...usersList.map((user: any) => {
          return getItem(user.email, `/client/${user.id}`);
        }),
      ]),
      getItem("Navigation One", "sub1", "/", <MailOutlined />, [
        ...usersList.map((user: any) => {
          return getItem(user.email, `/client/${user.id}`);
        }),
      ]),
    ];
  }, []);

  const FirstMenu = React.useMemo(() => {
    return (
      <Menu
        className="ubuntu"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["units"]}
        mode="inline"
        //   theme="dark"
        onClick={(item) => {
          navigate(item.key);
        }}
        items={items}
        // onOpenChange={(item) => {
        //   getUsers();
        // }}
      />
    );
  }, []);

  return (
    <Row className="side-bar ubuntu">
      <Col span={24}>{FirstMenu}</Col>
    </Row>
  );
};
