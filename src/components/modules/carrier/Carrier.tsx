import React, { useState } from "react";
import { Row, Col, Form, Button, Input } from "antd";
import { CommonInput } from "../../common/inputs";
import { carrierForm } from "./carrier-form";
import { Graph } from "../../../components/common/graph/Graph";
import { InputType } from "../../../constants/inputs";

export const CarrierPage = () => {
  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    console.log("form", form);
    console.log("values", values);
  };

  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialValues, setInitialValues] = useState({
    name1: "name 1",
    name2: "name 2",
    name: "stas",
    lastName: "litvinov",
    dot: "",
    id: "",
    phone: "",
    adress: {},
    terminals: [
      { name: "name1", dot: "dot1", active: true },
      { name: "name2", dot: "dot2", active: true },
    ],
  });

  return (
    <>
      <Row style={{ paddingLeft: 23, paddingRight: 25 }}>
        {/* <Graph /> */}
        <Col span={24}>
          <Form
            form={form}
            name="test"
            onError={(err) => {
              console.log("err", err);
            }}
            onFinish={handleSubmit}
            initialValues={initialValues}
          >
            {carrierForm.map((field: any, i: number) => {
              if (field.type === InputType.ADD_DYNAMIC) {
                return (
                  <CommonInput
                    currentIndex={currentIndex}
                    fields={fields}
                    key={i}
                    setCurrentIndex={setCurrentIndex}
                    {...field}
                  />
                  // prettier-ignore
                );
              }
              // prettier-ignore
              return <CommonInput key={i} {...field} form={form} />
            })}
            <Form.Item style={{ width: "100%" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="orange"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
