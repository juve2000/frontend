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
      fields: ["Trailers", "Profile"],
      route: "/client/trailer",
    },

    {
      type: InputType.TITLE,
      label: "Trailer Basics",
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
