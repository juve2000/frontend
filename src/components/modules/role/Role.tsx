import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { updateRoleReq, getRoleReq } from "../../../actions/role";
import { CARRIER_SELECT_DISABLED } from "../../common/doubleinput/utils";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { roleForm } from "./role-form";
import { InputType } from "../../../constants/inputs";
import { AllPermissionsType, PAGE_STATUS } from "./constant";

import { jsonToFormData } from "../../../hooks/utils";
import { usePermissions } from "../../../hooks/usePermissions";
import { NoPermission } from "../../common/NoPermission";

export const RolePage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const [search, setSearch] = useSearchParams();
  const [state, setStateValue] = React.useState(search.get("state"));
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    users: [],
    permissions: [],
  });
  const { loading, role } = useSelector((state: any) => state.role);

  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    setStateValue(search.get("state"));
  }, [search]);

  useEffect(() => {
    dispatch(
      getRoleReq({
        roleId: params.roleId,
        queryParams: {
          with: ["terminal", "group", "carrier", "documents"],
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
    });

    dispatch(
      updateRoleReq({
        values: data,
        roleId: params.roleId,
      })
    );
  };

  React.useEffect(() => {
    setInitialValues({
      ...initialValues,
      ...role,
    });
    form.setFieldsValue({
      ...initialValues,
      ...role,
    });
  }, [role]);

  const { checkPermission } = usePermissions();

  return (
    <>
      {checkPermission(AllPermissionsType.ROLE_SHOW) ? (
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
                onFinish={handleSubmit}
                initialValues={initialValues}
                onChange={(values) => {
                  console.log("form values", form.getFieldsValue());
                }}
              >
                {roleForm({}).map((fieldCurrent: any, i: number) => {
                  const field = {
                    ...fieldCurrent,
                    disabled:
                      state === PAGE_STATUS.VIEW ||
                      !checkPermission(AllPermissionsType.ROLE_EDIT),
                    isReadonlyCarrier: true,
                    isIdentificatorDisabled: true,
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
                      !checkPermission(AllPermissionsType.ROLE_EDIT) ||
                      state === PAGE_STATUS.VIEW
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
                      !checkPermission(AllPermissionsType.ROLE_EDIT) ||
                      state === PAGE_STATUS.VIEW
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
