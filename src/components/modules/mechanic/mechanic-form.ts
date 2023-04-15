import { InputType } from "../../../constants/inputs";

import { NameDriverFields } from "./fields/NameDriverFields";
import { CarrierStatusMechanicFields } from "./fields/CarrierStatusMechanicFields";

import { TerminalCarrierFields } from "./fields/TerminalCarrierFields";

import {
  ContactsMechanicFields,
  NoticeMechanicFields,
} from "./fields/ContactsDriverField";

export const mechanicForm = (options: any) => {
  return [
    {
      type: InputType.PAGE_TITLE,
      fields: ["Mechanic (Support Personnel)", "Profile"],
      route: "/client/mechanic",
    },

    {
      type: InputType.TITLE,
      label: "Mechanic Details",
    },
    // MECHANIC NAME DETAILS
    { ...NameDriverFields },

    // CONTACTS
    { ...ContactsMechanicFields },

    //  STATUS CARRIER
    { ...CarrierStatusMechanicFields },
    { ...NoticeMechanicFields },

    // // CARRIER TERMINAL
    {
      type: InputType.TITLE,
      label: "Adress & Timezone",
    },
    { ...TerminalCarrierFields },
  ];
};

// const { rules = [], name = "", icon, placeholder = "", label = "" } = props;
