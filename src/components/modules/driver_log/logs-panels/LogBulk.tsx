import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { Row, Col, DatePicker } from "antd";
import { DatePickerProps, Form, Button, Input, Select } from "antd";
import { CommonInput } from "../../../common/inputs";
import { jsonToFormData } from "../../../../hooks/utils";
import "./log-top-panel.scss";
import { TextInputV2 } from "../../../common/doubleinput";

export const LogBulkPanel = (props: any) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const [initialValues, setInitialValues] = useState({
    type: null,
    value: "",
  });

  const [form] = Form.useForm();
  const handleSubmit = async (values: any) => {
    console.log("VALUES", values);
    const f = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    const data = jsonToFormData({
      ...values,
    });
    // dispatch(
    //   createDriverLogReq({
    //     values: data,
    //     onSuccess: () => {
    //       form.setFieldsValue(initialValues);
    //       setCurrentVehicleCarrier({});
    //     },
    //   })
    // );
  };
  return (
    <Row>
      <Col
        span={24}
        className="ubuntu "
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Form
          form={form}
          name="test"
          onError={(err) => {
            // console.log("err", err);
          }}
          onFinish={handleSubmit}
          initialValues={initialValues}
          onChange={() => {
            console.log("form values", form.getFieldsValue());
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Form.Item name={"type"} style={{ width: "100%" }}>
            <Select
              //   disabled={disabled}
              //   style={{ width, ...styles }}
              //   placeholder={placeholder}
              //   onChange={onChange}
              // value={form?.getFieldValue(getName(name, pathName))}
              showSearch
              optionFilterProp="children"
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
              ]}
              //   onSelect={(value) => {
              //     if (onSelect) {
              //       onSelect(value);
              //     }
              //   }}
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
          <Form.Item name={"value"} style={{ width: "100%" }}>
            <Input
              title="value"
              //   placeholder={placeholder}
              //   style={{ width, ...styles }}
              //   disabled={disabled}
            />
          </Form.Item>
          <Form.Item style={{ width: "100%", display: "flex" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="orange"
              style={{ width: "65px", marginLeft: 12 }}
            >
              Apply
            </Button>
            {/* <Button
              className="grey"
              style={{ width: "85px", marginRight: 12 }}
              onClick={() => {
                // form.setFieldsValue(initialValues);
                // handleCancel();
              }}
            >
              Cancel
            </Button> */}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
