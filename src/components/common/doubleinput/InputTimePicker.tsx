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

  const FORMAT = "HH:mm:ss a";

  const getName = useMemo(() => {
    return pathName ? [...pathName, name] : name;
  }, [pathName, name]);

  const [showPicker, setShowPicker] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(
    dayjs("02:00:00 a", FORMAT)
  );
  const [hasDefaultValue, setHasDefaultValue] = useState(false);

  React.useEffect(() => {
    if (!!form.getFieldValue(getName)) {
      if (typeof form.getFieldValue(getName) === "string" && !hasDefaultValue) {
        setSelectedTime(dayjs(form.getFieldValue(getName), FORMAT));
        setHasDefaultValue(true);
      }
    }
  }, [form]);

  React.useEffect(() => {
    form.setFieldValue(getName, selectedTime.format(FORMAT));
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
      <Form.Item
        name={getName}
        style={{ width: "100%" }}
        rules={[
          {
            required: true,
            message: "Please select time!",
          },
        ]}
      ></Form.Item>
      <TimePicker
        use12Hours
        size={"large"}
        placeholder={placeholder}
        style={{ width, ...styles, position: "absolute", top: 30 }}
        disabled={disabled}
        format={FORMAT}
        value={dayjs(selectedTime, FORMAT)}
        defaultValue={dayjs("02:00:00 a", FORMAT)}
        defaultOpenValue={dayjs("02:00:00 a", FORMAT)}
        onChange={(e, timeString) => {
          console.log("time string", timeString);
          setSelectedTime(e);
        }}
      />
    </Col>
  );
};
