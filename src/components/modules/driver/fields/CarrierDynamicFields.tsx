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

export const CarrierDynamicField = (props: any) => {
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
  const { loading, driver } = useSelector((state: any) => state.driver);
  const { loading: carrierLoading, carrierList } = useSelector(
    (state: any) => state.carrier
  );
  const { currentCarrier } = useSelector((state: any) => state.driver);

  // const [currentCarrier, setCurrentCarrier] = useState<any>({});
  const [carrierOptions, setCarrierOptions] = useState([]);

  const [statusOptions, setStatusOptions] = useState(carrierData.status);
  const [driverGroupOptions, setDriverGroupOptions] = useState([]);

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

    if (currentCarrier?.driver_groups) {
      setDriverGroupOptions(
        currentCarrier?.driver_groups.map((group: any) => {
          return {
            key: group.id,
            value: group.name,
          };
        })
      );
    }
    if (currentCarrier?.status === 1) {
      console.log("status", currentCarrier?.status === 1);

      setStatusOptions(carrierData.status);
    } else {
      setStatusOptions(inactiveStatus);
    }
  }, [currentCarrier]);

  const StatusProps = {
    name: DriverField.STATUS,
    title: "Driver Status*",
    rules: [getValidation(REQUIRED, "Status")],
    placeholder: "Driver Status",
    hasFeedback: true,
    span: 12,
    width: "95%",
  };

  const groupProps = {
    name: DriverField.DRIVER_GROUP,
    title: "Driver Group*",
    rules: [getValidation(REQUIRED, "Status")],
    placeholder: "Driver Group",
    hasFeedback: true,
    span: 12,
    width: "95%",
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
              options={carrierOptions}
              span={24}
              width={"100%"}
              onChange={(id: any) => {
                console.log("id", id);
                const foundCarrier = carrierList.find(
                  (carrier: any) => carrier.id === id
                );
                form.setFieldValue("status", null);

                dispatch(setCurrentCarrier(foundCarrier));
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
          <div className="input-item-wrapper">
            <div>
              {"Groups and Status"}
              {isRequired && " *"}
            </div>
          </div>
        </Col>
        <Col span={18}>
          <Row>
            <InputSelectV2 {...StatusProps} options={statusOptions} />
            <InputSelectV2 {...groupProps} options={driverGroupOptions} />
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
    </>
  );
};
