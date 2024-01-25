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
//MECHANIC CARRIER FIELD
import { InputMechanicSelecetAdress } from "../../modules/mechanic/fields/DriverTerminalSelect";
import { CarrierDynamicMechanicField } from "../../modules/mechanic/fields/CarrierDynamicFields";
// VEHICLE CARRIED FIELD
import { CarrierDynamicVehicleField } from "../../modules/vehicle/fields/CarrierDynamicFields";
// TRAILER CARRIED FIELD
import { CarrierDynamicTrailerField } from "../../modules/trailer/fields/CarrierDynamicFields";
// DEVICE CARRIED FIELD
import { CarrierDynamicDeviceField } from "../../modules/device/fields/CarrierDynamicFields";
//ROLE FIELD
import { InputRole } from "../doubleinput/InputRole";
import { InputSelectRole } from "../doubleinput/InputSelectRole";
import { TableRole } from "../doubleinput/TableRole";
import { Address } from "../doubleinput/Address";
import { UnitDynamicField } from "../../modules/units/fields/CarrierDynamicFields";

//DYNAMIC
import { DriverDynamicField } from "../../modules/units/fields/DriverDynamicField";
import { CarrierDynamicFieldV2 } from "../../modules/units/fields/CarrierDynamicField";
import { VehicleDynamicField } from "../../modules/units/fields/VehicleDynamicField";

import { DeviceDynamicField } from "../../modules/units/fields/DeviceDynamicField";
import { TrailerDynamicField } from "../../modules/units/fields/TrailerDynamicField";

import { InputRadioV2 } from "../doubleinput";
import { TimePickerLogField } from "../doubleinput/TimePickerLogField";

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
    //MECHANIC CARRIER FIELD
    case InputType.CARRIER_DYNAMIC_MECHANIC:
      return <CarrierDynamicMechanicField {...props} />;
    case InputType.MECHANIC_SELECT_TERMINAL:
      return <InputMechanicSelecetAdress {...props} />;
    //VEHICLE CARRIER FIELD
    case InputType.CARRIER_DYNAMIC_VEHICLE:
      return <CarrierDynamicVehicleField {...props} />;
    //TRAILER CARRIER FIELD
    case InputType.CARRIER_DYNAMIC_TRAILER:
      return <CarrierDynamicTrailerField {...props} />;
    case InputType.CARRIER_DYNAMIC_DEVICE:
      return <CarrierDynamicDeviceField {...props} />;
    //ROLE FIELD
    case InputType.INPUT_ROLE:
      return <InputRole {...props} />;
    case InputType.ROLE_SELECT:
      return <InputSelectRole {...props} />;
    case InputType.TABLE_ROLE:
      return <TableRole {...props} />;
    case InputType.ADDRESS_V3:
      return <Address {...props} />;
    case InputType.CARRIER_DRIVER_VEHICLE_TRAILER:
      return <UnitDynamicField {...props} />;
    case InputType.DRIVER_DYNAMIC:
      return <DriverDynamicField {...props} />;
    case InputType.CARRIER_DYNAMIC:
      return <CarrierDynamicFieldV2 {...props} />;
    case InputType.VEHICLE_DYNAMIC:
      return <VehicleDynamicField {...props} />;
    case InputType.TRAILER_DYNAMIC:
      return <TrailerDynamicField {...props} />;
    case InputType.DEVICE_DYNAMIC:
      return <DeviceDynamicField {...props} />;
    case InputType.TIME_PICKER_LOG:
      return <TimePickerLogField {...props} />;
    case InputType.RADIO_V2:
      return <InputRadioV2 {...props} />;
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
