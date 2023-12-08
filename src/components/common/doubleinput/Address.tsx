import React, { useState } from "react";
import { Form, Input, Row, Col, Select } from "antd";
import { carrierData } from "../../modules/carrier/constant";
import {
  validate,
  VALIDATION_TYPE,
  VALIDATION_RULES,
} from "../../../utils/validation";
import { TextInputV2, InputSelectV2 } from "../doubleinput/index";

const { ALPHABETICAL, NUMERIC } = VALIDATION_TYPE;

export const Address = (props: any) => {
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
    <>
      <TextInputV2
        title="Street Number"
        icon={icon}
        span={24}
        width="100%"
        placeholder={`${placeholder} Street Number`}
        rules={[...rules]}
        name={getName(name, "number_street")}
        hasFeedback={true}
        disabled={disabled}
      />
      <InputSelectV2
        title="Country"
        icon={icon}
        span={12}
        width="95%"
        disabled={disabled}
        placeholder={`${placeholder} country`}
        rules={[...rules]}
        name={getName(name, "country")}
        hasFeedback={true}
        options={carrierData.countries}
        onChange={() => {
          form.setFieldValue(getName(name, "state"), "");
        }}
      />
      <InputSelectV2
        title="State"
        icon={icon}
        span={12}
        width="100%"
        disabled={disabled}
        placeholder={`${placeholder} state`}
        rules={[...rules]}
        name={getName(name, "state")}
        hasFeedback={true}
        options={
          // form.getFieldValue(getName(name, "country")) === "USA"
          //   ? carrierData.states
          //   : statesCanadaOption
          carrierData.states
        }
      />

      <TextInputV2
        title="City"
        icon={icon}
        span={12}
        width="95%"
        placeholder={`${placeholder} City`}
        rules={[
          ...rules,
          //   { required: true, message: "City is required" },
          validate("", ALPHABETICAL),
        ]}
        name={getName(name, "area")}
        hasFeedback={true}
        disabled={disabled}
      />
      <TextInputV2
        title="Zip Code"
        icon={icon}
        span={12}
        width="100%"
        disabled={disabled}
        placeholder={`${placeholder}Zip Code`}
        rules={[
          ...rules,
          //   { required: true, message: "Index is required" },
          validate("", NUMERIC),
        ]}
        name={getName(name, "address_index")}
      />
    </>
  );
};
