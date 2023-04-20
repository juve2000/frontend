import React, { useState } from "react";
import { Form, Checkbox, Row, Col } from "antd";
import { InputTitle } from "./InputTitle";
import {
  ALL_PERMISSION,
  CARRIER_PERMISSIONS,
  USER_PERMISSIONS,
  VEHICLE_PERMISSIONS,
  TRAILER_PERMISSIONS,
  DEVICE_PERMISSIONS,
  DRIVER_PERMISSIONS,
  DRIVER_GROUP_PERMISSIONS,
  ROLE_PERMISSIONS,
  MECHANIC_PERMISSIONS,
  COMPANY_PERMISSIONS,
  OFFICE_PERMISSIONS,
  CarrierPermission,
} from "../../modules/role/constant";
import { AllPermissionsType } from "../../modules/role/constant";

const PermissionRow = (props: any) => {
  const { value, checked, handleChange, handleRemove } = props;
  return (
    <Row
      style={{
        width: "100%",
        borderBottom: "1px solid rgba(249, 251, 255, 1)",
      }}
    >
      <Col
        span={12}
        style={{ display: "flex", alignItems: "center", paddingLeft: 12 }}
      >
        <Checkbox
          value={value}
          style={{ lineHeight: "32px" }}
          checked={checked}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        >
          <div>{value}</div>
        </Checkbox>
      </Col>
      <Col
        span={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {checked ? (
          <span className="icon-fi-rr-check orange" />
        ) : (
          <span className="icon-fi-rr-minus-small" />
        )}
      </Col>
    </Row>
  );
};

const PermissionTable = (props: any) => {
  const {
    permissionsItems,
    handleChange,
    handleChangeAllByType,
    permissions,
    checked,
    type,
  } = props;

  return (
    <Row
      style={{
        width: "100%",
        marginBottom: 20,
        boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.04)",
      }}
    >
      <Col span={24}>
        <Row
          style={{
            borderBottom: "1px solid rgba(249, 251, 255, 1)",
            background: "rgba(239, 246, 255, 0.6)",
          }}
        >
          <Col
            span={12}
            style={{ display: "flex", alignItems: "center", paddingLeft: 12 }}
          >
            <Checkbox
              //   value={value}
              style={{ lineHeight: "32px" }}
              checked={checked}
              onChange={(e) => {
                handleChangeAllByType(permissionsItems, e.target.checked);
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="icon-fi-rr-plus-small ubuntu" />
                <span className="ubuntu" style={{ fontSize: 12 }}>
                  {type}
                </span>
              </div>
            </Checkbox>
          </Col>
          <Col
            span={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="icon-fi-rr-check" />

            <span className="ubuntu" style={{ fontSize: 12, marginLeft: 10 }}>
              Permission
            </span>
          </Col>
        </Row>
      </Col>
      {permissionsItems.map((p: any) => {
        return (
          <PermissionRow
            value={p}
            checked={permissions.includes(p)}
            handleChange={handleChange}
          />
        );
      })}
    </Row>
  );
};

export const InputRole = (props: any) => {
  const { name, label, form } = props;
  const [permissions, setPermissions] = useState<any>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleChange = (value: any) => {
    if (!permissions.includes(value)) {
      setPermissions([...permissions, value]);
    } else {
      setPermissions(
        permissions.filter((permission: any) => permission !== value)
      );
    }
  };

  const handleChangeAll = (value: any) => {
    if (value) {
      setPermissions(ALL_PERMISSION);
    } else {
      setPermissions([]);
    }
  };

  const handleChangeAllByType = (permissionsType: any, value: any) => {
    console.log("-----", {
      permissionsType,
      value,
    });
    const tempPermissions = [...permissions].filter(
      (item: any) => !permissionsType.includes(item)
    );
    if (value) {
      setPermissions([...tempPermissions, ...permissionsType]);
    } else {
      setPermissions([...tempPermissions]);
    }
  };

  React.useEffect(() => {
    console.log("permissions", permissions);
  }, [permissions]);

  const arrayContainsArray = (allItems: any, typeItems: any) => {
    if (0 === typeItems.length) {
      return false;
    }
    return typeItems.every(function (value: any) {
      return allItems.indexOf(value) >= 0;
    });
  };

  React.useEffect(() => {
    form.setFieldValue(name, permissions);
  }, [permissions]);

  return (
    <div style={{ width: "100%" }}>
      <InputTitle label={label} />
      <Form.Item name={name} style={{ width: "100%" }}>
        <Row>
          <Col span={24}>
            <Checkbox
              //   value={value}
              style={{ lineHeight: "32px" }}
              checked={permissions.length === ALL_PERMISSION.length}
              onChange={(e) => {
                handleChangeAll(e.target.checked);
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="icon-fi-rr-plus-small ubuntu" />
                <span
                  className="ubuntu"
                  style={{ fontSize: 16, fontWeight: "bold" }}
                >
                  Select all
                </span>
              </div>
            </Checkbox>
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <PermissionTable
            permissions={permissions}
            permissionsItems={CARRIER_PERMISSIONS}
            handleChange={handleChange}
            handleChangeAllByType={handleChangeAllByType}
            checked={arrayContainsArray(permissions, CARRIER_PERMISSIONS)}
            type={"Carrier"}
          />
          <PermissionTable
            permissions={permissions}
            permissionsItems={USER_PERMISSIONS}
            handleChange={handleChange}
            handleChangeAllByType={handleChangeAllByType}
            checked={arrayContainsArray(permissions, USER_PERMISSIONS)}
            type={"User"}
          />
          <PermissionTable
            permissions={permissions}
            permissionsItems={VEHICLE_PERMISSIONS}
            handleChange={handleChange}
            handleChangeAllByType={handleChangeAllByType}
            checked={arrayContainsArray(permissions, VEHICLE_PERMISSIONS)}
            type={"Vehicle"}
          />
          <PermissionTable
            permissions={permissions}
            permissionsItems={TRAILER_PERMISSIONS}
            handleChange={handleChange}
            handleChangeAllByType={handleChangeAllByType}
            checked={arrayContainsArray(permissions, TRAILER_PERMISSIONS)}
            type={"Trailer"}
          />
          <PermissionTable
            permissions={permissions}
            permissionsItems={DRIVER_PERMISSIONS}
            handleChange={handleChange}
            handleChangeAllByType={handleChangeAllByType}
            checked={arrayContainsArray(permissions, DRIVER_PERMISSIONS)}
            type={"Driver"}
          />
          <PermissionTable
            permissions={permissions}
            permissionsItems={DRIVER_GROUP_PERMISSIONS}
            handleChange={handleChange}
            handleChangeAllByType={handleChangeAllByType}
            checked={arrayContainsArray(permissions, DRIVER_GROUP_PERMISSIONS)}
            type={"Driver Group"}
          />
          <PermissionTable
            permissions={permissions}
            permissionsItems={MECHANIC_PERMISSIONS}
            handleChange={handleChange}
            handleChangeAllByType={handleChangeAllByType}
            checked={arrayContainsArray(permissions, MECHANIC_PERMISSIONS)}
            type={"Mechanic"}
          />
          <PermissionTable
            permissions={permissions}
            permissionsItems={DEVICE_PERMISSIONS}
            handleChange={handleChange}
            handleChangeAllByType={handleChangeAllByType}
            checked={arrayContainsArray(permissions, DEVICE_PERMISSIONS)}
            type={"Device"}
          />
          <PermissionTable
            permissions={permissions}
            permissionsItems={ROLE_PERMISSIONS}
            handleChange={handleChange}
            handleChangeAllByType={handleChangeAllByType}
            checked={arrayContainsArray(permissions, ROLE_PERMISSIONS)}
            type={"Role"}
          />
        </Row>
      </Form.Item>
    </div>
  );
};
