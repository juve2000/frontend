import React, { useState } from "react";
import { Form, Input, Row, Col, Select } from "antd";
import { statesUsaOption, countriesOption, statesCanadaOption } from "./utils";
import { carrierData } from "../../modules/carrier/constant";
import {
  validate,
  VALIDATION_TYPE,
  VALIDATION_RULES,
} from "../../../utils/validation";
import { TextInputV2, InputSelectV2 } from "../doubleinput/index";

const { ALPHABETICAL, NUMERIC } = VALIDATION_TYPE;

export const InputAdress = (props: any) => {
  const {
    rules = [],
    name = "",
    icon,
    placeholder = "",
    label = "",
    hasFeedback = false,
    form,
    disabled = false,
  } = props;

  const getName = (name: any, type: any) => {
    return typeof name === "string" ? [name, type] : [...name, type];
  };

  const isRequired = rules.find((rule: any) => rule.required);
  return (
    <Row className="input-container input-address">
      <Col
        span={6}
        className="input-item-wrapper"
        style={{ alignItems: "flex-start" }}
      >
        <div>
          {label}
          {isRequired && " *"}
        </div>
      </Col>

      <Col span={18}>
        <Row style={{ width: "100%" }}>
          <InputSelectV2
            title="Country*"
            icon={icon}
            span={12}
            width="95%"
            disabled={disabled}
            placeholder={`Select Country`}
            rules={[
              ...rules,
              { required: true, message: "Country is required" },
            ]}
            name={getName(name, "country")}
            hasFeedback={true}
            options={carrierData.countries}
            styles={{ margin: "8px 0px" }}
            onChange={() => {
              form.setFieldValue(getName(name, "state"), "");
            }}
          />
          <InputSelectV2
            title="State*"
            icon={icon}
            span={12}
            width="100%"
            disabled={disabled}
            placeholder={`Select State`}
            rules={[...rules, { required: true, message: "State is required" }]}
            name={getName(name, "state")}
            hasFeedback={true}
            options={
              // form.getFieldValue(getName(name, "country")) === "USA"
              //   ? carrierData.states
              //   : statesCanadaOption
              carrierData.states
            }
            styles={{ margin: "8px 0px" }}
          />

          <TextInputV2
            title="City*"
            icon={icon}
            span={12}
            width="95%"
            placeholder={`Enter City`}
            rules={[
              ...rules,
              { required: true, message: "City is required" },
              validate("", ALPHABETICAL),
            ]}
            name={getName(name, "area")}
            hasFeedback={true}
            styles={{ margin: "8px 0px" }}
            disabled={disabled}
          />
          <TextInputV2
            title="Index*"
            icon={icon}
            span={12}
            width="100%"
            disabled={disabled}
            placeholder={`Enter Index`}
            rules={[
              ...rules,
              { required: true, message: "Index is required" },
              validate("", NUMERIC),
            ]}
            name={getName(name, "address_index")}
            hasFeedback={true}
            styles={{ margin: "8px 0px" }}
          />
          <TextInputV2
            title="Street*"
            icon={icon}
            span={24}
            width="100%"
            placeholder={`${placeholder} Street Number`}
            rules={[
              ...rules,
              { required: true, message: "Street number is required" },
            ]}
            name={getName(name, "number_street")}
            hasFeedback={true}
            styles={{ margin: "8px 0px" }}
            disabled={disabled}
          />
        </Row>
      </Col>
    </Row>
  );
};
