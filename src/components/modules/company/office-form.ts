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
import { ContactsOfficeFields } from "./office-form/contact-office";
import { PreferencesOfficeFields } from "./office-form/preference-office";
import { MapSettingsOfficeFields } from "./office-form/map-settings-office";
import { AddressOfficeFields } from "./office-form/adress-office";

//MedicalCardDriverFields

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const officeForm = (options: any) => {
  return [
    // {
    //   type: InputType.PAGE_TITLE,
    //   fields: ["Company", "Profile"],
    //   route: "/client/company",
    // },

    // {
    //   type: InputType.TITLE,
    //   label: "Office",
    // },
    { ...AddressOfficeFields },
    { ...ContactsOfficeFields },
    // { ...PreferencesOfficeFields },
    { ...MapSettingsOfficeFields }, // // COMPANY NAME DETAILS
    // { ...NameCompanyFields },
    // { ...AddressCompanyFields },
    // { ...ContactCompanyFields },
    //LICENSE
    // // PREFERENCES
    { ...DeviceNotice },
  ];
};

// const { rules = [], name = "", icon, placeholder = "", label = "" } = props;
