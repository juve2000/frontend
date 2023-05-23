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
        <span className="icon-fi-rr-apps"></span>
      ),
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
        "Manage",
        "manage",
        getPath("manage"),
        <span className="icon-icon-atention"></span>,
        [
          getItem(
            "Carriers",
            "carriers",
            "/carriers",
            <span className="icon-fi-rr-briefcase"></span>
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
          getItem(
            "Support Personal",
            "mechanic",
            "/mechanic",
            <span className="icon-fi-rr-label"></span>
          ),
          getItem(
            "Vehicles",
            "vehicle",
            "/vehicle",
            <span className="icon-fi-rr-truck-side"></span>
          ),
          getItem(
            "Trailers",
            "trailer",
            "/trailer",
            <span className="icon-fi-rr-folder"></span>
          ),
          getItem(
            "Devices",
            "device",
            "/device",
            <span className="icon-fi-rr-smartphone"></span>
          ),
        ]
      ),
      getItem(
        "Company Account",
        "company_account",
        getPath("company_account"),
        <span className="icon-fi-rr-comment-user"></span>,
        [
          getItem(
            "Company",
            "company",
            "/company",
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
    <Row className="side-bar ubuntu">
      <Col span={24}>{FirstMenu}</Col>
    </Row>
  );
};
