import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarrierReq, createCarrierReq } from "../../../actions/carrier";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { carrierForm } from "./carrier-form";
import { Graph } from "../../common/graph/Graph";
import { InputType } from "../../../constants/inputs";

function buildFormData(formData: any, data: any, parentKey?: any) {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;

    formData.append(parentKey, value);
  }
}

function jsonToFormData(data: any) {
  const formData = new FormData();

  buildFormData(formData, data);

  return formData;
}

export const CarrierCreatePage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, carrier } = useSelector((state: any) => state.carrier);
  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    const f = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    const data = jsonToFormData({
      ...values,
      email: `govno${f}@govno.com`,
      company: user.company.id,
      offices: [...user.offices].map((office) => office.id),
    });
    dispatch(
      createCarrierReq({
        values: data,
        onSuccess: () => {
          form.setFieldsValue(initialValues);
        },
      })
    );
  };

  // React.useEffect(() => {
  //   form.setFieldsValue(carrier);
  //   setInitialValues({ ...initialValues, ...carrier });
  // }, [carrier]);

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
              <Form.Item style={{ width: "100%", display: "flex" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="orange"
                  style={{ width: "65px", marginRight: 12 }}
                >
                  Submit
                </Button>
                <Button
                  className="grey"
                  style={{ width: "85px", marginRight: 12 }}
                  onClick={() => {
                    form.setFieldsValue(initialValues);
                  }}
                >
                  Cancel
                </Button>
              </Form.Item>
            </Form>
          </Col>
        )}
      </Row>
    </>
  );
};
