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

export const EditDriverLogModal = (props: any) => {
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
  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [initialValues, setInitialValues] = useState({
    start_time: Date.now(),
    end_time: "",
    id: props?.log?.id,
    vehicle: props?.log?.unit_daily?.vehicle?.id,
    device: props?.log?.unit_daily?.device?.id,
    codriver: props?.log?.codriver,
    trailer: props?.log?.trailer,
    status: null,
    note: props?.log?.note,
    timestamp: props?.log?.timestamp * 1000,
    shipping_doc: props?.log?.shipping_doc,
    record_status: 1,
    total_miles: props?.log?.total_miles,
    total_hours: props?.log?.total_hours,
    latitude: props?.log?.latitude,
    longitude: props?.log?.longitude,
    event_type: "",
    event_code: "",
    event: `${props?.log?.event_type}${props?.log?.event_code}`,
    record_origin: `${props?.log?.record_origin}`,
    location: `${props?.log?.location}`,
    identificator: props?.log?.id,

    // ...props?.log,

    // annotations: [
    //   {
    //     key: 1,
    //     value: "Pre-Trip Inspection",
    //     text: "",
    //     // file: false,
    //   },
    // ],
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
      codriver: values?.codriver || null,
      shipping_doc: values?.shipping_doc,
      trailer: values?.trailer,
      timestamp: values?.timestamp / 1000,
      location: values?.location,
      note: values?.note || null,
      id: values?.id || values?.identificator,
      //   identificator: values?.id || values?.identificator,

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
      <div onClick={showModal}>{props?.children}</div>

      <Modal
        title="Edit Event"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
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
          {createLogForm({}).map((field: any, i: number) => {
            console.log("form", form.getFieldsValue());
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
