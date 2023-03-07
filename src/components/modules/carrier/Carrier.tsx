import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarrierReq, createCarrierReq } from "../../../actions/carrier";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { carrierForm } from "./carrier-form";
import { Graph } from "../../../components/common/graph/Graph";
import { InputType } from "../../../constants/inputs";

const promise = async () => {
  return new Promise((res, rej) => {
    res(3);
  });
};

export const CarrierPage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, carrier } = useSelector((state: any) => state.carrier);
  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialValues, setInitialValues] = useState({
    name: "vasea pupkin",
    company: "01GS6TJ6FTCX93Q16PPR2NR4FD",
    offices: ["01GS6TVX8YTVK0M3CRB3C7S6QV", "01GS6TWCA6HYX1M8SVSVBQZ8YY"],
    usdot: "100000013",
    phone: "+393129319231",
    mcnumber: "20000001",
    email: "govno@govno.com",
    person: "Ale d",
    status: 1,
    notes: "test text1",
    email_second: "a@a.com",
    settings: {
      measurement_system: 1,
      dst: 1,
      first_day: 1,
      compliance_mode: 1,
      motion_treshold: 2,
      cargo_type: 1,
      restart: 1,
      rest_break: 1,
      short_haul: true,
      personal_conveyance: true,
      adverse_conditions: true,
      unlimited_documents: true,
      unlimited_trailers: true,
      yard_move: true,
      exempt_driver: true,
      exempt_driver_notice: true,
      period_starting_time: "12-12-12",
      motion_trashhold: 3,
    },
    terminals: [
      {
        name: "name1",
        country: 1,
        state: 1,
        area: "london",
        address_index: "1234",
        tz: 1,
        number_street: "12 riso",
      },
    ],
  });
  useEffect(() => {
    dispatch(getCarrierReq({ carrierId: params.carrierid }));
  }, []);

  const handleSubmit = async (values: any) => {
    console.log("values,", values);
    const f = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    dispatch(
      createCarrierReq({
        ...values,
        email: `govno${f}@govno.com`,
        company: user.company.id,
        offices: [...user.offices].map((office) => office.id),
      })
    );
  };

  React.useEffect(() => {
    form.setFieldsValue(carrier);
    setInitialValues({ ...initialValues, ...carrier });
  }, [carrier]);

  React.useEffect(() => {
    console.log("initial", initialValues);
  }, [initialValues]);

  return (
    <>
      <Row style={{ paddingLeft: 23, paddingRight: 25, height: "100%" }}>
        {/* <Graph /> */}
        {loading ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: 600,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin />
          </div>
        ) : (
          <Col span={24}>
            <Form
              form={form}
              name="test"
              onError={(err) => {
                console.log("err", err);
              }}
              onFinish={handleSubmit}
              initialValues={initialValues}
              onChange={(values) => {
                console.log("form values", form.getFieldsValue());
              }}
            >
              {carrierForm({}).map((field: any, i: number) => {
                if (field.type === InputType.ADD_DYNAMIC) {
                  return (
                    <CommonInput
                    currentIndex={currentIndex}
                    fields={fields}
                    key={i}
                    setCurrentIndex={setCurrentIndex}
                    {...field}
                    form={form}
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
        )}
        <Button
          onClick={() => {
            console.log("values", form.getFieldsValue());
            form.validateFields().then((res) => {
              const a = promise();
              console.log("a", a);
            });
            // dispatch(
            //   createCarrierReq({
            //     ...form.getFieldsValue(),
            //   })
            // );
          }}
        >
          push
        </Button>
      </Row>
    </>
  );
};
