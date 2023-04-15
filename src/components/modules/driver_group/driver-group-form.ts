import { InputType } from "../../../constants/inputs";

import { NameDriverFields } from "./fields/NameDriverFields";

export const driverGroupForm = (options: any) => {
  return [
    {
      type: InputType.PAGE_TITLE,
      fields: ["Driver Group", "Profile"],
      route: "/client/driver_groups",
    },

    {
      type: InputType.TITLE,
      label: "Driver Group Basics",
    },
    // // DRIVER NAME DETAILS
    { ...NameDriverFields },
  ];
};
