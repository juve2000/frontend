export const routes = {
  toUser: "/user",
  toUnits: "/units",
};

export const getParams = (data: any) => {
  const params: any = {};
  const sorts = [];
  for (let prop in data) {
    if (prop === "filters") {
      params.filters = data[prop];
    }
    if (prop === "pagination") {
      params.pagination = data[prop];
    }
    if (data?.field) {
      sorts.push({
        field: data.field,
        order: data.order,
      });
    }

    if (data[prop]?.field) {
      sorts.push({
        field: data[prop].field,
        order: data[prop].order,
      });
    }
  }
  return { ...params, sorts };
};
