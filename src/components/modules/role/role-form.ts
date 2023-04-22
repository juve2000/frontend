import { InputType } from "../../../constants/inputs";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../utils/validation";

import { NameDriverFields } from "./fields/NameVehicleFields";
import { PermissionsFields } from "./fields/PermissionsField";
//MedicalCardDriverFields

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const roleForm = (options: any) => {
  return [
    {
      type: InputType.PAGE_TITLE,
      fields: ["Create a new Role"],
      route: "/client/role",
    },

    // {
    //   type: InputType.TITLE,
    //   label: "Device Basics",
    // },
    // // DRIVER NAME DETAILS
    { ...NameDriverFields },
    { ...PermissionsFields },
    //LICENSE
    // // PREFERENCES
  ];
};

// const { rules = [], name = "", icon, placeholder = "", label = "" } = props;
