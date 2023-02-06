import React, { useState } from "react";
import { Form, Input } from "antd";

export const TextInput = (props: any) => {
  const {
    rules = [],
    name = "",
    icon,
    placeholder = "",
    label = "",
    disabled,
  } = props;
  const isRequired = rules.find((rule: any) => rule.required);
  return (
    <div
      className="input-container"
      style={{ position: "relative", height: "100%" }}
    >
      <div
        className="input-item-wrapper"
        style={{ width: 220, height: "40px", position: "relative" }}
      >
        <div style={{ position: "absolute" }}>
          {label}
          {isRequired && " *"}
        </div>
      </div>
      <Form.Item rules={rules} name={name} style={{ width: 360 }}>
        <Input
          prefix={
            !!icon ? (
              <span className={`icon-icon-${icon} orange`}></span>
            ) : (
              <span></span>
            )
          }
          placeholder={placeholder}
          style={{ width: 360 }}
          disabled={disabled}
        />
      </Form.Item>
    </div>
  );
};
