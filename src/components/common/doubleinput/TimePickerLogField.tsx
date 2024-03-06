import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Col, TimePicker } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { ConfigProvider, DatePicker, Space, Typography } from "antd";
import type { DatePickerProps } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import enUS from "antd/es/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
//getFormatDateFromTimeStamp
import { getFormatDateFromTimeStamp } from "../../modules/driver_log/log-utils";

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

  dayjs.extend(buddhistEra);

  const buddhistLocale: typeof en = {
    ...en,
    lang: {
      ...en.lang,
      // fieldDateFormat: "YYYY-MM-DD",
      fieldDateTimeFormat: "YYYY-MM-DD HH:mm:ss",
      yearFormat: "YYYY",
      cellYearFormat: "YYYY",
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

  const driverLogDate = useSelector(
    (state: any) => state?.driverLog?.driverLogDate
  );
  const driverLogData = useSelector((state: any) => state?.driverLog?.logForms);

  const getName = useMemo(() => {
    return pathName ? [...pathName, name] : name;
  }, [pathName, name]);

  const defaultV = !!form.getFieldValue(getName)
    ? dayjs(form.getFieldValue(getName))
    : dayjs(driverLogDate);

  const [defaultValue, setDefaultValue] = useState(defaultV);
  console.log("defaultV", dayjs(defaultV).valueOf());
  console.log("form.getFieldValue(getName)", form.getFieldValue(getName));

  // React.useEffect(() => {
  //   const defaultV2 = !!form.getFieldValue(getName)
  //     ? dayjs(form.getFieldValue(getName))
  //     : dayjs(driverLogDate);
  //   setDefaultValue(defaultV2);
  // }, [form]);

  console.log("!!form.getFieldValue(getName)", !!form.getFieldValue(getName));
  const FORMAT = "hh:mm:ss:a";
  const DEFAULT_VALUE = "02:00:00";

  // const logTimeValue = ;

  const [showPicker, setShowPicker] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(dayjs(DEFAULT_VALUE));
  const [hasDefaultValue, setHasDefaultValue] = useState(false);

  return (
    <Col
      span={span}
      className="input-container-v2"
      style={{
        position: "relative",
        // height: "100%",
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
        style={{ width }}
        // rules={[
        //   {
        //     required: true,
        //     message: "Please select time!",
        //   },
        // ]}
      >
        <ConfigProvider locale={globalBuddhistLocale}>
          <DatePicker
            defaultValue={defaultValue}
            // value={
            //   !!form.getFieldValue(getName)
            //     ? dayjs(form.getFieldValue(getName))
            //     : dayjs(driverLogDate)
            // }
            // value={dayjs(form.getFieldValue(getName))}
            showTime
            onChange={(e, timeString) => {
              console.log("on cahnge", e);
              setSelectedTime(e);
              form.setFieldValue(getName, dayjs(e).valueOf());
            }}
          />
        </ConfigProvider>
      </Form.Item>

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
