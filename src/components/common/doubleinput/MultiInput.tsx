import React, { useState } from "react";
import { Form, Input, Col, Row } from "antd";
import { CommonInputV2 } from "./index";

export const MultiInputV2 = (props: any) => {
  const {
    rules = [],
    name = "",
    icon,
    placeholder = "",
    label = "",
    disabled = false,
    width = "100%",
    title = "",
    isSecondField = false,
    span = 24,
    fields = [],
    isRequired = false,
    form,
  } = props;

  return (
    <Row>
      <Col
        span={6}
        className="input-item-wrapper"
        style={{ alignItems: "flex-start" }}
      >
        {label && (
          <div className="input-item-wrapper">
            <div>
              {label}
              {isRequired && " *"}
            </div>
          </div>
        )}
      </Col>
      <Col span={18}>
        <Row>
          {fields.map((field: any, i: number) => {
            return (
              <CommonInputV2
                {...field}
                key={i}
                form={form}
                disabled={disabled}
              />
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};
