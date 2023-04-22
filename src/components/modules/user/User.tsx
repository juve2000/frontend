import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { updateUserReq, getUserReq } from "../../../actions/user";
import { CARRIER_SELECT_DISABLED } from "../../common/doubleinput/utils";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { userForm } from "./user-form";
import { InputType } from "../../../constants/inputs";
import { PAGE_STATUS } from "../carrier/constant";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";
import { jsonToFormData } from "../../../hooks/utils";
import { getRoleListReq } from "../../../actions";

export const UserPage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const location = useLocation();
  const [search, setSearch] = useSearchParams();
  const [state, setStateValue] = React.useState(search.get("state"));
  const dispatch = useDispatch();
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
  });
  const { loading, user } = useSelector((state: any) => state.user);

  // const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    setStateValue(search.get("state"));
  }, [search]);

  useEffect(() => {
    dispatch(
      getUserReq({
        userId: params.userId,
        queryParams: {
          with: ["terminal", "group", "carrier", "documents"],
        },
      })
    );
    // dispatch(getRoleListReq({}));
  }, []);

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
      updateUserReq({
        values: data,
        userId: params.userId,
      })
    );
  };

  React.useEffect(() => {
    setInitialValues({
      ...initialValues,
      ...user,
      ...{
        offices: user?.offices
          ? [...user?.offices]?.map((office) => office.id)
          : [],
      },
    });
    form.setFieldsValue({
      ...initialValues,
      ...user,
      ...{
        offices: user?.offices
          ? [...user?.offices]?.map((office) => office.id)
          : [],
      },
    });
  }, [user]);

  const { checkPermission } = usePermissions();

  return (
    <>
      {checkPermission(AllPermissionsType.USER_SHOW) ? (
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
                {userForm({}).map((fieldCurrent: any, i: number) => {
                  const field = {
                    ...fieldCurrent,
                    disabled:
                      state === PAGE_STATUS.VIEW ||
                      !checkPermission(AllPermissionsType.USER_EDIT),
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
                      !checkPermission(AllPermissionsType.USER_EDIT)
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
                      !checkPermission(AllPermissionsType.USER_EDIT)
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
