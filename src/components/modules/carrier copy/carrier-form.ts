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
} from "./constant";
import { GeneralCarrierFields } from "./fields/GeneralCarrierFields";
import { ContactsCarrierFields } from "./fields/ContactsCarrierFields";
import { LoginCarrierFields } from "./fields/LoginCarrierFields";
import { PreferencesCarrierFields } from "./fields/PreferencesCarrierFields";
import { TerminalCarrierFields } from "./fields/TerminalCarrierFields";
import {
  HosRulesCarrierFields,
  HosCarrierNotice,
} from "./fields/HosRulesCarrierFields";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const carrierForm = (options: any) => {
  return [
    {
      type: InputType.PAGE_TITLE,
      fields: ["Carriers", "Details"],
      route: "/client/carriers",
    },

    {
      type: InputType.TITLE,
      label: "General",
    },
    // // CARRIER NAME DETAILS
    { ...GeneralCarrierFields },
    // {
    //   type: InputType.TITLE,
    //   label: "Account & Security",
    // },
    // // CARRIER LOGIN
    // { ...LoginCarrierFields },
    {
      type: InputType.TITLE,
      label: "Contacts & Preferences",
    },
    // CONTACTS
    { ...ContactsCarrierFields },
    // // PREFERENCES
    { ...PreferencesCarrierFields },
    // //HOS RULES
    { ...HosRulesCarrierFields({}) },
    { ...HosCarrierNotice },
    // // CARRIER TERMINAL
    { ...TerminalCarrierFields({}) },
  ];
};

// const { rules = [], name = "", icon, placeholder = "", label = "" } = props;
