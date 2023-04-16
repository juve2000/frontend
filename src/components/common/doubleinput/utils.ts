import { InputType } from "../../../constants/inputs";
import { TrailerField } from "../../modules/trailer/constant";
import { VehicleField } from "../../modules/vehicle/constant";

export const CARRIER_SELECT_DISABLED = [
  InputType.CARRIER_DYNAMIC_DRIVER_GROUP,
  InputType.CARRIER_DYNAMIC_MECHANIC,
  InputType.DRIVER_DYNAMIC_CARRIER,
  InputType.CARRIER_DYNAMIC_TRAILER,
  InputType.CARRIER_DYNAMIC_VEHICLE,
];

export const EDIT_DISABLAED_FIELDS = [
  VehicleField.IDENTIFICATOR,
  TrailerField.IDENTIFICATOR,
];
