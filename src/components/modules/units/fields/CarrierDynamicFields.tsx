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
} from "../../../../actions";
import { InputTitle } from "../../../common/doubleinput/InputTitle";
import { isArray } from "lodash";
import {
  getValidation,
  VALIDATION_TYPE,
  validate,
} from "../../../../utils/validation";
const { ALPHABETICAL, REQUIRED } = VALIDATION_TYPE;

export const UnitDynamicField = (props: any) => {
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
  const { loading, driver } = useSelector((state: any) => state.driver);
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );
  const { currentCarrier } = useSelector((state: any) => state.driver);

  // const [currentCarrier, setCurrentCarrier] = useState<any>({});
  const [carrierOptions, setCarrierOptions] = useState([]);

  const [statusOptions, setStatusOptions] = useState(1);
  const [driverGroupOptions, setDriverGroupOptions] = useState([]);

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
              {/* {isRequired && " *"} */}
            </div>
          </div>
        </Col>
        <Col span={18}>
          <Row>
            <InputFetchCarrierSelectV2
              {...props}
              rules={[getValidation(REQUIRED, "Status")]}
              name={"carrier"}
              title={"Carrier*"}
              options={carrierOptions}
              span={24}
              width={"100%"}
              isReadonlyCarrier={isReadonlyCarrier}
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
            {/* {fields.map((field: any, i: number) => {
              return (
                <CommonInputV2
                  {...field}
                  key={i}
                  form={form}
                  disabled={disabled}
                />
              );
            })} */}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          span={6}
          className="input-item-wrapper"
          style={{ alignItems: "flex-start" }}
        >
          {/* <div className="input-item-wrapper">
            <div>
              {"Groups and Status"}
              {isRequired && " *"}
            </div>
          </div> */}
        </Col>
        <Col span={18}>
          {/* <Row>
            <InputSelectV2 {...StatusProps} options={statusOptions} />
            <InputSelectV2 {...groupProps} options={driverGroupOptions} />
          </Row> */}
        </Col>
      </Row>
    </>
  );
};
