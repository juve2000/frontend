import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarriersListReq } from "../../../actions/carrier";

import { Row, Col, Form, Button, Input, Spin, Modal } from "antd";
import { CommonInput } from "../../common/inputs";
import { createLogForm } from "./log-form";
import { Graph } from "../../common/graph/Graph";
import { InputType } from "../../../constants/inputs";
import { getDocumentByType } from "./constant";

import {
  createVehicleReq,
  setCurrentVehicleCarrier,
} from "../../../actions/vehicle";
import {
  createDriverLogReq,
  getDriverLogListReq,
} from "../../../actions/driver_log";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";
import { getAnnotations } from "./log-utils";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
//getFormatDateFromTimeStamp
import { getFormatDateFromTimeStamp } from "../../modules/driver_log/log-utils";

dayjs.extend(buddhistEra);

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

export const CreateDriverLogModal = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { loading, vehicle, currentCarrier } = useSelector(
    (state: any) => state.vehicle
  );
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );
  const driverLogDate = useSelector(
    (state: any) => state?.driverLog?.driverLogDate
  );

  const driverLogForm = useSelector((state: any) => state?.driverLog?.logForms);
  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentConfig, setCurrentCongif] = useState<any>({});
  const dateNow = Date.now();

  const date = new Date(driverLogDate).getTime();

  const [initialValues, setInitialValues] = useState({
    start_time: Date.now(),
    end_time: "",
    identificator: "",
    vehicle: currentConfig?.vehicle?.id || "",
    device: currentConfig?.device?.identificator || "",
    codriver: "",
    trailer: "",
    event_type: "",
    event_code: "",

    status: null,
    notes: "",

    timestamp: date,
    shipping_doc: "",
    record_origin: "",
    record_status: 1,
    total_miles: "",
    total_hours: "",
    latitude: "",
    longitude: "",
  });

  // React.useEffect(() => {
  //   const relevantTimeStamp = driverLogForm?.find(
  //     (item: any) => item?.timestamp * 1000 < dateNow
  //   );
  //   console.log("relevantTimeStamp", relevantTimeStamp);
  //   setCurrentCongif(relevantTimeStamp);
  //   setInitialValues({
  //     ...initialValues,
  //     start_time: Date.now(),
  //     end_time: "",
  //     identificator: "",
  //     vehicle: relevantTimeStamp?.vehicle?.id || "",
  //     device: relevantTimeStamp?.device?.identificator || "",
  //     codriver: "",
  //     trailer: "",
  //     event_type: "",
  //     event_code: "",

  //     status: null,
  //     notes: "",

  //     // timestamp: date,
  //     shipping_doc: "",
  //     record_origin: "",
  //     record_status: 1,
  //     total_miles: "",
  //     total_hours: "",
  //     latitude: "",
  //     longitude: "",
  //     // annotations: [
  //     //   {
  //     //     key: 1,
  //     //     value: "Pre-Trip Inspection",
  //     //     text: "",
  //     //     // file: false,
  //     //   },
  //     // ],
  //   });
  // }, [driverLogForm, driverLogDate, initialValues]);

  React.useEffect(() => {
    form.setFieldValue("timestamp", dayjs(driverLogDate));
  }, [driverLogDate]);

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
      // ...values,

      driver: params.driverid,
      event_type: +values?.event[0],
      event_code: +values?.event[1],
      record_origin: values?.record_origin,
      record_status: 1,
      vehicle: values?.vehicle,
      total_miles: values?.total_miles,
      total_hours: values?.total_hours,
      latitude: values?.latitude,
      longitude: values?.longitude,
      codriver: values?.codriver,
      shipping_doc: values?.shipping_doc,
      trailer: values?.trailer,
      timestamp: values?.timestamp / 1000,
      location: values?.location,
      note: values?.note,
      // annotations:  getAnnotations(values?.event_type, values?.annotations),
      // annotations: [
      //   {
      //     key: 1,
      //     value: "Pre-Trip Inspection",
      //     text: false,
      //     // file: false,
      //   },
      // ],
    });
    dispatch(
      createDriverLogReq({
        values: data,
        onSuccess: () => {
          form.setFieldsValue(initialValues);

          dispatch(
            getDriverLogListReq({
              queryParams: {
                with: [
                  "driver_groups",
                  "vehicles",
                  "drivers",
                  "vehicle",
                  "driver",
                  "codriver",
                ],
              },
              driverid: params?.driverid,
              date: driverLogDate,
            })
          );
          handleCancel();
        },
      })
    );
  };

  const { checkPermission } = usePermissions();

  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center" }}
        onClick={showModal}
      >
        <div
          className="orange ubuntu"
          style={{
            fontWeight: 500,
            fontSize: 12,
            marginLeft: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            borderRadius: 10,
            background: "#f5f9ff",
            padding: 10,
          }}
        >
          <span
            className="icon-fi-rr-plus ubuntu orange"
            style={{ marginRight: 5 }}
          />
          Create Log
        </div>
      </div>

      <Modal
        title="Create Event"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose
      >
        <Form
          form={form}
          name="test3"
          onError={(err) => {
            // console.log("err", err);
          }}
          onFinish={handleSubmit}
          initialValues={initialValues}
          onChange={() => {
            console.log("form values", form.getFieldsValue());
          }}
        >
          {createLogForm({}).map((field: any, i: number) => {
            console.log("form", form.getFieldsValue());
            console.log("initialValues", initialValues);

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
              Save
            </Button>
            <Button
              className="grey"
              style={{ width: "85px", marginRight: 12 }}
              onClick={() => {
                // form.setFieldsValue(initialValues);
                handleCancel();
              }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
