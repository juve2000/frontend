import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Col, Row } from "antd";
// import { CommonInputV2 } from "./index";
import { InputFetchCarrierSelectV2 } from "../../../common/doubleinput/InputFetchCarrierSelect";
import { InputSelectV2 } from "../../../common/doubleinput";
import {
  setCurrentCarrier,
  getCarriersListReq,
  getDriverListReq,
  getVehicleListReq,
  getTrailerListReq,
  getEldListReq,
  getCarrierReq,
} from "../../../../actions";
import { InputTitle } from "../../../common/doubleinput/InputTitle";
import { isArray, values } from "lodash";
import {
  getValidation,
  VALIDATION_TYPE,
  validate,
} from "../../../../utils/validation";
const { ALPHABETICAL, REQUIRED } = VALIDATION_TYPE;

export const CarrierDynamicFieldV2 = (props: any) => {
  const {
    rules = [],
    name = "",
    icon,
    placeholder = "",
    label = "",
    disabled = false,
    width = "100%",
    title = "",
    isSecondField = false,
    span = 24,
    fields = [],
    isRequired = false,
    isReadonlyCarrier = false,
    form,
  } = props;

  const dispatch = useDispatch();
  const { loading, carrierList, carrier } = useSelector(
    (state: any) => state.carrier
  );
  const { driver } = useSelector((state: any) => state?.driverLog?.driverData);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(
      carrierList.map((driver: any) => {
        return {
          value: `${driver.name}`,
          key: driver.id,
        };
      })
    );
  }, [carrierList]);

  useEffect(() => {
    const carrierValue = form.getFieldValue("carrier");
    if (carrierValue && !carrier) {
      dispatch(
        getCarrierReq({
          carrierId: carrierValue,
          queryParams: {
            with: [
              "devices",
              "vehicles",
              "trailers",
              "driver_groups",
              "drivers",
            ],
          },
        })
      );
    }
  }, [form, carrier]);

  const CarrierProps = {
    name: "carrier",
    title: "Carrier *",
    rules: [getValidation(REQUIRED, "Status")],
    placeholder: "Carrier",
    hasFeedback: true,
    span,
    width,
    onFocus: () => {
      dispatch(
        getCarriersListReq({
          queryParams: {
            with: [
              "devices",
              "vehicles",
              "trailers",
              "driver_groups",
              "drivers",
            ],
          },
        })
      );
    },
    options: options,
    onSelect: (carrierId: any) => {
      dispatch(
        getCarrierReq({
          setCurrentCarrier: true,
          carrierId,
          queryParams: {
            with: [
              "devices",
              "vehicles",
              "trailers",
              "driver_groups",
              "drivers",
            ],
          },
          onSuccess: () => {
            form.setFieldsValue({
              ...form.getFieldsValue(),
              carrier: carrierId,
              driver: null,
              trailer: null,
              vehicle: null,
              device: null,
            });
          },
        })
      );
    },
  };

  return (
    <>
      <InputSelectV2 {...CarrierProps} options={options} />
    </>
  );
};
