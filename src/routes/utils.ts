export const routes = {
  toUser: "/user",
  toUnits: "/units",
};

export const getParams = (data: any) => {
  const params: any = {};
  const order: any = {};
  for (let prop in data) {
    if (prop === "filters") {
      params.filter = data[prop];
    }
    if (prop === "pagination") {
      params.page = data[prop].current;
      params.limit = data[prop].pageSize;
    }
    if (data?.field) {
      //   order.push({
      //     field: data.field,
      //     order: data.order,
      //   });
      order[data.field] = data.order;
    }

    if (data[prop]?.field) {
      order[data[prop].field] = data[prop].order;

      //   order.push({
      //     field: data[prop].field,
      //     order: data[prop].order,
      //   });
    }
  }
  return { ...params, order };
};
