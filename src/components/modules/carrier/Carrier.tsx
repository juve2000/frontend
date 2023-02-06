import React from "react";
import { Row, Col, Form, Button, Input } from "antd";
import { CommonInput } from "../../common/inputs";
import { carrierForm } from "./carrier-form";
import { Graph } from "../../../components/common/graph/Graph";

export const CarrierPage = () => {
  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    console.log("form", form);
    console.log("values", values);
  };
  return (
    <>
      <Row style={{ paddingLeft: 23, paddingRight: 25 }}>
        <Graph />
        <Col span={24}>
          <Form
            form={form}
            name="test"
            onError={(err) => {
              console.log("err", err);
            }}
            onFinish={handleSubmit}
            initialValues={{
              name: "stas",
              lastName: "litvinov",
              dot: "",
              id: "",
              phone: "",
              adress: {},
            }}
          >
            {carrierForm.map((field: any, i: number) => {
              return <CommonInput key={i} {...field} />;
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
