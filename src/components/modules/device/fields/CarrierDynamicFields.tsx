import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Col, Row } from "antd";
import { InputFetchCarrierSelectV2 } from "../../../common/doubleinput/InputFetchCarrierSelect";
import { InputSelectV2 } from "../../../common/doubleinput";
import { carrierData } from "../../driver/constant";
import { setCurrentDeviceCarrier } from "../../../../actions";

import { getValidation, VALIDATION_TYPE } from "../../../../utils/validation";
import { DeviceField } from "../constant";
const { REQUIRED } = VALIDATION_TYPE;

export const CarrierDynamicDeviceField = (props: any) => {
  const { isRequired = false, isReadonlyCarrier = false, form } = props;

  const dispatch = useDispatch();
  const { loading, vehicle } = useSelector((state: any) => state.device);
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );
  const { currentCarrier } = useSelector((state: any) => state.device);

  // const [currentCarrier, setCurrentCarrier] = useState<any>({});
  const [carrierOptions, setCarrierOptions] = useState([]);

  const [statusOptions, setStatusOptions] = useState(
    carrierData.status.filter((item) => item.value !== "Blocked").reverse()
  );

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
      setStatusOptions(
        carrierData.status.filter((item) => item.value !== "Blocked").reverse()
      );
    } else {
      setStatusOptions(inactiveStatus);
    }
  }, [currentCarrier]);

  const StatusProps = {
    name: "status",
    title: "Status*",
    rules: [getValidation(REQUIRED, "Status")],
    placeholder: "Status",
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
              name={DeviceField.CARRIER}
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
                  setCurrentDeviceCarrier({
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
