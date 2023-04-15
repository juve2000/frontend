import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Col, Row } from "antd";
import { InputFetchCarrierSelectV2 } from "../../../common/doubleinput/InputFetchCarrierSelect";
import { DriverField } from "../constant";
import { setCurrentDriverGroupCarrier } from "../../../../actions";

import {
  getValidation,
  VALIDATION_TYPE,
  validate,
} from "../../../../utils/validation";
const { REQUIRED } = VALIDATION_TYPE;

export const CarrierDynamicDriverGroupField = (props: any) => {
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
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );
  const { currentCarrier } = useSelector((state: any) => state.driverGroup);

  const [carrierOptions, setCarrierOptions] = useState([]);

  useEffect(() => {
    setCarrierOptions(
      carrierList.map((carrier: any) => {
        return {
          key: carrier.name,
          value: carrier.id,
        };
      })
    );
  }, [carrierList]);

  return (
    <>
      <InputFetchCarrierSelectV2
        {...props}
        rules={[getValidation(REQUIRED, "Status")]}
        name={DriverField.CARRIER}
        title={"Carrier*"}
        options={carrierOptions}
        isReadonlyCarrier={isReadonlyCarrier}
        span={span}
        width={"100%"}
        onChange={(id: any) => {
          const foundCarrier = carrierList.find(
            (carrier: any) => carrier.id === id
          );
          form.setFieldValue("status", null);

          dispatch(
            setCurrentDriverGroupCarrier({
              ...foundCarrier,
              defaultCarrier: false,
            })
          );
        }}
      />
    </>
  );
};
