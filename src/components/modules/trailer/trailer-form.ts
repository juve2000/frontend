import { InputType } from "../../../constants/inputs";

import { NameDriverFields } from "./fields/NameVehicleFields";
import { CarrierFieldInput } from "./fields/TrailerStatusFields";
import { VehicleNotice } from "./fields/TerminalCarrierFields";

import { DriverLicense } from "./fields/TrailerLicense";
import { TrailerTypeField } from "./fields/TrailerType";

export const trailerForm = (options: any) => {
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
    // // PREFERENCES
    { ...CarrierFieldInput },
    { ...VehicleNotice },
    { ...TrailerTypeField },
  ];
};
