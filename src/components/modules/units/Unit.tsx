import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { getCarrierReq, getCarriersListReq } from "../../../actions/carrier";
import { updateUnitReq, getUnitReq } from "../../../actions/unit";
import { CARRIER_SELECT_DISABLED } from "../../common/doubleinput/utils";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { carrierForm } from "./carrier-form";
import { InputType } from "../../../constants/inputs";
// import { PAGE_STATUS, getDocumentByType } from "./constant";
import { PAGE_STATUS } from "../role/constant";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";
import {
  formatKeyValue,
  formatValueToData,
  getColorByCode,
} from "../../../utils/utils";
import { GoogleMapTracker } from "../../common/google-map/googleMapTracker";
import { socket } from "../../../socket";
import { mock } from "./fields/mock";
import { OpenLayerMap } from "../../common/google-map/olMap";

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

export const UnitPage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const location = useLocation();
  const [search, setSearch] = useSearchParams();
  const [state, setStateValue] = React.useState(search.get("state"));
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    carrier: null,
    driver: null,
    color: "",
    truck: null,
    device: null,
    trailer: null,
    codriver: null,
    vehicle: null,
    // notice: "",
  });
  const { loading, unit } = useSelector((state: any) => state.units);
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );

  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [info, setInfo] = useState<any>(mock);
  const [countV, setCount] = useState<any>(0);

  useEffect(() => {
    if (unit?.carrier?.id) {
      const foundCarrier = carrierList.find(
        (carrier: any) => carrier.id === unit.carrier.id
      );

      // dispatch(
      //   setCurrentCarrier({ ...foundCarrier, defaultSavedCarrier: true })
      // );
    }
  }, [carrierList, unit]);
  useEffect(() => {
    socket.on("message", (data: any) => {
      console.log("message", data.message);
      if (data?.message) {
        setInfo(JSON.parse(data.message));
        setCount((state: any) => {
          return state + 1;
        });
      }
    });
  }, [socket]);

  React.useEffect(() => {
    console.log("info", info);
  }, [info]);

  React.useEffect(() => {
    setStateValue(search.get("state"));
  }, [search]);

  useEffect(() => {
    dispatch(
      getUnitReq({
        unitId: params.unitId,
        onSuccess: (carrierid: any) => {
          dispatch(
            getCarrierReq({
              carrierId: carrierid,
              queryParams: {
                with: [
                  "devices",
                  "vehicles",
                  "trailers",
                  "driver_groups",
                  "drivers",
                ],
              },
            })
          );
        },
        queryParams: {
          with: [
            "terminal",
            "group",
            "carrier",
            "documents",
            "device",
            "trailer",
            "driver",
          ],
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
      carrier: formatValueToData(values.carrier),
      driver: formatValueToData(values.driver),
      device: formatValueToData(values.device),
      vehicle: formatValueToData(values.vehicle),
      trailer: formatValueToData(values.trailer),
    });

    dispatch(
      updateUnitReq({
        values: data,
        unitId: params.unitId,
      })
    );
  };

  React.useEffect(() => {
    setInitialValues({
      ...initialValues,
      carrier: formatKeyValue(unit, "carrier"),
      driver: formatKeyValue(unit, "driver"),
      device: formatKeyValue(unit, "device"),
      trailer: formatKeyValue(unit, "trailer"),
      vehicle: formatKeyValue(unit, "vehicle"),
      color: getColorByCode(unit.color),
    });
    form.setFieldsValue({
      ...initialValues,
      carrier: formatKeyValue(unit, "carrier"),
      driver: formatKeyValue(unit, "driver"),
      device: formatKeyValue(unit, "device"),
      trailer: formatKeyValue(unit, "trailer"),
      vehicle: formatKeyValue(unit, "vehicle"),
      color: getColorByCode(unit.color),
    });
    console.log("unit", unit);
  }, [unit]);

  const { checkPermission } = usePermissions();
  React.useEffect(() => {
    console.log("form", form.getFieldsValue());
  }, [form]);
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
            <Col span={24}>
              <Col span={24} style={{ marginBottom: 20 }}>
                {/* <GoogleMapTracker info={info} /> */}
                <OpenLayerMap />
              </Col>
              <Col span={24} style={{ marginBottom: 20 }}>
                {/* <GoogleMapTracker info={info} /> */}
                {/* <OpenLayerMap /> */}
              </Col>
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
                    disabled={
                      state === PAGE_STATUS.VIEW ||
                      !checkPermission(AllPermissionsType.DRIVER_EDIT)
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
                      !checkPermission(AllPermissionsType.DRIVER_EDIT)
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
