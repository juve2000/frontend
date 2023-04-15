import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { getCarriersListReq } from "../../../actions/carrier";
import {
  updateDriverGroupReq,
  getDriverGroupReq,
  setCurrentDriverGroupCarrier,
} from "../../../actions/driver_group";

import { Row, Col, Form, Button, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { driverGroupForm } from "./driver-group-form";
import { InputType } from "../../../constants/inputs";
import { PAGE_STATUS } from "./constant";

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

export const DriverGroupPage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const location = useLocation();
  const [search, setSearch] = useSearchParams();
  const [state, setStateValue] = React.useState(search.get("state"));
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("params", params);
  }, [params]);
  const [initialValues, setInitialValues] = useState({
    name: "",
    carrier: null,
  });
  const { loading, driverGroup, currentCarrier } = useSelector(
    (state: any) => state.driverGroup
  );
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );

  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (driverGroup?.carrier?.id) {
      const foundCarrier = carrierList.find(
        (carrier: any) => carrier.id === driverGroup.carrier.id
      );

      dispatch(
        setCurrentDriverGroupCarrier({
          ...foundCarrier,
          defaultSavedCarrier: true,
        })
      );
    }
  }, [carrierList, driverGroup]);

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
      // ...(!currentCarrier.defaultSavedCarrier ? currentCarrier?.settings : {}),
    });
  }, [currentCarrier]);

  useEffect(() => {
    dispatch(
      getDriverGroupReq({
        driverGroupId: params.driverGroupId,
        // queryParams: {
        //   with: ["terminal", "group", "carrier", "documents"],
        // },
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
    });

    dispatch(
      updateDriverGroupReq({
        values: data,
        driverGroupId: params.driverGroupId,
      })
    );
  };

  React.useEffect(() => {
    setInitialValues({
      ...initialValues,
      ...driverGroup,
      carrier: driverGroup?.carrier?.id,
    });
    form.setFieldsValue({
      ...initialValues,
      ...driverGroup,
      carrier: driverGroup?.carrier?.id,
    });
  }, [driverGroup]);

  return (
    <>
      <Row style={{ paddingLeft: 23, paddingRight: 25, height: "100%" }}>
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
              {driverGroupForm({}).map((fieldCurrent: any, i: number) => {
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
    </>
  );
};
