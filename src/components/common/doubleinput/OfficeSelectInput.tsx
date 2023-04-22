import React, { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { Form, Select, Col } from "antd";
import { getCarriersListReq } from "../../../actions";
import { usePermissions } from "../../../hooks/usePermissions";
import { getOfficeListReq } from "../../../actions";

export const OfficeSelectInput = (props: any) => {
  const {
    rules = [],
    name = "",
    icon = "",
    placeholder = "",
    label = "",
    disabled = false,
    hasFeedback = true,
    // options = [],
    title,
    span,
    width,
    styles = {},
    pathName = "",
    form,
    onChange,
    items,
    isReadonlyCarrier = false,
  } = props;

  const { Option } = Select;
  const isRequired = rules.find((rule: any) => rule.required);
  const { checkPermission, role } = usePermissions();
  const dispatch = useDispatch();
  const { officeList, loading } = useSelector((state: any) => state.office);
  const [options, setOptions] = useState([]);

  React.useEffect(() => {
    setOptions(
      officeList.map((role: any) => {
        return {
          key: role.name,
          value: role.id,
        };
      })
    );
  }, [officeList]);

  const getName = (name: any, pathName: any) => {
    return pathName ? [...pathName, name] : name;
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = () => {
    dispatch(getOfficeListReq({}));
  };

  return (
    <Col
      span={span}
      className="input-container-v2"
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {title ? (
        title === "invisible" ? (
          <div className="input-item-title" style={{ opacity: 0 }}>
            {title}
          </div>
        ) : (
          <div className="input-item-title">{title}</div>
        )
      ) : null}
      <Form.Item
        rules={rules}
        name={getName(name, pathName)}
        style={{ width: "100%" }}
      >
        <Select
          disabled={disabled || isReadonlyCarrier}
          mode="multiple"
          style={{ width, ...styles }}
          placeholder={placeholder}
          onChange={onChange}
          // showSearch
          onFocus={fetchRoles}
          loading={loading}
        >
          {options.map((item: any, i: number) => {
            return (
              <Option key={i} value={item.value}>
                {item.key}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </Col>
  );
};
