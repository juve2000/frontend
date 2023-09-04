import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { roleForm } from "./role-form";
import { InputType } from "../../../constants/inputs";

import { createRoleReq } from "../../../actions/role";

import { jsonToFormData } from "../../../hooks/utils";

export const RoleCreatePage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.role);

  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    users: [],
    permissions: [],
  });

  const handleSubmit = async (values: any) => {
    const f = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    const data = jsonToFormData({
      ...values,
    });
    dispatch(
      createRoleReq({
        values: data,
        onSuccess: () => {
          form.setFieldsValue(initialValues);
        },
      })
    );
  };

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
              {roleForm({}).map((field: any, i: number) => {
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
                return <CommonInput key={i} {...field} form={form} isCreate={true}/>
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
    </>
  );
};
