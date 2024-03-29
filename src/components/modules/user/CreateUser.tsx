import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createCarrierReq, getCarriersListReq } from "../../../actions/carrier";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { userForm } from "./user-form";
import { InputType } from "../../../constants/inputs";

import { getCreateUserReq } from "../../../actions/user";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";
import { jsonToFormData } from "../../../hooks/utils";

export const UserCreatePage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.user);

  const { checkPermission } = usePermissions();

  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [initialValues, setInitialValues] = useState({
    first_name: "",
    last_usdot: "",
    phone: "",
    role: null,
    email: "",
    personal_email: "",
    status: null,
    note: "",
    offices: [],
    password: "",
    username: "",
    company: user.company,
  });

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
      getCreateUserReq({
        values: data,
        onSuccess: () => {
          form.setFieldsValue(initialValues);
        },
      })
    );
  };

  return (
    <>
      {checkPermission(AllPermissionsType.USER_CREATE) ? (
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
                  // console.log("err", err);
                }}
                onFinish={handleSubmit}
                initialValues={initialValues}
                onChange={() => {
                  console.log("form values", form.getFieldsValue());
                }}
              >
                {userForm?.map((field: any, i: number) => {
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
            </Col>
          )}
        </Row>
      ) : (
        <NoPermission />
      )}
    </>
  );
};
