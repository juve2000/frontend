import { InputType } from "../../../constants/inputs";

import {
  UnitColor,
  UnitDynamicFields,
  UnitNotice,
} from "./fields/GroupStatusDriverFields";

export const carrierForm = (options: any) => {
  return [
    {
      type: InputType.PAGE_TITLE,
      fields: ["Units", "Profile"],
      route: "/client/units",
    },

    {
      type: InputType.TITLE,
      label: "Unit Basics",
    },

    { ...UnitDynamicFields },
    { ...UnitColor },
    { ...UnitNotice },
  ];
};
