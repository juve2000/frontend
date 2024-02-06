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
import { NameDriverFields } from "./fields/NameVehicleFields";
import {
  GroupsStatusFields,
  CarrierFieldInput,
} from "./fields/VehicleStatusFields";
import {
  TerminalCarrierFields,
  VehicleNotice,
} from "./fields/TerminalCarrierFields";

import { DriverLicense } from "./fields/VehicleLicense";
//MedicalCardDriverFields
import { LogFields } from "./fields/LogTab";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const logTabForm = (options: any) => {
  return [{ ...LogFields }];
};

// const { rules = [], name = "", icon, placeholder = "", label = "" } = props;
