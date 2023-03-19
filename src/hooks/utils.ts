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
