import React, { useState } from "react";
import { Form, Select, Radio, Checkbox } from "antd";

export const InputCheckboxGroup = (props: any) => {
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

  return (
    <div className="input-container input-checkbox">
      <div className="input-item-wrapper" style={{ width: 220 }}>
        {label}
      </div>
      <Form.Item rules={rules} name={name} hasFeedback={hasFeedback}>
        <Checkbox.Group>
          {options.map((option: any) => {
            return (
              <Checkbox
                value={option.value}
                style={{ lineHeight: "32px" }}
                disabled={disabled}
              >
                {option.key}
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      </Form.Item>
    </div>
  );
};
