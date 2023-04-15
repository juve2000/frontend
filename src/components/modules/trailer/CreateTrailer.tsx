import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarriersListReq } from "../../../actions/carrier";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { carrierForm } from "./trailer-form";
import { Graph } from "../../common/graph/Graph";
import { InputType } from "../../../constants/inputs";

import { createTrailerReq } from "../../../actions/trailer";
import { jsonToFormData } from "../../../hooks/utils";
import { setCurrentCarrierTrailer } from "../../../actions";

export const TrailerCreatePage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, trailer, currentCarrier } = useSelector(
    (state: any) => state.trailer
  );
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );
  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [initialValues, setInitialValues] = useState({
    identificator: "",
    vin: "",
    make: null,
    model: "",
    fuel_type: null,
    carrier: null,
    status: null,
    notes: "",
    license_plate: null,
    license_issuing: "",
    license_expiration: "",
  });

  React.useEffect(() => {
    dispatch(
      getCarriersListReq({
        queryParams: {
          with: ["settings", "terminals", "driver_groups"],
        },
      })
    );
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      ...form.getFieldsValue(),
      // ...(!currentCarrier.defaultSavedCarrier ? currentCarrier?.settings : {}),
    });
  }, [currentCarrier]);

  const handleSubmit = async (values: any) => {
    const f = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    const data = jsonToFormData({
      ...values,
    });
    dispatch(
      createTrailerReq({
        values: data,
        onSuccess: () => {
          form.setFieldsValue(initialValues);
          setCurrentCarrierTrailer({});
        },
      })
    );
  };

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
          <Col span={16}>
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
