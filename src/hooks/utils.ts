type sortType = "ascend" | "descend" | null;

export const getOrderFromTableParams = (
  prop: string,
  params: any
): sortType => {
  if (params?.field === prop && params?.order) {
    return params?.order as sortType;
  }
  if (Object.values(params).find((item: any) => item?.columnKey === prop)) {
    const multiOrder: any = Object.values(params).find(
      (item: any) => item.columnKey === prop
    );

    const ord = multiOrder?.order as sortType;
    return ord;
  }

  return null;
};

export function generateArrayOfYears() {
  var max = new Date().getFullYear();
  var min = max - 35;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
}

export function buildFormData(formData: any, data: any, parentKey?: any) {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;

    formData.append(parentKey, value);
  }
}

export function jsonToFormData(data: any) {
  const formData = new FormData();

  buildFormData(formData, data);

  return formData;
}
