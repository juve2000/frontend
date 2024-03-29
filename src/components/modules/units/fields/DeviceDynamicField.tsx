import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputSelectV2 } from "../../../common/doubleinput";

import { getDeviceListReq } from "../../../../actions";

import { getValidation, VALIDATION_TYPE } from "../../../../utils/validation";
const { REQUIRED } = VALIDATION_TYPE;

export const DeviceDynamicField = (props: any) => {
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
    isLogDriver = false,
  } = props;

  const dispatch = useDispatch();
  const { loading, deviceList } = useSelector((state: any) => state.device);
  const { devices } = useSelector((state: any) => state.carrier.carrier);
  const { devices: logDevices } = useSelector(
    (state: any) => state.driverLog.driverData.carrier
  );

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (isLogDriver) {
      setOptions(
        (logDevices || []).map((trailer: any) => {
          return {
            value: `${trailer.serial_number}`,
            key: trailer.id,
          };
        })
      );
    } else {
      setOptions(
        (devices || []).map((trailer: any) => {
          return {
            value: `${trailer.serial_number}`,
            key: trailer.id,
          };
        })
      );
    }
  }, [devices, logDevices]);

  const VehicleProps = {
    name: "device",
    title: "Device *",
    // rules: [getValidation(REQUIRED, "Status")],
    placeholder: "Device",
    hasFeedback: true,
    span,
    width,
    // onFocus: () => {
    //   dispatch(getDeviceListReq({}));
    // },
    options: options,
  };

  return <InputSelectV2 {...VehicleProps} options={options} />;
};
