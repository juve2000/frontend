import React, { useState } from "react";
import { Form, Input, Col } from "antd";
import { CopyToClipboard } from "./CopyToClipboard";
import { validate } from "../../../utils/validation";

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
    form,
    style,
  } = props;
  const [copyValue, setCopyValue] = useState("");

  React.useEffect(() => {
    setCopyValue(form.getFieldValue(name));
  }, []);

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
          <div className="input-item-title input-title ubuntu" style={style}>
            {title}
          </div>
        )
      ) : null}
      <CopyToClipboard copyText={copyValue} top={43} />

      <Form.Item
        // rules={[
        //   { required: true, message: "Please input your password!" },
        //   { min: 1, message: "Minimum 8 characters" },
        //   validate("password", "PASSWORD"),
        // ]}
        name={name}
        style={{ width: "100%", position: "relative" }}
      >
        <Input.Password
          placeholder={placeholder || "Password"}
          style={{ width }}
          disabled={disabled}
          onChange={(e) => {
            setCopyValue(e.target.value);
          }}
        />
      </Form.Item>
    </Col>
  );
};
