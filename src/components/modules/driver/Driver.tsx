import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { getCarriersListReq } from "../../../actions/carrier";
import {
  updateDriverReq,
  getDriverReq,
  setCurrentCarrier,
} from "../../../actions/driver";
import { CARRIER_SELECT_DISABLED } from "../../common/doubleinput/utils";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { carrierForm } from "./carrier-form";
import { InputType } from "../../../constants/inputs";
import { PAGE_STATUS, getDocumentByType } from "./constant";
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
    cargo_type: [],
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

  useEffect(() => {
    if (driver?.carrier?.id) {
      const foundCarrier = carrierList.find(
        (carrier: any) => carrier.id === driver.carrier.id
      );

      dispatch(
        setCurrentCarrier({ ...foundCarrier, defaultSavedCarrier: true })
      );
    }
  }, [carrierList, driver]);

  React.useEffect(() => {
    setStateValue(search.get("state"));
  }, [search]);

  React.useEffect(() => {
    dispatch(
      getCarriersListReq({
        queryParams: {
          with: ["settings", "terminals", "driver_groups", "documents"],
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

  useEffect(() => {
    dispatch(
      getDriverReq({
        driverId: params.driverid,
        queryParams: {
          with: ["terminal", "group", "carrier", "documents"],
        },
      })
    );
  }, []);

  const handleSubmit = async (values: any) => {
    console.log("values", values);
    const f = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    const data = jsonToFormData({
      ...values,
      company: user.company.id,
      cdl_state: `${values.cdl_state}`,
      offices: [...user.offices].map((office) => office.id),
      documents: [
        ...(values?.documents_MC?.length > 0
          ? values?.documents_MC?.map((doc: any) => {
              return {
                type: getDocumentByType(doc.fileType) || 2,
                file: doc.originFileObj,
                driver: params.driverId,
              };
            })
          : []),
        ...(values?.documents_CDL?.length > 0
          ? values?.documents_CDL?.map((doc: any) => {
              return {
                type: getDocumentByType(doc.fileType) || 1,
                file: doc.originFileObj,
                driver: params.driverId,
              };
            })
          : []),
      ],
      documents_MC: undefined,
      documents_CDL: undefined,
    });

    dispatch(
      updateDriverReq({
        values: data,
        driverId: params.driverid,
      })
    );
  };

  React.useEffect(() => {
    setInitialValues({
      ...initialValues,
      ...driver,
      carrier: driver?.carrier?.id,
      terminal: driver?.terminal?.id,
      driver_group: driver?.group?.id,
      cargo_type: driver?.cargo_type?.map((ct: any) => +ct),
    });
    form.setFieldsValue({
      ...initialValues,
      ...driver,
      carrier: driver?.carrier?.id,
      terminal: driver?.terminal?.id,
      driver_group: driver?.group?.id,
      cargo_type: driver?.cargo_type?.map((ct: any) => +ct),
      group: driver?.group?.id,
    });
  }, [driver]);

  const { checkPermission } = usePermissions();

  return (
    <>
      {checkPermission(AllPermissionsType.DRIVER_SHOW) ? (
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
                    disabled:
                      state === PAGE_STATUS.VIEW ||
                      !checkPermission(AllPermissionsType.DRIVER_EDIT),
                    isReadonlyCarrier: true,
                  };

                  if (CARRIER_SELECT_DISABLED.includes(field.type)) {
                    return (
                      <CommonInput
                    currentIndex={currentIndex}
                    fields={fields}

                    key={i}
                    setCurrentIndex={setCurrentIndex}
                    {...field}
                    form={form}
                    isReadonlyCarrier={true}
                  />
                      // prettier-ignore
                    );
                  }

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
                  return (
                    <CommonInput
                      key={i}
                      {...field}
                      form={form}
                      showDocsList={true}
                    />
                  );
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
      ) : (
        <NoPermission />
      )}
    </>
  );
};
