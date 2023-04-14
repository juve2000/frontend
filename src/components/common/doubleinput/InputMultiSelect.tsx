import React, { useState, useMemo } from "react";
import { Form, Select, Col } from "antd";

export const InputSelectMultiV2 = (props: any) => {
  const {
    rules = [],
    name = "",
    icon = "",
    placeholder = "",
    label = "",
    disabled = false,
    hasFeedback = true,
    options = [],
    title,
    span,
    width,
    styles = {},
    pathName = "",
    form,
    onChange,
  } = props;

  const { Option } = Select;
  const isRequired = rules.find((rule: any) => rule.required);

  // const getName = useMemo(() => {
  //   return pathName ? [...pathName, name] : name;
  // }, [pathName, name]);

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
          mode="multiple"
          disabled={disabled}
          style={{ width, ...styles }}
          placeholder={placeholder}
          // onChange={onChange}
          value={[2, 3, 1]}
        >
          {options.map((item: any, i: number) => {
            return (
              <Option key={i} value={item.key}>
                {item.value}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </Col>
  );
};
