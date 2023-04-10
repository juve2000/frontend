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

  const getName = useMemo(() => {
    return pathName ? [...pathName, name] : name;
  }, [pathName, name]);

  const [showPicker, setShowPicker] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(
    dayjs("02-02-2022", FORMAT)
  );
  const [hasDefaultValue, setHasDefaultValue] = useState(false);

  React.useEffect(() => {
    if (!!form.getFieldValue(getName)) {
      if (typeof form.getFieldValue(getName) === "string") {
        setSelectedTime(dayjs(form.getFieldValue(getName), FORMAT));
        // setHasDefaultValue(true);
      }
    }
  }, [form]);

  React.useEffect(() => {
    // form.setFieldValue(getName, selectedTime.format("YYYY-MM-DD"));
    if (!!selectedTime) {
      form.setFieldValue(getName, selectedTime.format(FORMAT));
    }

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
            message: "Please select date!",
          },
        ]}
      ></Form.Item>
      <DatePicker
        placeholder={placeholder}
        style={{ width, ...styles, position: "absolute", top: 30 }}
        disabled={disabled}
        format={FORMAT}
        // value={dayjs(selectedTime, "YYYY-MM-DD")}
        defaultValue={dayjs(selectedTime, FORMAT)}
        // defaultOpenValue={dayjs("02:00:00", "HH:mm")}
        onChange={(e, timeString) => {
          setSelectedTime(e);
        }}
      />
    </Col>
  );
};
