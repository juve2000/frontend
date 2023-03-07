import React, { useState } from "react";
import { Form, Input, Row, Col, Select } from "antd";
import { states } from "./utils";
import {
  validate,
  VALIDATION_TYPE,
  VALIDATION_RULES,
} from "../../../utils/validation";
import { CarrierField } from "../../modules/carrier/constant";

const { ALPHABETICAL, NUMERIC } = VALIDATION_TYPE;

export const InputAdressV2 = (props: any) => {
  const {
    rules = [],
    name = "",
    icon,
    placeholder = "",
    label = "",
    hasFeedback = false,
  } = props;
  const isRequired = rules.find((rule: any) => rule.required);
  const getName = (name: any, type: any) => {
    const pathName = typeof name === "string" ? [name, type] : [...name, type];
    return pathName;
  };
  return (
    <div
      className="input-container-v2 input-address"
      style={{ position: "relative", height: 215 }}
    >
      <div
        className="input-item-wrapper"
        style={{ minWidth: 220, position: "relative", height: "100%" }}
      >
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          {label}
          {isRequired && " *"}
        </div>
      </div>
      <div className="address-label adress-label-address">Street Number</div>

      <Form.Item
        rules={[
          ...rules,
          { required: true, message: "Street number is required" },
        ]}
        name={getName(name, CarrierField.ADDRESS.NUMBER_STREET)}
        style={{ position: "absolute", top: 25, left: 220 }}
        hasFeedback={true}
        className="address-item-address"
      >
        <Input
          prefix={
            !!icon ? (
              <span className={`icon-icon-${icon} orange`}></span>
            ) : (
              <span></span>
            )
          }
          placeholder={`${placeholder} Street Number`}
          style={{ width: 360 }}
        />
      </Form.Item>
      <div className="address-label adress-label-province">Province</div>
      <Form.Item
        rules={[
          ...rules,
          { required: true, message: "Province is required" },
          validate("", ALPHABETICAL),
        ]}
        name={getName(name, CarrierField.ADDRESS.AREA)}
        style={{ position: "absolute", top: 95, left: 220 }}
        className="address-item-province"
      >
        <Input
          prefix={
            !!icon ? (
              <span className={`icon-icon-${icon} orange`}></span>
            ) : (
              <span></span>
            )
          }
          placeholder={`${placeholder} province`}
          style={{ width: 175 }}
        />
      </Form.Item>
      <div className="address-label adress-label-state">State</div>

      <Form.Item
        rules={[...rules, { required: true, message: "State is required" }]}
        name={getName(name, CarrierField.ADDRESS.STATE)}
        hasFeedback={hasFeedback}
        style={{ position: "absolute", top: 95, left: 405 }}
        className="adress-state address-item-state"
        label="State"
      >
        <Select style={{ width: 175 }} placeholder={`${placeholder} state`}>
          {states.map((item: any, i: number) => {
            return (
              <Select.Option key={i} value={item.value}>
                {item.key}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <div className="address-label adress-label-country">Country</div>

      <Form.Item
        name={getName(name, CarrierField.ADDRESS.COUNTRY)}
        style={{ position: "absolute", top: 165, left: 220 }}
        className="address-item-country"
        rules={[...rules, { required: true, message: "Country is required" }]}
      >
        <Input
          prefix={
            !!icon ? (
              <span className={`icon-icon-${icon} orange`}></span>
            ) : (
              <span></span>
            )
          }
          placeholder={`${placeholder} country`}
          style={{ width: 175 }}
        />
      </Form.Item>
      <div className="address-label adress-label-index">Index</div>

      <Form.Item
        rules={[
          ...rules,
          { required: true, message: "Address index is required" },
          { min: 2, message: "Minimum 2" },
          { pattern: /^[0-9]*$/, message: "only numeric" },

          //   validate("", NUMERIC),
        ]}
        name={getName(name, CarrierField.ADDRESS.ADDRESS_INDEX)}
        hasFeedback={hasFeedback}
        style={{ position: "absolute", top: 165, left: 405 }}
        className="adress-state address-item-state"
        label="State"
      >
        <Input
          prefix={
            !!icon ? (
              <span className={`icon-icon-${icon} orange`}></span>
            ) : (
              <span></span>
            )
          }
          placeholder={`${placeholder} index`}
          style={{ width: 175 }}
        />
      </Form.Item>
    </div>
  );
};
