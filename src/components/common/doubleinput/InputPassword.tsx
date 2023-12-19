import React, { useState } from "react";
import { Form, Input, Col } from "antd";
import { CopyToClipboard } from "./CopyToClipboard";
import { validate } from "../../../utils/validation";
import generator from "generate-password-browser";

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
    hasGenerate = false,
    handleOnGenerate,
  } = props;
  const [copyValue, setCopyValue] = useState("");

  React.useEffect(() => {
    setCopyValue(form.getFieldValue(name));
  }, []);

  const generatePassword = () => {
    const pwd = generator.generate({
      length: 8,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true,
    });
    form.setFieldValue(name, pwd);
    if (handleOnGenerate) {
      handleOnGenerate(pwd);
    }
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
          <div className="input-item-title input-title ubuntu" style={style}>
            {title}
          </div>
        )
      ) : null}
      <CopyToClipboard copyText={copyValue} top={43} />
      {hasGenerate && (
        <div
          className="orange ubuntu"
          style={{
            position: "absolute",
            right: width === "95%" ? "5%" : 0,
            cursor: "pointer",
          }}
          onClick={generatePassword}
        >
          Generate
        </div>
      )}

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
