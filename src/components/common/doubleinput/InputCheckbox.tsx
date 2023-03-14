import React, { useState } from "react";
import { Form, Select, Radio, Checkbox } from "antd";

export const InputCheckboxGroupV2 = (props: any) => {
  const {
    rules = [],
    name = "",
    icon = "",
    placeholder = "",
    label = "",
    disabled = false,
    hasFeedback = true,
    options = [],
    direction = "row",
    form,
    isGroup = false,
  } = props;

  const { Option } = Select;
  const getName = (name: any, type: any) => {
    return isGroup ? [name, type] : name;
  };
  return (
    <div
      className="input-container-v2 input-checkbox"
      style={{ display: "flex", flexDirection: direction }}
    >
      {options.map((option: any, i: any) => {
        return (
          <Form.Item
            rules={rules}
            name={getName(name, option.value)}
            hasFeedback={hasFeedback}
            key={i}
            valuePropName={"checked"}
          >
            <Checkbox
              onChange={(e) => {
                form.setFieldValue(
                  getName(name, option.value),
                  e.target.checked
                );
              }}
              style={{
                lineHeight: "32px",
                margin: direction === "row" ? "0px 16px 0px 0px" : "0px 0px",
              }}
              disabled={disabled}
            >
              {option.key}
            </Checkbox>
          </Form.Item>
        );
      })}
    </div>
  );
};
