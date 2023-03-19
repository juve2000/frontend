import React, { useState } from "react";
import { Form, Select, Button, Upload, Col, Input, Row } from "antd";
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
      <Row>
        <Col span={6}>
          {form.getFieldValue(name) && (
            <>
              <img
                style={{ width: "80%" }}
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAhFBMVEWBvAYFpvD/ugjzUyXz8/Pz9fb29Pbz+PjzfmadyGTzRADzwrnN4LXy9fi12fL337UAn/D/tQBkuPH8x2TzTxzzdV3zzMXW5MOZxlzzPgB4uAD59vPC3vKv1vL43bD248P8xFzznpC105DzShHzMQDz4+Dl7Nze6vP17NsAmvCQx/L60pDH4PAeAAAA80lEQVRoge3byQ6CMABFURyKs4IjjuA8/f//CWJCt68mYsK9++ak277Ua5aUB/xb2DiUn/cdKmCzb8vN5intL6KOWnTwC7h9nKote60U7q88tVVkw9OGWtcV9jrAwMDAwMDAwMDAwMDAwMDAwMDAwMDAfwbPll210wfWs17om/Oe3jmbQy59vYUFm5ZePsN8t8KUUcnw2qH3QTNwyII3Q7ntNXNvu5FcbAp4HMjdt+mdB7tQL7HhmlwwzOBRWJebAAMDAwMDAwMDAwMDAwMDAwMDAwMDA1cZtl/oH2O9TQbHyUQteVqwcy7/lfKlrKqDV5XgF03py/8/vXCmAAAAAElFTkSuQmCC"
                }
              />
              {/* <img
                src={
                  "https://dev.hgrs.us/api/support/v1" +
                  form.getFieldValue(name)
                }
              />
              <img
                src={
                  "https://dev.hgrs.us/api/support/carrier/v1" +
                  form.getFieldValue(name)
                }
              /> */}
            </>
          )}
        </Col>
        <Col span={18}>
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
              maxCount={1}
            >
              <Button>Click to upload</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Col>
  );
};
