import React, { useState } from "react";
import { Form, Select, Radio } from "antd";

export const InputRadioV2 = (props: any) => {
  const {
    rules = [],
    name = "",
    icon = "",
    placeholder = "",
    label = "",
    disabled = false,
    hasFeedback = true,
    options = [],
    form,
  } = props;

  const { Option } = Select;

  return (
    <div
      className="input-container-v2 input-radio"
      // style={{ alignItems: "revert-layer" }}
    >
      <div className="input-item-wrapper" style={{ width: 220 }}>
        {label}
      </div>
      <Form.Item rules={rules} name={name} hasFeedback={hasFeedback}>
        <Radio.Group>
          {options.map((option: any) => {
            return (
              <Radio
                value={option.value}
                disabled={disabled}
                // style={{
                //   display: "flex",
                //   alignItems: "center",
                //   flexDirection: "row",
                // }}
              >
                <div
                  className="driver-marker"
                  style={{ backgroundColor: option.value }}
                />
              </Radio>
            );
          })}
        </Radio.Group>
      </Form.Item>
    </div>
  );
};
