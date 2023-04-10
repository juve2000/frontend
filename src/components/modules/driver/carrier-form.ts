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
import { NameDriverFields } from "./fields/NameDriverFields";
import {
  GroupsStatusFields,
  CarrierFieldInput,
} from "./fields/GroupStatusDriverFields";
import { LoginCarrierFields } from "./fields/LoginCarrierFields";
import { PreferencesCarrierFields } from "./fields/PreferencesCarrierFields";
import { TerminalCarrierFields } from "./fields/TerminalCarrierFields";
import {
  HosRulesCarrierFields,
  HosCarrierNotice,
} from "./fields/HosRulesCarrierFields";
import { ContactsDriverFields } from "./fields/ContactsDriverField";
import { DriverLicense } from "./fields/DriverLicense";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const carrierForm = (options: any) => {
  return [
    {
      type: InputType.PAGE_TITLE,
      fields: ["Drivers", "Profile"],
      route: "/client/drivers",
    },

    {
      type: InputType.TITLE,
      label: "Driver Basics",
    },
    // // DRIVER NAME DETAILS
    { ...NameDriverFields },

    // {
    //   type: InputType.TITLE,
    //   label: "Contacts & Preferences",
    // },
    // CONTACTS
    // { ...GroupsStatusFields },
    { ...ContactsDriverFields },
    //LICENSE
    { ...DriverLicense },
    // // PREFERENCES
    { ...CarrierFieldInput },

    {
      type: InputType.TITLE,
      label: "Preferences",
    },
    { ...PreferencesCarrierFields },
    // //HOS RULES
    { ...HosRulesCarrierFields },
    { ...HosCarrierNotice },
    // // CARRIER TERMINAL
    {
      type: InputType.TITLE,
      label: "Adress & Timezone",
    },
    { ...TerminalCarrierFields },
  ];
};

// const { rules = [], name = "", icon, placeholder = "", label = "" } = props;
