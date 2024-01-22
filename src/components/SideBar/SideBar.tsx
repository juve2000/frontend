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

export const SideBar = (props: any) => {
  const { isOpen } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { checkPermission, PermissionType } = usePermissions();
  const usersList = useSelector((state: any) => state.user.usersList);
  console.log("pathname", pathname);
  const fullScreenRoutes = [
    "carriers",
    "drivers",
    "driver_group",
    "mechanic",
    "vehicle",
    "trailer",
    "device",
    "role",
    "company",
    "role",
    "user",
    "logs",
    "log",
  ];

  const getDefaultKey = (pathname: string): any => {
    const keys: any = [];
    fullScreenRoutes.forEach((route: any) => {
      if (pathname.indexOf(route) > -1) {
        keys.push(route);
      }
    });
    return keys;
  };

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
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

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
        "Dashboards",
        "dashboards",
        getPath("dashboards"),
        <span className="icon-fi-rr-home"></span>,
        []
      ),
      getItem(
        "Units",
        "units_",
        getPath("units_"),

        <span className="icon-fi-rr-layers">
          <span className="path1"></span>
          <span className="path2"></span>
          <span className="path3"></span>
        </span>,
        [
          getItem(
            "All Units",
            "units",
            "/units",
            <span className="icon-fi-rr-folder"></span>
          ),
        ]
      ),
      getItem(
        "All Logs",
        "logs_",
        getPath("logs_"),

        <span className="icon-fi-rr-layers">
          <span className="path1"></span>
          <span className="path2"></span>
          <span className="path3"></span>
        </span>,
        [
          getItem(
            "Logs",
            "logs",
            "/logs",
            <span className="icon-fi-rr-folder"></span>
          ),
        ]
      ),
      getItem(
        "Reports",
        "reports",
        getPath("reports"),

        <span className="icon-fi-rr-document-signed"></span>,
        [getItem("TBD", "reports", "/reports", <MailOutlined />)]
      ),
      getItem(
        "Manage",
        "manage",
        getPath("manage"),
        <span className="icon-icon-atention"></span>,
        [
          getItem(
            "Carriers",
            "carriers",
            "/carriers",
            <span className="icon-fi-rr-inbox"></span>
          ),
          getItem(
            "Drivers",
            "drivers",
            "/drivers",
            <span className="icon-fi-rr-user"></span>
          ),
          getItem(
            "Driver Group",
            "driver_group",
            "/driver_group",
            <span className="icon-fi-rr-folder"></span>
          ),
          // getItem(
          //   "Support Personal",
          //   "mechanic",
          //   "/mechanic",
          //   <span className="icon-fi-rr-mode-portrait"></span>
          // ),
          getItem(
            "Vehicles",
            "vehicle",
            "/vehicle",
            <span className="icon-fi-rr-truck-side"></span>
          ),
          // getItem(
          //   "Trailers",
          //   "trailer",
          //   "/trailer",
          //   <span className="icon-fi-rr-trailer"></span>
          // ),
          getItem(
            "Devices",
            "device",
            "/device",
            <span className="icon-fi-rr-data-transfer"></span>
          ),
          getItem(
            "Alerts",
            "alerts",
            "/alerts",
            <span className="icon-fi-rr-folder"></span>
          ),
        ]
      ),
      getItem(
        "Company Account",
        "company_account",
        getPath("company_account"),
        <span className="icon-fi-rr-building"></span>,
        [
          getItem(
            "Company",
            "company",
            "/company",
            <span className="icon-fi-rr-folder"></span>
          ),
          getItem(
            "Offices",
            "office",
            "/office",
            <span className="icon-fi-rr-folder"></span>
          ),
          getItem(
            "Roles & Permissions",
            "role",
            "/role",
            <span className="icon-fi-rr-key"></span>
          ),

          getItem(
            "Users",
            "user",
            "/user",
            <span className="icon-fi-rr-user"></span>
          ),
        ]
      ),
      getItem(
        "Maintenance",
        "maintenance",
        getPath("maintenance"),
        <span className="icon-fi-rr-building"></span>,
        [
          getItem(
            "TBD",
            "TBD",
            "/maintence",
            <span className="icon-fi-rr-folder"></span>
          ),
        ]
      ),
      getItem(
        "Settings",
        "settings",
        getPath("settings"),
        <span className="icon-fi-rr-settings">
          <span className="path1"></span>
          <span className="path2"></span>
        </span>,
        [
          getItem(
            "TBD",
            "TBD",
            "/settings",
            <span className="icon-fi-rr-folder"></span>
          ),
        ]
      ),
    ];
  }, []);

  const FirstMenu = React.useMemo(() => {
    return (
      <Menu
        className="ubuntu"
        defaultSelectedKeys={getDefaultKey(pathname)}
        defaultOpenKeys={["company_account", "manage"]}
        mode="inline"
        // theme="dark"
        onClick={(item) => {
          navigate(item.key);
        }}
        items={items}
        inlineCollapsed={!isOpen}
        // onOpenChange={(item) => {
        //   getUsers();
        // }}
      />
    );
  }, [isOpen, pathname]);

  return (
    <Row className="side-bar ubuntu" style={{ position: "fixed" }}>
      <Col span={24}>{FirstMenu}</Col>
    </Row>
  );
};
