import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarriersListReq } from "../../../actions/carrier";

import { Row, Col, Form, Button, Input, Spin, Modal } from "antd";
import { CommonInput } from "../../common/inputs";
import { logTabForm } from "./log-form-tab";
import { Graph } from "../../common/graph/Graph";
import { InputType } from "../../../constants/inputs";
import { getDocumentByType } from "./constant";

import {
  createVehicleReq,
  setCurrentVehicleCarrier,
} from "../../../actions/vehicle";
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

export const LogTab = () => {
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
  const logForms = useSelector((state: any) => state?.driverLog?.logForms);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [initialValues, setInitialValues] = useState<any>({});

  useEffect(() => {
    const firstForm = logForms[0];
    form.setFieldsValue({
      driver: `${firstForm?.driver?.first_name} ${firstForm?.driver?.last_name}`,
      carrier: `${firstForm?.carrier?.name}`,
      co_driver: `${firstForm?.codriver?.first_name} ${firstForm?.codriver?.last_name}`,
      fuel_type: null,
      status: null,
      notes: "",
      license_plate: null,
      license_issuing: "",
      license_expiration: "",
      trailer: "",
      vehicle: `${firstForm?.vehicle?.identificator}`,
      vin: `${firstForm?.vehicle?.vin}`,
      shipping_doc: `${firstForm?.shipping_doc}`,
      eld: `${firstForm?.device?.identificator}`,
    });
  }, [logForms]);

  const { checkPermission } = usePermissions();
  useEffect(() => {
    console.log("init", initialValues);
  }, [initialValues]);

  useEffect(() => {
    console.log("form", form.getFieldsValue());
  }, [form]);
  return (
    <>
      <Form
        form={form}
        name="test"
        onError={(err) => {
          // console.log("err", err);
        }}
        onFinish={() => null}
        initialValues={initialValues}
        onChange={() => {
          console.log("form values", form.getFieldsValue());
        }}
      >
        {logTabForm({}).map((field: any, i: number) => {
          if (field.type === InputType.ADD_DYNAMIC) {
            return (
              <CommonInput
                    currentIndex={currentIndex}
                    fields={fields}
                    key={i}
                    setCurrentIndex={setCurrentIndex}
                    {...field}
                    form={form}
                    disabled={true}
                    
                  />
              // prettier-ignore
            );
          }
          // prettier-ignore
          return <CommonInput key={i} {...field} form={form} disabled={true} />
        })}
        <Form.Item style={{ width: "100%", display: "flex" }}></Form.Item>
      </Form>
    </>
  );
};
