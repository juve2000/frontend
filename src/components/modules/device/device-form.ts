import { InputType } from "../../../constants/inputs";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../utils/validation";

import { NameDriverFields } from "./fields/NameVehicleFields";

import { DeviceNotice } from "./fields/TerminalCarrierFields";
import { DeviceCarrier } from "./fields/TerminalCarrierFields";

//MedicalCardDriverFields

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const deviceForm = (options: any) => {
  return [
    {
      type: InputType.PAGE_TITLE,
      fields: ["Device", "Profile"],
      route: "/client/device",
    },

    {
      type: InputType.TITLE,
      label: "Name & Details",
    },
    // // DRIVER NAME DETAILS
    { ...NameDriverFields },
    { ...DeviceCarrier },
    //LICENSE
    // // PREFERENCES
    { ...DeviceNotice },
  ];
};

// const { rules = [], name = "", icon, placeholder = "", label = "" } = props;
