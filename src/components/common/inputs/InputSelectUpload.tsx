import React, { useState } from "react";
import { Form, Select } from "antd";
import downloadIcon from "../../../img/download.svg";
import uploadIcon from "../../../img/upload.svg";

export const InputSelectUpload = (props: any) => {
  const {
    rules = [],
    name = "",
    icon = "",
    placeholder = "",
    label = "",
    disabled = false,
    hasFeedback = false,
    options = [],
    value,
    form,
    getValue,
  } = props;

  const { Option } = Select;

  React.useEffect(() => {
    console.log("value", value);
  }, [value]);

  return (
    <div className="input-container">
      <div className="input-item-wrapper" style={{ width: 220 }}>
        {label}
      </div>
      <Form.Item
        rules={rules}
        name={name}
        hasFeedback={hasFeedback}
        getValueProps={(value) => value}
      >
        <Select>
          {options.map((item: any, i: number) => {
            return (
              <Option key={i} value={item.value}>
                {item.key}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <div
        onClick={() => {
          console.log("getValue(name)", getValue(name));
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            className="orange"
            style={{ display: "flex", cursor: "pointer", marginLeft: 10 }}
          >
            <img src={downloadIcon} />
            <div
              className="Ubuntu"
              style={{
                fontFamily: "Ubuntu",
                fontSize: 12,
                marginLeft: 10,
                fontWeight: 400,
              }}
            >
              Download
            </div>
          </div>
          <div
            className="orange"
            style={{ display: "flex", cursor: "pointer", marginLeft: 10 }}
          >
            <img src={uploadIcon} />
            <div
              className="Ubuntu"
              style={{
                fontFamily: "Ubuntu",
                fontSize: 12,
                marginLeft: 10,
                fontWeight: 400,
              }}
            >
              Upload
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
