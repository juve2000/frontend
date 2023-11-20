import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createCarrierReq, getCarriersListReq } from "../../../actions/carrier";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { carrierForm } from "./carrier-form";
import { Graph } from "../../common/graph/Graph";
import { InputType } from "../../../constants/inputs";

import {
  updateUnitReq,
  getUnitReq,
  createUnitReq,
} from "../../../actions/unit";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";

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

export const UnitCreatePage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, driver, currentCarrier } = useSelector(
    (state: any) => state.driver
  );

  const { checkPermission } = usePermissions();
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );
  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [initialValues, setInitialValues] = useState({
    carrier: null,
    driver: null,
    color: null,
    truck: null,
    device: null,
    trailer: null,
    codriver: null,
    // notice: "",
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
      ...(!currentCarrier.defaultSavedCarrier ? currentCarrier?.settings : {}),
      cargo_type: form.getFieldValue("cargo_type"),
      driver_group: currentCarrier?.defaultSavedCarrier
        ? form.getFieldValue("driver_group")
        : null,
    });
  }, [currentCarrier]);

  const handleSubmit = async (values: any) => {
    const f = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    const data = jsonToFormData({
      ...values,
      color: 1,
      codriver: 0,
      // status: 1,
    });
    dispatch(
      createUnitReq({
        values: data,
        onSuccess: () => {
          form.setFieldsValue(initialValues);
        },
      })
    );
  };

  return (
    <>
      {checkPermission(AllPermissionsType.DRIVER_CREATE) ? (
        <Row style={{ paddingLeft: 23, paddingRight: 25, height: "100%" }}>
          {/* <Graph /> */}
          {false ? (
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
                  return <CommonInput key={i} {...field} form={form} isDriverCreate={false}/>
                })}
                <Form.Item style={{ width: "100%", display: "flex" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="orange"
                    style={{ width: "85px", marginRight: 12 }}
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
      ) : (
        <NoPermission />
      )}
    </>
  );
};
