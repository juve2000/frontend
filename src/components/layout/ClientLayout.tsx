import React from "react";
import { useSelector } from "react-redux";
import {
  Outlet,
  Route,
  Routes,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
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
  const auth = useSelector((state: any) => state.auth);
  const [defaultKey, setDefaultKey] = React.useState("");
  const params = useParams();

  const {
    carrierid,
    driverid,
    driverGroupId,
    roleId,
    mechanincId,
    deviceId,
    trailerId,
    vehicleId,
    userId,
  } = params;

  const excludedParamsScreen = [
    carrierid,
    driverid,
    driverGroupId,
    roleId,
    mechanincId,
    deviceId,
    trailerId,
    vehicleId,
    userId,
  ];

  const location = useLocation();

  React.useEffect(() => {
    fullScreenRoutes.forEach((route: any) => {
      if (location.pathname.indexOf(route) > -1) {
        setDefaultKey(route);
      }
    });
  }, [location]);

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

  const getLayout = React.useCallback(() => {
    let fullScreenRoute = false;
    fullScreenRoutes.forEach((i) => {
      if (location.pathname.indexOf(i) >= 0) {
        fullScreenRoute = true;
      }
    });
    let obj = {
      firstColumn: 3,
      secondColumn: 17,
      lastColumn: 4,
    };

    if (location.pathname.includes("create")) {
      let fullScreenRoute = false;
      return {
        firstColumn: 3,
        secondColumn: 16,
        lastColumn: 4,
      };
    }

    if (excludedParamsScreen.some((item: any) => !!item)) {
      let fullScreenRoute = false;
      return {
        firstColumn: 3,
        secondColumn: 16,
        lastColumn: 4,
      };
    }
    if (isOpenSidebar) {
      obj = {
        firstColumn: 3,
        secondColumn: 19,
        lastColumn: 4,
      };
    }
    if (fullScreenRoute && isOpenSidebar) {
      obj = {
        firstColumn: 3,
        secondColumn: 21,
        lastColumn: 0,
      };
    }
    if (fullScreenRoute && !isOpenSidebar) {
      obj = {
        firstColumn: 1,
        secondColumn: 23,
        lastColumn: 0,
      };
    }
    return obj;
  }, [isOpenSidebar, location, params]);

  const { firstColumn, secondColumn, lastColumn } = getLayout();

  return (
    <>
      <Row className="header-container">
        <Col span={24}>
          <Header toggleMenu={() => setIsOpenSidebar(!isOpenSidebar)} />
        </Col>
      </Row>
      <Row style={{ paddingLeft: 27, paddingRight: 25, paddingTop: 60 }}>
        <Col span={firstColumn}>
          <SideBar isOpen={isOpenSidebar} />
        </Col>
        <Col span={secondColumn}>
          <div
            style={{
              marginLeft: 50,
              backgroundColor: "#FFFFFF",
              paddingLeft: 25,
              paddingTop: 25,
            }}
            className="right-side-client"
          >
            <Outlet />
          </div>
        </Col>
        {lastColumn > 0 ? (
          <Col span={lastColumn}>
            {/* <div>widget</div> */}
            {/* {!auth.user.company.name && <Navigate to="/client/company" />} */}
          </Col>
        ) : null}
      </Row>
    </>
  );
};
