import React, { useState, useMemo } from "react";
import { Form, Input, Col, TimePicker } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { ConfigProvider, DatePicker, Space, Typography } from "antd";
import type { DatePickerProps } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import enUS from "antd/es/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";

dayjs.extend(buddhistEra);

const buddhistLocale: typeof en = {
  ...en,
  lang: {
    ...en.lang,
    fieldDateFormat: "BBBB-MM-DD",
    fieldDateTimeFormat: "BBBB-MM-DD HH:mm:ss",
    yearFormat: "BBBB",
    cellYearFormat: "BBBB",
  } as any,
};

// ConfigProvider level locale
const globalBuddhistLocale: typeof enUS = {
  ...enUS,
  DatePicker: {
    ...enUS.DatePicker!,
    lang: buddhistLocale.lang,
  },
};

const defaultValue = dayjs("2024-01-01");

export const TimePickerLogField = (props: any) => {
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

  const FORMAT = "hh:mm:ss:a";
  const DEFAULT_VALUE = "02:00:00";

  const getName = useMemo(() => {
    return pathName ? [...pathName, name] : name;
  }, [pathName, name]);

  const [showPicker, setShowPicker] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(dayjs(DEFAULT_VALUE));
  const [hasDefaultValue, setHasDefaultValue] = useState(false);

  React.useEffect(() => {
    if (!!form.getFieldValue(getName)) {
      console.log("time", form?.getFieldValue(getName));
      if (typeof form.getFieldValue(getName) === "string") {
        setSelectedTime(dayjs(form.getFieldValue(getName)));
        // setHasDefaultValue(true);
      }
      if (typeof form.getFieldValue(getName) === "number") {
        setSelectedTime(
          dayjs(form?.getFieldValue(getName)).format("BBBB-MM-DD HH:mm:ss")
        );

        // setHasDefaultValue(true);
      }
    }
  }, [form?.getFieldValue(getName)]);
  const onChange: DatePickerProps["onChange"] = (_, dateStr) => {
    console.log("onChange:", dateStr);
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
        // rules={[
        //   {
        //     required: true,
        //     message: "Please select time!",
        //   },
        // ]}
      ></Form.Item>

      <ConfigProvider locale={globalBuddhistLocale}>
        <DatePicker
          defaultValue={defaultValue}
          showTime
          onChange={(e, timeString) => {
            setSelectedTime(e);
            form.setFieldValue(getName, dayjs(e).valueOf());
            console.log("e", dayjs(e).valueOf() as any);
            console.log("ET", new Date(dayjs(e).format("BBBB-MM-DD HH:mm:ss")));
          }}
        />
      </ConfigProvider>
      {/* <TimePicker
        use12Hours
        size={"large"}
        placeholder={placeholder}
        style={{ width, ...styles, position: "absolute", top: 30 }}
        disabled={disabled}
        format={FORMAT}
        value={dayjs(selectedTime, FORMAT)}
        defaultValue={dayjs(DEFAULT_VALUE, FORMAT)}
        defaultOpenValue={dayjs(DEFAULT_VALUE, FORMAT)}
        onChange={(e, timeString) => {
          setSelectedTime(e);
          form.setFieldValue(getName, selectedTime.format(FORMAT));
        }}
      /> */}
    </Col>
  );
};
