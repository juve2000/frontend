import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Input, Col, Row } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";

import { CommonInputV2 } from "./index";
import { MoveToEdit } from "../MoveToEdit";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../../modules/role/constant";
import { ROUTES } from "../../../routes/constants";

export const InputPageTitle = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  console.log("location", location);
  const { checkPermission } = usePermissions();
  const editCarrier =
    checkPermission(AllPermissionsType.CARRIER_EDIT) &&
    pathname.includes(ROUTES.CARRIERS);
  const editDriver =
    checkPermission(AllPermissionsType.DRIVER_EDIT) &&
    pathname.includes(ROUTES.DRIVERS);
  const editUser =
    checkPermission(AllPermissionsType.USER_EDIT) &&
    pathname.includes(ROUTES.USER);
  const editRole =
    checkPermission(AllPermissionsType.ROLE_EDIT) &&
    pathname.includes(ROUTES.ROLE);
  const editVehicle =
    checkPermission(AllPermissionsType.VEHICLE_EDIT) &&
    pathname.includes(ROUTES.VEHICLE);
  const editTrailer =
    checkPermission(AllPermissionsType.TRAILER_EDIT) &&
    pathname.includes(ROUTES.TRAILER);
  const editDevice =
    checkPermission(AllPermissionsType.DEVICE_EDIT) &&
    pathname.includes(ROUTES.DEVICE);
  const editDriverGroup =
    checkPermission(AllPermissionsType.DRIVER_GROUP_EDIT) &&
    pathname.includes(ROUTES.DRIVER_GROUP);
  const editOffice =
    checkPermission(AllPermissionsType.OFFICE_EDIT) &&
    pathname.includes(ROUTES.OFFICE);
  const editCompany =
    checkPermission(AllPermissionsType.COMPANY_EDIT) &&
    pathname.includes(ROUTES.COMPANY);

  const showEdit =
    editCarrier ||
    editDriver ||
    editUser ||
    editRole ||
    editVehicle ||
    editTrailer ||
    editDevice ||
    editDriverGroup ||
    editOffice ||
    editCompany;

  return (
    <div
      className="ubuntu"
      style={{
        display: "flex",
        alignItems: "baseline",
        padding: "12px 0px",
        // marginLeft: "-30px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline" }}>
        {props.fields.map((field: any, i: any) => {
          if (i === 0) {
            return (
              <div
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "baseline",
                }}
                onClick={() => {
                  navigate(props.route);
                }}
              >
                <span style={{ marginRight: 10 }}>
                  <CaretLeftOutlined style={{ fontSize: 20 }} />
                </span>
                {field}
                <div
                  style={{
                    fontSize: 14,
                    margin: "0px 8px",
                    fontWeight: "normal",
                    marginLeft: 16,
                    // marginRight: 16,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgb(20, 16, 41)",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      position: "absolute",
                      left: -6,
                      top: 8,
                    }}
                  />
                  <span style={{ fontWeight: "bold" }}></span>{" "}
                  <span
                    className="orange"
                    style={{ marginLeft: 8, marginRight: 8 }}
                  >
                    All {field}
                  </span>
                </div>
              </div>
            );
          }
          return (
            <div
              style={{
                fontSize: 14,
                margin: "0px 8px",
                position: "relative",
                // marginLeft: 16,
              }}
            >
              <div
                style={{
                  backgroundColor: "rgb(20, 16, 41)",
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  position: "absolute",
                  left: -3,
                  top: 9,
                }}
              />
              <span style={{ fontWeight: "bold" }}></span>{" "}
              <span
                className="orange"
                style={{ marginLeft: 8, marginRight: 8 }}
              >
                {field}
              </span>
            </div>
          );
        })}
      </div>
      {location?.search && location?.search === "?state=VIEW" && showEdit && (
        <MoveToEdit route={props.route} />
      )}
    </div>
  );
};
