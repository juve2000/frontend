import { InputType } from "../../../constants/inputs";
import { VALIDATION_TYPE } from "../../../utils/validation";

import { CreateLogFields } from "./fields/NameVehicleFields";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const carrierForm = (options: any) => {
  return [{ ...CreateLogFields }];
};
