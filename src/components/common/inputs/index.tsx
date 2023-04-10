import { TextInput } from "./InputText";
import { InputSelect } from "./InputSelect";
import { InputSelectV2 } from "../doubleinput";
import { InputSelectUpload } from "./InputSelectUpload";
import { InputRadio } from "./InputRadio";
import { InputCheckboxGroup } from "./InputCheckbox";
import { InputAdress } from "./InputAdress";
import { InputType } from "../../../constants/inputs";
import { MultiInputV2 } from "../doubleinput/MultiInput";
import { InputTitle } from "../doubleinput/InputTitle";
import { InputAddDynamic } from "../doubleinput/InputAddDynamic";
import { InputPageTitle } from "../doubleinput/InputPageTitle";
import { InputImageUploadV2 } from "../doubleinput/InputImageUpload";
import { TextInputPassword } from "../doubleinput/InputPassword";
import { CarrierDynamicField } from "../../modules/driver/fields/CarrierDynamicFields";
import { InputDriverSelecetAdress } from "../../modules/driver/fields/DriverTerminalSelect";

export const CommonInput = (props: any) => {
  const { type } = props;
  switch (type) {
    case InputType.TEXT:
      return <TextInput {...props} />;
    case InputType.PASSWORD:
      return <TextInputPassword {...props} />;
    case InputType.IMAGE_UPLOAD:
      return <InputImageUploadV2 {...props} />;
    case InputType.TITLE:
      return <InputTitle {...props} />;
    case InputType.ADDRESS:
      return <InputAdress {...props} />;
    case InputType.SELECT:
      return <InputSelect {...props} />;
    case InputType.SELECT_V2:
      return <InputSelectV2 {...props} />;
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
    case InputType.DRIVER_DYNAMIC_CARRIER:
      return <CarrierDynamicField {...props} />;
    case InputType.DRIVER_SELECT_TERMINAL:
      return <InputDriverSelecetAdress {...props} />;
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
