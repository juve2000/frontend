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

export const DriverDynamicField = (props: any) => {
  const {
    rules = [],
    name = "driver",
    icon,
    placeholder = "",
    label = "",
    disabled = false,
    width = "100%",
    title = "Driver *",
    isSecondField = false,
    span = 24,
    fields = [],
    isRequired = false,
    isReadonlyCarrier = false,
    form,
    isLogDriver = false,
    isCoDriver = false,
  } = props;

  const dispatch = useDispatch();
  const { loading, drivers } = useSelector(
    (state: any) => state.carrier.carrier
  );

  const { drivers: logDrivers } = useSelector(
    (state: any) => state.driverLog.driverData?.carrier
  );

  const { driver } = useSelector((state: any) => state?.driverLog?.driverData);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (isLogDriver) {
      if (isCoDriver) {
        setOptions(
          (logDrivers || [])
            ?.filter((d: any) => d.id !== driver.id)
            .map((driver: any) => {
              return {
                value: `${driver.first_name} ${driver.last_name}`,
                key: driver.id,
              };
            })
        );
      } else {
        setOptions(
          (logDrivers || []).map((driver: any) => {
            return {
              value: `${driver.first_name} ${driver.last_name}`,
              key: driver.id,
            };
          })
        );
      }
    } else {
      setOptions(
        (drivers || []).map((driver: any) => {
          return {
            value: `${driver.first_name} ${driver.last_name}`,
            key: driver.id,
          };
        })
      );
    }
  }, [drivers, logDrivers]);

  const rulesItems = isCoDriver ? [] : [getValidation(REQUIRED, "Status")];
  const DriverProps = {
    name,
    title,
    rules: rulesItems,
    placeholder: "Driver",
    hasFeedback: true,
    span,
    width,
    // onFocus: () => {
    //   dispatch(getDriverListReq({}));
    // },
    options: options,
  };

  return <InputSelectV2 {...DriverProps} options={options} />;
};
