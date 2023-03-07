import React, { useState } from "react";
import { Form, Input, Col } from "antd";

export const TextInputPassword = (props: any) => {
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
  } = props;
  const isRequired = rules.find((rule: any) => rule.required);

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
      <Form.Item rules={rules} name={name} style={{ width: "100%" }}>
        <Input.Password
          prefix={
            !!icon ? (
              <span className={`icon-icon-${icon} orange`}></span>
            ) : (
              <span></span>
            )
          }
          placeholder={placeholder}
          style={{ width }}
          disabled={disabled}
        />
      </Form.Item>
    </Col>
  );
};
