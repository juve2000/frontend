import { VALIDATION_TYPE } from "../../../utils/validation";

import { CreateLogFields } from "./fields/NameVehicleFields";

const { ALPHABETICAL, REQUIRED, MIN, MAX, NUMERIC, PASSWORD, EMAIL } =
  VALIDATION_TYPE;

export const createLogForm = (options: any) => {
  return [{ ...CreateLogFields }];
};
