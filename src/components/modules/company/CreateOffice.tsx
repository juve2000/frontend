import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { updateCompanyReq } from "../../../actions/company";
import { createOfficeReq, createOfficeRootReq } from "../../../actions/office";

import { CARRIER_SELECT_DISABLED } from "../../common/doubleinput/utils";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { officeForm } from "./office-form";
import { InputType } from "../../../constants/inputs";
import { PAGE_STATUS } from "./constant";

import { jsonToFormData } from "../../../hooks/utils";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";
import { InputTitleDynamic } from "../../common/doubleinput/InputTitleDynamic";
import { InputPageTitle } from "../../common/doubleinput/InputPageTitle";
import { InputSelectV2 } from "../../common/doubleinput";

export const OfficeCreatePage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const [search, setSearch] = useSearchParams();
  const [state, setStateValue] = React.useState(search.get("state"));
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    name: "",
    company_id: "",
    address: {
      number_street: "number_street",
      country: "country",
      state: "state",
      area: "area",
      address_index: "address_index",
    },
    // adress: "",
    email: "",
    phone: "",
    person: "",
    tz: "",
    config: {
      dst: "",
      first_day: "",
      date_format: "",
      distance_geofence: "",
      map_source: "",
      geodata_source: "",
      address_format: "",
      min_city_radius: "",
      max_distance: "",
      measurement: "",
    },
  });
  const { loading, office } = useSelector((state: any) => state.office);

  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { checkPermission } = usePermissions();

  const isSuperAdmin = checkPermission(AllPermissionsType.SUPER_ADMIN);

  React.useEffect(() => {
    setStateValue(search.get("state"));
  }, [search]);

  const handleSubmit = async (values: any) => {
    const f = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    const data = jsonToFormData({
      ...values,
    });
    if (isSuperAdmin) {
      dispatch(
        createOfficeReq({
          values: data,
        })
      );
    } else {
      dispatch(
        createOfficeReq({
          values: {
            ...data,
            company_id: undefined,
          },
        })
      );
    }
  };

  return (
    <>
      {checkPermission(AllPermissionsType.COMPANY_SHOW) ? (
        <Row style={{ height: "100%" }}>
          {/* <Graph /> */}
          <InputPageTitle fields={["Office"]} route="/client/office" devices />

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
                {officeForm({}).map((fieldCurrent: any, i: number) => {
                  const field = {
                    ...fieldCurrent,
                    disabled:
                      state === PAGE_STATUS.VIEW ||
                      !checkPermission(AllPermissionsType.COMPANY_EDIT),
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
                  if (
                    field.type === InputType.FETCH_COMPANY_SELECT &&
                    isSuperAdmin
                  ) {
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
                <Form.Item
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="orange"
                    style={{ width: "100px", marginRight: 12 }}
                    disabled={
                      state === PAGE_STATUS.VIEW ||
                      !checkPermission(AllPermissionsType.COMPANY_EDIT)
                    }
                  >
                    Save Office
                  </Button>
                  <Button
                    className="grey"
                    style={{ width: "85px", marginRight: 12 }}
                    onClick={() => {
                      form.setFieldsValue(initialValues);
                    }}
                    disabled={
                      state === PAGE_STATUS.VIEW ||
                      !checkPermission(AllPermissionsType.COMPANY_EDIT)
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
