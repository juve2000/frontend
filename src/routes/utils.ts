export const routes = {
  toUser: "/user",
  toUnits: "/units",
};

const getOrderName = (type: any) => {
  switch (type) {
    case "ascend":
      return "asc";
    case "descend":
      return "desc";
    default:
      return "asc";
  }
};

export const getParams = (data: any) => {
  const params: any = {};
  const order: any = {};
  let search: any = "";
  for (let prop in data) {
    if (prop === "search") {
      search = data[prop];
    }
    if (prop === "filters") {
      params.filter = data[prop];
    }
    if (prop === "pagination") {
      params.page = data[prop].current;
      params.limit = data[prop].pageSize;
    }
    if (data?.field && data?.order) {
      order[data.field] = getOrderName(data.order);
    }

    if (data[prop]?.field) {
      order[data[prop].field] = getOrderName(data[prop].order);
    }
  }

  return { ...params, order, search };
};
