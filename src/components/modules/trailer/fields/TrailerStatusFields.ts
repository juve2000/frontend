import { InputType } from "../../../../constants/inputs";
import { VALIDATION_TYPE, getValidation } from "../../../../utils/validation";

import { carrierData, CarrierField } from "../../driver/constant";

const { REQUIRED } = VALIDATION_TYPE;

export const CarrierFieldInput = {
  type: InputType.CARRIER_DYNAMIC_VEHICLE,
  // label: "Carrier",
  isRequired: true,
};

export const GroupsStatusFields = {
  type: InputType.MULTI,
  label: "Group and Status",
  isRequired: true,
  fields: [
    {
      type: InputType.SELECT_V2,
      name: CarrierField.STATUS,
      title: "Status*",
      rules: [getValidation(REQUIRED, "Status")],
      placeholder: "Carrier Status",
      options: carrierData.status,
      hasFeedback: true,
      span: 12,
      width: "95%",
    },
  ],
};
