import React, { useState } from "react";
import { Form, Input, Row, Col, Select } from "antd";
import { states } from "./utils";
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
  } = props;
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
          <TextInputV2
            title="Street Number"
            icon={icon}
            span={24}
            width="100%"
            placeholder={`${placeholder} Street Number`}
            rules={[
              ...rules,
              { required: true, message: "Street number is required" },
            ]}
            name={[name, "number_street"]}
            hasFeedback={true}
          />
          <TextInputV2
            title="Province"
            icon={icon}
            span={12}
            width="95%"
            placeholder={`${placeholder} Province`}
            rules={[
              ...rules,
              { required: true, message: "Province is required" },
              validate("", ALPHABETICAL),
            ]}
            name={[name, "area"]}
            hasFeedback={true}
          />
          <InputSelectV2
            title="State"
            icon={icon}
            span={12}
            width="100%"
            placeholder={`${placeholder} state`}
            rules={[...rules, { required: true, message: "State is required" }]}
            name={[name, "state"]}
            hasFeedback={true}
            options={states}
          />
          <InputSelectV2
            title="Country"
            icon={icon}
            span={12}
            width="95%"
            placeholder={`${placeholder} country`}
            rules={[
              ...rules,
              { required: true, message: "Country is required" },
            ]}
            name={[name, "country"]}
            hasFeedback={true}
            options={[
              {
                value: "US",
                key: "USA",
              },
            ]}
          />
          <TextInputV2
            title="Index"
            icon={icon}
            span={12}
            width="100%"
            placeholder={`${placeholder} Index`}
            rules={[
              ...rules,
              { required: true, message: "Index is required" },
              validate("", ALPHABETICAL),
            ]}
            name={[name, "address_index"]}
            hasFeedback={true}
          />
        </Row>
      </Col>
    </Row>
  );
};
