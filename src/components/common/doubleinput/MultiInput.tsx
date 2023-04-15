import React, { useState } from "react";
import { Form, Input, Col, Row } from "antd";
import { CommonInputV2 } from "./index";
import { InputType } from "../../../constants/inputs";
import { CARRIER_SELECT_DISABLED } from "./utils";

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
    showDocsList = false,
    isReadonlyCarrier = false,
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
            if (
              field?.type === InputType.DRIVER_DOCUMENTS_LIST &&
              !showDocsList
            ) {
              return null;
            }
            if (
              CARRIER_SELECT_DISABLED.includes(field?.type) &&
              isReadonlyCarrier
            ) {
              return (
                <CommonInputV2
                  {...field}
                  key={i}
                  form={form}
                  disabled={disabled}
                  isReadonlyCarrier={true}
                />
              );
            }
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
