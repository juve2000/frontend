import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { getCarriersListReq } from "../../../actions/carrier";
import {
  updateTrailerReq,
  getTrailerReq,
  setCurrentCarrierTrailer,
} from "../../../actions/trailer";
import { CARRIER_SELECT_DISABLED } from "../../common/doubleinput/utils";

import { Row, Col, Form, Button, Input, Spin } from "antd";
import { CommonInput } from "../../common/inputs";
import { trailerForm } from "./trailer-form";
import { InputType } from "../../../constants/inputs";
import { PAGE_STATUS } from "./constant";
import { jsonToFormData } from "../../../hooks/utils";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";

export const TrailerPage = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const [search, setSearch] = useSearchParams();
  const [state, setStateValue] = React.useState(search.get("state"));
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    identificator: "",
    vin: "",
    make: null,
    model: "",
    fuel_type: null,
    carrier: null,
    status: null,
    notes: "",
    license_plate: null,
    license_issuing: "",
    license_expiration: "",
  });
  const { loading, trailer, currentCarrier } = useSelector(
    (state: any) => state.trailer
  );
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );

  const { user } = useSelector((state: any) => state.auth);
  const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (trailer?.carrier?.id) {
      const foundCarrier = carrierList.find(
        (carrier: any) => carrier.id === trailer.carrier.id
      );

      dispatch(
        setCurrentCarrierTrailer({ ...foundCarrier, defaultSavedCarrier: true })
      );
    }
  }, [carrierList, trailer]);

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
      ...(!currentCarrier.defaultSavedCarrier ? currentCarrier?.settings : {}),
    });
  }, [currentCarrier]);

  useEffect(() => {
    dispatch(
      getTrailerReq({
        trailerId: params.trailerId,
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
      updateTrailerReq({
        values: data,
        trailerId: params.trailerId,
      })
    );
  };

  React.useEffect(() => {
    setInitialValues({
      ...initialValues,
      ...trailer,
      carrier: trailer?.carrier?.id,
      license_plate: +trailer?.license_plate,
    });
    form.setFieldsValue({
      ...initialValues,
      ...trailer,
      carrier: trailer?.carrier?.id,
      license_plate: +trailer?.license_plate,
    });
  }, [trailer]);

  const { checkPermission } = usePermissions();

  return (
    <>
      {checkPermission(AllPermissionsType.TRAILER_SHOW) ? (
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
                {trailerForm({}).map((fieldCurrent: any, i: number) => {
                  const field = {
                    ...fieldCurrent,
                    disabled:
                      state === PAGE_STATUS.VIEW ||
                      !checkPermission(AllPermissionsType.TRAILER_EDIT),
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
                      state === PAGE_STATUS.VIEW ||
                      !checkPermission(AllPermissionsType.TRAILER_EDIT)
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
                      !checkPermission(AllPermissionsType.TRAILER_EDIT)
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
