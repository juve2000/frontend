import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputSelectV2 } from "../../../common/doubleinput";

import { getTrailerListReq } from "../../../../actions";

import { getValidation, VALIDATION_TYPE } from "../../../../utils/validation";
const { REQUIRED } = VALIDATION_TYPE;

export const TrailerDynamicField = (props: any) => {
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
  const { loading, trailers } = useSelector(
    (state: any) => state.carrier.carrier
  );

  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(
      (trailers || []).map((trailer: any) => {
        return {
          value: `${trailer.name}`,
          key: trailer.id,
        };
      })
    );
  }, [trailers]);

  const VehicleProps = {
    name: "trailer",
    title: "Trailer *",
    // rules: [getValidation(REQUIRED, "Status")],
    placeholder: "Trailer",
    hasFeedback: true,
    span,
    width,
    // onFocus: () => {
    //   dispatch(getTrailerListReq({}));
    // },
    options: options,
  };

  return <InputSelectV2 {...VehicleProps} options={options} />;
};
