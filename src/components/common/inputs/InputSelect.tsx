import React, { useState } from "react";
import { Form, Select } from "antd";

export const InputSelect = (props: any) => {
  const {
    rules = [],
    name = "",
    icon = "",
    placeholder = "",
    label = "",
    disabled = false,
    hasFeedback = true,
    options = [],
  } = props;

  const { Option } = Select;
  const isRequired = rules.find((rule: any) => rule.required);

  return (
    <div className="input-container">
      <div
        className="input-item-wrapper"
        style={{ width: 220, position: "relative", height: 40 }}
      >
        <div style={{ position: "absolute" }}>
          {" "}
          {label}
          {isRequired && " *"}
        </div>
      </div>
      <Form.Item
        rules={rules}
        name={name}
        hasFeedback={hasFeedback}
        style={{ width: 360 }}
      >
        <Select disabled={disabled}>
          {options.map((item: any, i: number) => {
            return (
              <Option key={i} value={item.value}>
                {item.key}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </div>
  );
};
