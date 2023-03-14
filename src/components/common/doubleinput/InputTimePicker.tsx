import React, { useState, useMemo } from "react";
import { Form, Input, Col, TimePicker } from "antd";

export const InputTimePickerV2 = (props: any) => {
  const {
    rules = [],
    name = "",
    icon,
    placeholder = "",
    label = "",
    disabled,
    width = "100%",
    title = "",
    isSecondField = false,
    span = 24,
    styles = {},
    pathName = "",
  } = props;
  const isRequired = rules.find((rule: any) => rule.required);

  const getName = useMemo(() => {
    return pathName ? [...pathName, name] : name;
  }, [pathName, name]);
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
          <div
            className="input-item-title input-title ubuntu"
            style={{ opacity: 0 }}
          >
            {title}
          </div>
        ) : (
          <div className="input-item-title input-title ubuntu">{title}</div>
        )
      ) : null}
      <Form.Item rules={rules} name={getName} style={{ width: "100%" }}>
        <TimePicker
          placeholder={placeholder}
          style={{ width, ...styles }}
          disabled={disabled}
          onChange={(e) => {
            console.log("e", e);
          }}
        />
      </Form.Item>
    </Col>
  );
};
