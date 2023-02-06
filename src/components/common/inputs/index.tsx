import { TextInput } from "./InputText";
import { InputSelect } from "./InputSelect";
import { InputSelectUpload } from "./InputSelectUpload";
import { InputRadio } from "./InputRadio";
import { InputCheckboxGroup } from "./InputCheckbox";
import { InputAdress } from "./InputAdress";
import { InputType } from "../../../constants/inputs";

export const CommonInput = (props: any) => {
  const { type } = props;
  switch (type) {
    case InputType.TEXT:
      return <TextInput {...props} />;
    case InputType.ADDRESS:
      return <InputAdress {...props} />;
    case InputType.SELECT:
      return <InputSelect {...props} />;
    case InputType.RADIO:
      return <InputRadio {...props} />;
    case InputType.CHECKBOX:
      return <InputCheckboxGroup {...props} />;
    default:
      return null;
  }
};

export {
  TextInput,
  InputSelect,
  InputSelectUpload,
  InputRadio,
  InputCheckboxGroup,
  InputAdress,
};
