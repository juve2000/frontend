import { InputType } from "../../../constants/inputs";
import {
  VALIDATION_RULES,
  validate,
  VALIDATION_TYPE,
  getValidation,
} from "../../../utils/validation";
import { AddressCompanyFields } from "./fields/AdressCompany";
import { ContactCompanyFields } from "./fields/ContactCompany";

import { NameCompanyFields } from "./fields/NameCompanyFields";

import { DeviceNotice } from "./fields/TerminalCarrierFields";
import { DeviceCarrier } from "./fields/TerminalCarrierFields";

//MedicalCardDriverFields

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const companyForm = (options: any) => {
  return [
    {
      type: InputType.PAGE_TITLE,
      fields: ["Company", "Profile"],
      route: "/client/company",
    },

    {
      type: InputType.TITLE,
      label: "Device Basics",
    },
    // // COMPANY NAME DETAILS
    { ...NameCompanyFields },
    { ...AddressCompanyFields },
    { ...ContactCompanyFields },
    //LICENSE
    // // PREFERENCES
    { ...DeviceNotice },
  ];
};

// const { rules = [], name = "", icon, placeholder = "", label = "" } = props;
