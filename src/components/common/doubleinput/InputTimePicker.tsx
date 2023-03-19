import React, { useState, useMemo } from "react";
import { Form, Input, Col, TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const InputTimePickerV2 = (props: any) => {
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
    styles = {},
    pathName = "",
    form,
  } = props;
  const isRequired = rules.find((rule: any) => rule.required);

  const getName = useMemo(() => {
    return pathName ? [...pathName, name] : name;
  }, [pathName, name]);
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
      <Form.Item rules={rules} name={getName} style={{ width: "100%" }}>
        <TimePicker
          placeholder={placeholder}
          style={{ width, ...styles }}
          disabled={disabled}
          defaultValue={dayjs("00-00-00", "HH-mm-ss")}
          defaultOpenValue={dayjs("00-00-00", "HH-mm-ss")}
          onChange={(e, timeString) => {
            form.setFieldValue(timeString.split(":").join("-"));
          }}
        />
      </Form.Item>
    </Col>
  );
};
