import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import {
  getCarrierReq,
  createCarrierReq,
  updateCarrierReq,
  getCarriersListReq,
} from "../../../actions/carrier";
import {
  updateDriverReq,
  getDriverReq,
  setCurrentCarrier,
} from "../../../actions/driver";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { carrierForm } from "./carrier-form";
import { Graph } from "../../../components/common/graph/Graph";
import { InputType } from "../../../constants/inputs";
import { PAGE_STATUS, DriverField } from "./constant";

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

export const DriverPage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const location = useLocation();
  const [search, setSearch] = useSearchParams();
  const [state, setStateValue] = React.useState(search.get("state"));
  const dispatch = useDispatch();
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
    terminal: null,
    driver_group: null,
    password: "",
  });
  const { loading, driver, currentCarrier } = useSelector(
    (state: any) => state.driver
  );
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );

  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentCarrier, setCurrentCarrier] = useState<any>({});

  useEffect(() => {
    if (driver?.carrier?.id) {
      const foundCarrier = carrierList.find(
        (carrier: any) => carrier.id === driver.carrier.id
      );

      dispatch(setCurrentCarrier(foundCarrier));
    }
  }, [carrierList, driver]);

  React.useEffect(() => {
    setStateValue(search.get("state"));
  }, [search]);

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
      ...currentCarrier?.settings,
      driver_group: null,
    });
  }, [currentCarrier]);

  useEffect(() => {
    dispatch(
      getDriverReq({
        driverId: params.driverid,
        queryParams: {
          with: ["terminal", "group", "carrier"],
        },
      })
    );
  }, []);

  const handleSubmit = async (values: any) => {
    const f = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    const data = jsonToFormData({
      ...values,
      company: user.company.id,
      offices: [...user.offices].map((office) => office.id),
    });
    dispatch(
      updateDriverReq({
        values: data,
        driverId: params.driverid,
      })
    );
  };

  React.useEffect(() => {
    form.setFieldsValue({
      ...initialValues,
      ...driver,
      carrier: driver?.carrier?.id,
      terminal: driver?.terminal?.id,
      driver_group: driver?.driver_group?.id,
    });
    setInitialValues({
      ...initialValues,
      ...driver,
      carrier: driver?.carrier?.id,
      terminal: driver?.terminal?.id,
      driver_group: driver?.driver_group?.id,
    });
  }, [driver]);

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
                console.log("err", err);
              }}
              onFinish={handleSubmit}
              initialValues={initialValues}
              onChange={(values) => {
                console.log("form values", form.getFieldsValue());
              }}
            >
              {carrierForm({}).map((fieldCurrent: any, i: number) => {
                const field = {
                  ...fieldCurrent,
                  disabled: state === PAGE_STATUS.VIEW,
                };

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
                return <CommonInput key={i} {...field} form={form} />;
              })}
              <Form.Item style={{ width: "100%", display: "flex" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="orange"
                  style={{ width: "65px", marginRight: 12 }}
                >
                  Save
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
