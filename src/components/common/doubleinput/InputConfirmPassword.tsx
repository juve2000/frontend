import React, { useState } from "react";
import { Form, Input, Col } from "antd";
import { CopyToClipboard } from "./CopyToClipboard";

export const TextInputConfirmPassword = (props: any) => {
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
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              console.log("value", value);
              console.log("rule", rule);

              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
        name={name}
        style={{ width: "100%", position: "relative" }}
      >
        <Input.Password
          //   prefix={<span className="icon-fi-rr-lock"></span>}
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
