import React, { useState, useMemo } from "react";
import { Form, Select, Col } from "antd";

export const InputSelectColor = (props: any) => {
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
  } = props;

  const { Option } = Select;
  const isRequired = rules.find((rule: any) => rule.required);

  // const getName = useMemo(() => {
  //   return pathName ? [...pathName, name] : name;
  // }, [pathName, name]);

  const getName = (name: any, pathName: any) => {
    return pathName ? [...pathName, name] : name;
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
          onChange={onChange}
          showSearch
          optionFilterProp="children"
          //   filterOption={(input: any, option: any) =>
          //     (option?.label?.toLowerCase() ?? "").includes(input)
          //   }
          //   filterSort={(optionA: any, optionB: any) => {
          //     if (optionA?.label && optionB?.label) {
          //       return (optionA?.label.option?.label?.toLowerCase() ?? "")
          //         .toLowerCase()
          //         .localeCompare(
          //           (optionB?.label?.toLowerCase() ?? "").toLowerCase()
          //         );
          //     }
          //   }}
          onFocus={() => {
            onFocus();
          }}
        >
          {options.map((item: any, i: number) => {
            return (
              <Option
                key={i}
                value={item.key}
                style={{ backgroundColor: item.color }}
              >
                {item.value}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </Col>
  );
};
