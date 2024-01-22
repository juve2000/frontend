import { InputType } from "../../../constants/inputs";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../utils/validation";
import {
  carrierStatusOptions,
  CarrierField,
  carrierCheckboxGroup,
  DriverField,
} from "./constant";
import { NameDriverFields } from "./fields/NameVehicleFields";
import {
  GroupsStatusFields,
  CarrierFieldInput,
} from "./fields/VehicleStatusFields";
import {
  TerminalCarrierFields,
  VehicleNotice,
} from "./fields/TerminalCarrierFields";

import { DriverLicense } from "./fields/VehicleLicense";
//MedicalCardDriverFields

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const carrierForm = (options: any) => {
  return [
    {
      type: InputType.PAGE_TITLE,
      fields: ["Vehicles", "Profile"],
      route: "/client/vehicle",
    },

    {
      type: InputType.TITLE,
      label: "Name & Details",
    },
    // // DRIVER NAME DETAILS
    { ...NameDriverFields },

    //LICENSE
    { ...DriverLicense },
    //MEDICAL CARD
    // // PREFERENCES
    { ...CarrierFieldInput },
    { ...VehicleNotice },

    // // CARRIER TERMINAL
    // {
    //   type: InputType.TITLE,
    //   label: "Adress & Timezone",
    // },
    // { ...TerminalCarrierFields },
  ];
};

// const { rules = [], name = "", icon, placeholder = "", label = "" } = props;
