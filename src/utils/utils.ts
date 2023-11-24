export const getColorByCode = (code: any) => {
  switch (code) {
    case 0:
      return "#229954";
    case 1:
      return "#F39C12";
    case 2:
      return "#2980B9";
    case 3:
      return "#F2D7D5";
    case 4:
      return "#E74C3C";
    case 5:
      return "#8E44AD";
    default:
      return "#2E4053";
  }
};

export const formatKeyValue = (item: any, key: any): any => {
  switch (key) {
    case "carrier":
      return { key: item[key]?.id, value: item[key]?.name };
    case "driver":
      return {
        key: item[key]?.id,
        value: `${item[key]?.first_name} ${item[key]?.last_name}`,
      };
    case "vehicle":
    case "trailer":
    case "device":
      return { key: item[key]?.id, value: item[key]?.identificator };
  }
};

export const formatValueToData = (item: any): any => {
  return item.value;
};
