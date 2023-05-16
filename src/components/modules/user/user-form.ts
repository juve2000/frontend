import { InputType } from "../../../constants/inputs";

import { NameUserFields } from "./fields/NameUserFields";
import { LoginUserFields } from "./fields/LoginUserFields";
import { InfoUserFields } from "./fields/InfoUser";
import { OfficeUserFields } from "./fields/OfficeUserField";

export const userForm = [
  {
    type: InputType.PAGE_TITLE,
    fields: ["Users", "Profile"],
    route: "/client/user",
  },

  {
    type: InputType.TITLE,
    label: "User Basics",
  },
  // USER NAME DETAILS
  { ...NameUserFields },
  // USER INFO
  { ...InfoUserFields },
  //USER LOGIN DETAILS
  { ...LoginUserFields },
  { ...OfficeUserFields },
];

