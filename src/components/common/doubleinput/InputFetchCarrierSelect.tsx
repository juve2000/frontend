import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { Form, Select, Col } from "antd";
import { getCarriersListReq } from "../../../actions";

export const InputFetchCarrierSelectV2 = (props: any) => {
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
  const dispatch = useDispatch();
  const { carrierList, carrier } = useSelector((state: any) => state.carrier);
  const [options, setOptions] = useState([]);
  // const getName = useMemo(() => {
  //   return pathName ? [...pathName, name] : name;
  // }, [pathName, name]);

  React.useEffect(() => {
    setOptions(
      carrierList.map((carrier: any) => {
        return {
          key: carrier.name,
          value: carrier.id,
        };
      })
    );
  }, [carrierList]);

  const getName = (name: any, pathName: any) => {
    return pathName ? [...pathName, name] : name;
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
          style={{ width, ...styles }}
          placeholder={placeholder}
          onChange={onChange}
          // showSearch
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
