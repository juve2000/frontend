import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarrierReq, createCarrierReq } from "../../../actions/carrier";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { carrierForm } from "./carrier-form";
import { Graph } from "../../common/graph/Graph";
import { InputType } from "../../../constants/inputs";

const promise = async () => {
  return new Promise((res, rej) => {
    res(3);
  });
};

export const CarrierCreatePage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, carrier } = useSelector((state: any) => state.carrier);
  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  React.useEffect(() => {
    console.log("params", params);
  }, [params]);

  const [initialValues, setInitialValues] = useState({
    name: "",

    usdot: "",
    phone: "",
    mcnumber: "",
    email: "",
    person: "",
    status: null,
    notes: "",
    email_second: "",
    settings: {
      measurement_system: null,
      dst: null,
      first_day: null,
      compliance_mode: null,
      motion_treshold: null,
      cargo_type: null,
      restart: null,
      rest_break: null,
      short_haul: false,
      personal_conveyance: false,
      adverse_conditions: false,
      unlimited_documents: false,
      unlimited_trailers: false,
      yard_move: false,
      exempt_driver: false,
      exempt_driver_notice: false,
      period_starting_time: "",
      motion_trashhold: "",
    },
    terminals: [
      {
        name: "",
        country: 1,
        state: 1,
        area: "",
        address_index: "",
        tz: 1,
        number_street: "",
      },
    ],
  });

  const handleSubmit = async (values: any) => {
    dispatch(
      createCarrierReq({
        values: {
          ...values,
          company: user.company.id,
          offices: [...user.offices].map((office) => office.id),
        },
        onSuccess: () => {
          form.setFieldsValue(initialValues);
        },
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
