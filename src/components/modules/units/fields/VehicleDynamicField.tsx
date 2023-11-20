import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputSelectV2 } from "../../../common/doubleinput";

import { getVehicleListReq } from "../../../../actions";

import { getValidation, VALIDATION_TYPE } from "../../../../utils/validation";
const { REQUIRED } = VALIDATION_TYPE;

export const VehicleDynamicField = (props: any) => {
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
  const { loading, vehicles } = useSelector(
    (state: any) => state.carrier.carrier
  );

  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(
      (vehicles || []).map((vehicle: any) => {
        return {
          value: `${vehicle.identificator}`,
          key: vehicle.id,
        };
      })
    );
  }, [vehicles]);

  const VehicleProps = {
    name: "vehicle",
    title: "Vehicle *",
    rules: [getValidation(REQUIRED, "Status")],
    placeholder: "Vehicle",
    hasFeedback: true,
    span,
    width,
    // onFocus: () => {
    //   dispatch(getVehicleListReq({}));
    // },
    options: options,
  };

  return <InputSelectV2 {...VehicleProps} options={options} />;
};
