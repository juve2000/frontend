import React, { useState } from "react";
import { Form, Select, Radio } from "antd";

export const InputRadio = (props: any) => {
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
    <div className="input-container input-radio">
      <div className="input-item-wrapper" style={{ width: 220 }}>
        {label}
      </div>
      <Form.Item rules={rules} name={name} hasFeedback={hasFeedback}>
        <Radio.Group>
          {options.map((option: any) => {
            return (
              <Radio value={option.value} disabled={disabled}>
                {option.key}
              </Radio>
            );
          })}
        </Radio.Group>
      </Form.Item>
    </div>
  );
};
