import React, { useState } from "react";
import { Form, Select, Button, Upload, Col, Input } from "antd";
import downloadIcon from "../../../img/download.svg";
import uploadIcon from "../../../img/upload.svg";

export const InputImageUploadV2 = (props: any) => {
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
    form,
  } = props;
  const isRequired = rules.find((rule: any) => rule.required);

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.file.originFileObj;
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
      {/* <img src={"https://dev.hgrs.us" + form.getFieldValue(name)} /> */}
      <Form.Item
        rules={rules}
        name={name}
        style={{ width: "100%" }}
        // valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          name="logo"
          listType="picture"
          onChange={(e) => {
            console.log("e", e);
          }}
        >
          <Button>Click to upload</Button>
        </Upload>
      </Form.Item>
    </Col>
  );
};
