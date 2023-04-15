import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Col, Row } from "antd";
// import { CommonInputV2 } from "./index";
import { InputFetchCarrierSelectV2 } from "../../../common/doubleinput/InputFetchCarrierSelect";
import { InputSelectV2 } from "../../../common/doubleinput";
import { DriverField, VehicleField } from "../constant";
import { carrierData } from "../constant";
import { setCurrentVehicleCarrier } from "../../../../actions";

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

export const CarrierDynamicTrailerField = (props: any) => {
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
  const { loading, trailer } = useSelector((state: any) => state.trailer);
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );
  const { currentCarrier } = useSelector((state: any) => state.trailer);

  // const [currentCarrier, setCurrentCarrier] = useState<any>({});
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
    name: VehicleField.STATUS,
    title: "Trailer Status*",
    rules: [getValidation(REQUIRED, "Status")],
    placeholder: "Trailer Status",
    hasFeedback: true,
    span: 12,
    width: "100%",
  };

  return (
    <>
      {" "}
      <Row>
        <Col
          span={6}
          className="input-item-wrapper"
          style={{ alignItems: "flex-start" }}
        >
          <div className="input-item-wrapper">
            <div>
              {"Carrier"}
              {isRequired && " *"}
            </div>
          </div>
        </Col>
        <Col span={18}>
          <Row>
            <InputFetchCarrierSelectV2
              {...props}
              rules={[getValidation(REQUIRED, "Status")]}
              name={DriverField.CARRIER}
              title={"Carrier*"}
              placeholder="Carrier"
              options={carrierOptions}
              span={12}
              width={"95%"}
              isReadonlyCarrier={isReadonlyCarrier}
              onChange={(id: any) => {
                const foundCarrier = carrierList.find(
                  (carrier: any) => carrier.id === id
                );
                form.setFieldValue("status", null);

                dispatch(
                  setCurrentVehicleCarrier({
                    ...foundCarrier,
                    defaultCarrier: false,
                  })
                );
              }}
            />
            <InputSelectV2 {...StatusProps} options={statusOptions} />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          span={6}
          className="input-item-wrapper"
          style={{ alignItems: "flex-start" }}
        ></Col>
        <Col span={18}>
          <Row></Row>
        </Col>
      </Row>
    </>
  );
};
