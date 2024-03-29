import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import {
  getCarrierReq,
  createCarrierReq,
  updateCarrierReq,
  getCarriersListReq,
  getCarrierPasswordReq,
} from "../../../actions/carrier";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { carrierForm } from "./carrier-form";
import { Graph } from "../../../components/common/graph/Graph";
import { SetPassword } from "./modals/CarrierSetPassword";
import { InputType } from "../../../constants/inputs";
import { PAGE_STATUS } from "./constant";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";
import { getParams } from "../../../routes/utils";

dayjs.extend(customParseFormat);

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

export const CarrierPage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const location = useLocation();
  const [search, setSearch] = useSearchParams();
  const [state, setStateValue] = React.useState(search.get("state"));
  const dispatch = useDispatch();
  const { loading, carrier } = useSelector((state: any) => state.carrier);
  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { checkPermission } = usePermissions();
  const [accautnModalOpen, setAccauntModalOpen] = useState(false);
  const [currentCarrier, setCurrentCarrier] = useState({
    id: "",
    name: "",
  });

  React.useEffect(() => {
    setStateValue(search.get("state"));
  }, [search]);

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
      period_starting_time: dayjs("00:00:00", "HH:mm:ss"),
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
  useEffect(() => {
    dispatch(
      getCarrierReq({
        carrierId: params.carrierid,
        queryParams: {
          with: ["settings", "terminals", "offices", "company"],
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
      settings: {
        ...values.settings,
        cargo_type: values.settings?.cargo_type.map((type: any) => `${type}`),
      },
      company: user.company.id,
      offices: [...user.offices].map((office) => office.id),
    });
    dispatch(
      updateCarrierReq({
        values: data,
        carrierId: params.carrierid,
      })
    );
  };

  React.useEffect(() => {
    form.setFieldsValue({
      ...carrier,
      settings: {
        ...carrier.settings,
        cargo_type: carrier.settings?.cargo_type.map((type: any) => +type),
      },
    });
    setInitialValues({
      ...carrier,
      settings: {
        ...carrier.settings,
        cargo_type: carrier.settings?.cargo_type.map((type: any) => +type),
      },
    });
  }, [carrier]);

  return (
    <>
      {checkPermission(AllPermissionsType.CARRIER_SHOW) ? (
        <Row
          style={{
            paddingLeft: 23,
            paddingRight: 25,
            height: "100%",
            position: "relative",
          }}
        >
          {/* <Graph /> */}
          <div
            onClick={() => {
              setCurrentCarrier({
                id: params?.carrierid || "",
                name: initialValues.name,
              });
              setAccauntModalOpen(true);
            }}
            className="orange"
            style={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              right: 25,
              top: 25,
              cursor: "pointer",
            }}
          >
            <span
              className="icon-fi-rr-lock orange"
              style={{ marginRight: "10px" }}
            ></span>{" "}
            Set Password
          </div>
          <SetPassword
            currentItem={currentCarrier}
            isOpen={accautnModalOpen}
            toggleModal={(status: any) => setAccauntModalOpen(status)}
            onSubmit={(payload: any) => {
              dispatch(
                getCarrierPasswordReq({
                  data: payload,
                  onSuccess: () => {
                    // dispatch(
                    //   getCarriersListReq({
                    //     queryParams: {
                    //       // ...getParams(tableParams),
                    //       with: ["terminals", "driver_groups"],
                    //     },
                    //   })
                    // );
                    setAccauntModalOpen(false);
                  },
                })
              );
            }}
          />
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
                {carrierForm({}).map((fieldCurrent: any, i: number) => {
                  const field = {
                    ...fieldCurrent,
                    disabled:
                      state === PAGE_STATUS.VIEW ||
                      !checkPermission(AllPermissionsType.CARRIER_EDIT),
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
                    disabled={
                      state === PAGE_STATUS.VIEW ||
                      !checkPermission(AllPermissionsType.CARRIER_EDIT)
                    }
                  >
                    Save
                  </Button>
                  <Button
                    className="grey"
                    style={{ width: "85px", marginRight: 12 }}
                    onClick={() => {
                      form.setFieldsValue(initialValues);
                    }}
                    disabled={
                      state === PAGE_STATUS.VIEW ||
                      !checkPermission(AllPermissionsType.CARRIER_EDIT)
                    }
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
