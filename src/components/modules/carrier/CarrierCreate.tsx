import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarrierReq, createCarrierReq } from "../../../actions/carrier";

import { Row, Col, Form, Button, Input, Spin, Popconfirm, Modal } from "antd";
import { CommonInput } from "../../common/inputs";
import { carrierForm } from "./carrier-form";
import { Graph } from "../../common/graph/Graph";
import { InputType } from "../../../constants/inputs";
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

export const CarrierCreatePage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, carrier } = useSelector((state: any) => state.carrier);
  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  // const [confirmLoading, setConfirmLoading] = useState(false);
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
      measurement_system: 2,
      dst: 1,
      first_day: 1,
      compliance_mode: 1,
      motion_treshold: 5,
      cargo_type: [1],
      restart: 2,
      rest_break: 1,
      short_haul: false,
      personal_conveyance: true,
      adverse_conditions: true,
      unlimited_documents: true,
      unlimited_trailers: true,
      yard_move: true,
      exempt_driver: false,
      exempt_driver_notice: false,
      period_starting_time: "",
      motion_trashhold: 5,
      hos_rules: 1,
      time_format: 1,
      date_format: 1,
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

  const handleSubmit = async () => {
    const values = form.getFieldsValue();
    console.log("values", values);
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
    setOpen(false);
  };

  // React.useEffect(() => {
  //   form.setFieldsValue(carrier);
  //   setInitialValues({ ...initialValues, ...carrier });
  // }, [carrier]);

  const { checkPermission } = usePermissions();

  return (
    <>
      {checkPermission(AllPermissionsType.CARRIER_CREATE) ? (
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
                onFinish={() => {
                  setOpen(true);
                }}
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
              <Modal
                title="Confirm Save Changes"
                open={open}
                onOk={handleSubmit}
                onCancel={() => setOpen(false)}
                okText="Save"
                cancelText="Cancel"
              >
                Are you sure you want to save the changes made to the Carrier
                Profile?
                <div>
                  Any modifications you have made will be saved. This action
                  cannot be undone.
                </div>
              </Modal>
            </Col>
          )}
        </Row>
      ) : (
        <NoPermission />
      )}
    </>
  );
};
