import React, { useState, useMemo } from "react";
import { Form, Input, Col, TimePicker, DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const InputDatePickerSingleV2 = (props: any) => {
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
  const FORMAT = "MM-DD-YYYY";
  const DefaultValue = "02-03-2021";

  const getName = useMemo(() => {
    return pathName ? [...pathName, name] : name;
  }, [pathName, name]);

  const [showPicker, setShowPicker] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(
    // dayjs(DefaultValue, FORMAT)
    dayjs(DefaultValue, FORMAT)
  );
  const [hasDefaultValue, setHasDefaultValue] = useState(false);

  React.useEffect(() => {
    if (!!form.getFieldValue(getName)) {
      if (typeof form.getFieldValue(getName) === "string") {
        setSelectedTime(dayjs(form.getFieldValue(getName)));
      }
    }
  }, [form.getFieldValue(getName)]);

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
      <Form.Item
        name={getName}
        style={{ width: "100%" }}
        rules={[
          {
            // type: "object" as const,
            required: true,
            message: "Please select date!",
          },
        ]}
      ></Form.Item>
      <DatePicker
        placeholder={placeholder}
        style={{ width, ...styles, position: "absolute", top: 30 }}
        disabled={disabled}
        // format={FORMAT}
        value={selectedTime}
        // defaultValue={dayjs(selectedTime, FORMAT)}
        defaultValue={selectedTime}
        // defaultOpenValue={dayjs("02:00:00", "HH:mm")}
        onChange={(e, timeString) => {
          setSelectedTime(e);
          form.setFieldValue(getName, e?.format());
        }}
      />
    </Col>
  );
};
