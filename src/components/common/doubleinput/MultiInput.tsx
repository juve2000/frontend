import React, { useState } from "react";
import { Form, Input, Col, Row } from "antd";
import { CommonInputV2 } from "./index";
import { InputType } from "../../../constants/inputs";
import { CARRIER_SELECT_DISABLED, EDIT_DISABLAED_FIELDS } from "./utils";

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
    isIdentificatorDisabled = false,
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
            if (field?.type === InputType.INPUT_ROLE && props?.isCreate) {
              return (
                <CommonInputV2
                  {...field}
                  key={i}
                  form={form}
                  disabled={disabled}
                  isCreate={props?.isCreate}
                />
              );
            }
            if (field?.type === InputType.TABLE_ROLE && props?.isCreate) {
              return (
                <CommonInputV2
                  {...field}
                  key={i}
                  form={form}
                  disabled={disabled}
                  isCreate={props?.isCreate}
                />
              );
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
            if (
              EDIT_DISABLAED_FIELDS.includes(field?.name) &&
              isIdentificatorDisabled
            ) {
              return (
                <CommonInputV2
                  {...field}
                  key={i}
                  form={form}
                  disabled={true}
                  isReadonlyCarrier={true}
                />
              );
            }
            return (
              <CommonInputV2
                {...field}
                key={i}
                form={form}
                disabled={disabled || field?.isReadonly}
              />
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};
