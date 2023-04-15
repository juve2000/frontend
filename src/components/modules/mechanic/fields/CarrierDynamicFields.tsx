import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Col, Row } from "antd";
// import { CommonInputV2 } from "./index";
import { InputFetchCarrierSelectV2 } from "../../../common/doubleinput/InputFetchCarrierSelect";
import { InputSelectV2 } from "../../../common/doubleinput";
import { DriverField } from "../constant";
import { carrierData } from "../constant";
import { setCurrentCarrier } from "../../../../actions";
import { InputTitle } from "../../../common/doubleinput/InputTitle";
import { isArray } from "lodash";
import {
  getValidation,
  VALIDATION_TYPE,
  validate,
} from "../../../../utils/validation";
const {
  ALPHABETICAL,
  REQUIRED,
  MIN,
  MAX,
  NUMERIC,
  PASSWORD,
  EMAIL,
  NOT_EMPTY,
  NAME,
  PHONE,
} = VALIDATION_TYPE;

export const CarrierDynamicMechanicField = (props: any) => {
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

    form,
  } = props;

  const dispatch = useDispatch();
  const { loading, driver } = useSelector((state: any) => state.mechanic);
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );
  const { currentCarrier } = useSelector((state: any) => state.mechanic);

  const [carrierOptions, setCarrierOptions] = useState([]);

  const [statusOptions, setStatusOptions] = useState(carrierData.status);

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

  React.useEffect(() => {
    const inactiveStatus = carrierData.status.filter(
      (status: any) => status.key !== 1
    );

    if (currentCarrier?.status === 1) {
      setStatusOptions(carrierData.status);
    } else {
      setStatusOptions(inactiveStatus);
    }
  }, [currentCarrier]);

  const StatusProps = {
    name: DriverField.STATUS,
    title: "Status*",
    rules: [getValidation(REQUIRED, "Status")],
    placeholder: "Status",
    hasFeedback: true,
    span: 12,
    width: "100%",
  };

  return (
    <Row style={{ width: "100%" }}>
      <InputFetchCarrierSelectV2
        {...props}
        rules={[getValidation(REQUIRED, "Status")]}
        name={DriverField.CARRIER}
        title={"Carrier*"}
        options={carrierOptions}
        span={12}
        width={"95%"}
        onChange={(id: any) => {
          const foundCarrier = carrierList.find(
            (carrier: any) => carrier.id === id
          );
          form.setFieldValue("status", null);

          dispatch(
            setCurrentCarrier({ ...foundCarrier, defaultCarrier: false })
          );
        }}
      />
      <InputSelectV2 {...StatusProps} options={statusOptions} />
    </Row>
  );
};
