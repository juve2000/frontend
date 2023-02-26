import { TextInput } from "./InputText";
import { InputSelect } from "./InputSelect";
import { InputSelectUpload } from "./InputSelectUpload";
import { InputRadio } from "./InputRadio";
import { InputCheckboxGroup } from "./InputCheckbox";
import { InputAdress } from "./InputAdress";
import { InputType } from "../../../constants/inputs";
import { MultiInputV2 } from "../doubleinput/MultiInput";
import { InputTitle } from "../doubleinput/InputTitle";
import { InputAddDynamic } from "../doubleinput/InputAddDynamic";
import { InputPageTitle } from "../doubleinput/InputPageTitle";

export const CommonInput = (props: any) => {
  const { type } = props;
  switch (type) {
    case InputType.TEXT:
      return <TextInput {...props} />;
    case InputType.TITLE:
      return <InputTitle {...props} />;
    case InputType.ADDRESS:
      return <InputAdress {...props} />;
    case InputType.SELECT:
      return <InputSelect {...props} />;
    case InputType.RADIO:
      return <InputRadio {...props} />;
    case InputType.CHECKBOX:
      return <InputCheckboxGroup {...props} />;
    case InputType.MULTI:
      return <MultiInputV2 {...props} />;
    case InputType.ADD_DYNAMIC:
      return <InputAddDynamic {...props} />;
    case InputType.PAGE_TITLE:
      return <InputPageTitle {...props} />;
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
