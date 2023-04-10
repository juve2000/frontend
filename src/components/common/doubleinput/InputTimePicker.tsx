import React, { useState, useMemo } from "react";
import { Form, Input, Col, TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const InputTimePickerV2 = (props: any) => {
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

  const getName = useMemo(() => {
    return pathName ? [...pathName, name] : name;
  }, [pathName, name]);

  const [showPicker, setShowPicker] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(
    dayjs("02:00:00", "HH:mm")
  );
  const [hasDefaultValue, setHasDefaultValue] = useState(false);

  React.useEffect(() => {
    if (!!form.getFieldValue(getName)) {
      console.log("first if", form.getFieldValue(getName));
      console.log(
        "frist if type of string",
        typeof form.getFieldValue(getName) === "string"
      );
      if (typeof form.getFieldValue(getName) === "string" && !hasDefaultValue) {
        console.log("second if", form.getFieldValue(getName));

        setSelectedTime(dayjs(form.getFieldValue(getName), "HH:mm"));
        setHasDefaultValue(true);
      }
    }
  }, [form]);

  React.useEffect(() => {
    form.setFieldValue(getName, selectedTime.format("HH:mm"));
    // console.log("selected time", selectedTime);
  }, [selectedTime]);

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
      {/* <TimePicker value={value} onChange={onChange} /> */}
      <Form.Item
        name={getName}
        style={{ width: "100%" }}
        // initialValue={dayjs("02:00:00", "HH:mm:ss")}
        rules={[
          {
            // type: "object" as const,
            required: true,
            message: "Please select time!",
          },
        ]}
      ></Form.Item>
      <TimePicker
        placeholder={placeholder}
        style={{ width, ...styles, position: "absolute", top: 30 }}
        disabled={disabled}
        format={"HH:mm"}
        value={dayjs(selectedTime, "HH:mm")}
        defaultValue={dayjs("02:00:00", "HH:mm")}
        defaultOpenValue={dayjs("02:00:00", "HH:mm")}
        onChange={(e, timeString) => {
          setSelectedTime(e);
        }}
      />
    </Col>
  );
};
