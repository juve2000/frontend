import React, { useState, useMemo } from "react";
import { Form, Select, Col, Input } from "antd";
import { annotations } from "../../modules/driver_log/fields/log-contant";

// const noteItems = [
//   { key: "Pre-Trip Inspection", value: 1 },
//   { key: "Post-Trip Inspection", value: 2 },
//   { key: "Pick Up", value: 3 },
//   { key: "Delivery", value: 4 },
//   { key: "Fuel", value: 5 },
//   { key: "Hooking", value: 6 },
//   { key: "Dropping", value: 7 },
//   { key: "Safety Check", value: 8 },
//   { key: "DOT Inspection", value: 9 },
//   { key: "Check in", value: 10 },
//   { key: "Check out", value: 11 },
//   { key: "Parking", value: 12 },
//   { key: "Repairs", value: 13 },
// ];

const noteItems = annotations.map((ant: any) => {
  return {
    key: ant.value,
    label: ant?.value,
    value: ant?.key,
  };
});

export const InputSelectNotesV2 = (props: any) => {
  const {
    rules = [],
    name = "",
    icon = "",
    placeholder = "",
    label = "",
    disabled = false,
    hasFeedback = true,
    options = [],
    title,
    span,
    width,
    styles = {},
    pathName = "",
    form,
    onChange,
    onFocus = () => null,
    onSelect,
  } = props;

  const { Option } = Select;
  const isRequired = rules.find((rule: any) => rule.required);

  const getName = (name: any, pathName: any) => {
    return pathName ? [...pathName, name] : name;
  };

  const eventValue = form.getFieldValue("event");

  const dutyStatus = [14, "14"];

  const isDuty = dutyStatus.includes(eventValue);

  return !isDuty ? (
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
      <Form.Item rules={rules} name={name} style={{ width: "100%" }}>
        <Input
          prefix={
            !!icon ? (
              <span className={`icon-icon-${icon} orange`}></span>
            ) : (
              <span></span>
            )
          }
          placeholder={placeholder}
          style={{ width, ...styles }}
          disabled={disabled}
        />
      </Form.Item>
    </Col>
  ) : (
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
          <div className="input-item-title" style={{ opacity: 0 }}>
            {title}
          </div>
        ) : (
          <div className="input-item-title">{title}</div>
        )
      ) : null}
      <Form.Item
        rules={rules}
        name={getName(name, pathName)}
        style={{ width: "100%" }}
      >
        <Select
          disabled={disabled}
          style={{ width, ...styles }}
          placeholder={placeholder}
          onChange={(value) => {
            onChange?.(value);
          }}
          // value={form?.getFieldValue(getName(name, pathName))}
          showSearch
          optionFilterProp="children"
          filterOption={(input: any, option: any) =>
            (option?.label?.toLowerCase() ?? "").includes(input)
          }
          filterSort={(optionA: any, optionB: any) => {
            if (optionA?.label && optionB?.label) {
              return (optionA?.label.option?.label?.toLowerCase() ?? "")
                .toLowerCase()
                .localeCompare(
                  (optionB?.label?.toLowerCase() ?? "").toLowerCase()
                );
            }
          }}
          onFocus={() => {
            onFocus();
          }}
          options={
            noteItems?.length
              ? noteItems?.map((o: any) => {
                  return {
                    value: o?.value,
                    label: `${o?.key}`,
                  };
                })
              : [
                  { value: "", label: "" },
                  { value: "", label: "" },
                ]
          }
          onSelect={(value) => {
            if (onSelect) {
              onSelect(value);
            }
          }}
        />
        {/* {options.map((item: any, i: number) => {
            return (
              <Option key={i} value={item.key}>
                {item.value}
              </Option>
            );
          })}
        </Select> */}
      </Form.Item>
    </Col>
  );
};
