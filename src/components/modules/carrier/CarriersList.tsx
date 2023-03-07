import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { useTableParams } from "../../../hooks/useTableParams";
import { getCarriersListReq } from "../../../actions/carrier";
import { getParams } from "../../../routes/utils";
import qs from "qs";

interface DataType {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  login: {
    uuid: string;
  };
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

export const CarriersList: React.FC = () => {
  // const [carriers, setCarriers] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleTableChange, onSuccess, tableParams } = useTableParams({});
  const carriers = useSelector((state: any) => state.carrier.carrierList);

  React.useEffect(() => {
    dispatch(getCarriersListReq({}));
  }, []);

  const columns: ColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: {
        compare: (a: any, b: any) => a.name - b.name,
        multiple: 3,
      },
      render: (name, record, index) => {
        return (
          <div
            onClick={() => {
              navigate(`${location.pathname}/${record.id}`);
            }}
          >
            {record.name}
          </div>
        );
      },
      width: "20%",
      ellipsis: true,
    },
    {
      title: "USDOT",
      dataIndex: "dot",
      sorter: {
        compare: (a: any, b: any) => a.dot - b.dot,
        multiple: 2,
      },
      ellipsis: true,
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      width: "8%",
    },
    {
      title: "MC",
      dataIndex: "",
      width: "8%",
      render: (value) => `${value.id}`,
      ellipsis: true,
    },
    {
      title: "Carrier Time Zone",
      dataIndex: ["terminals", "0"],
      sorter: true,
      render: (value, record, index) => {
        return <div>{value?.number_street}</div>;
      },
      width: "25%",
      ellipsis: true,
    },
    {
      title: "status",
      dataIndex: "status",
      sorter: true,
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        return <div>{value}</div>;
      },
      filters: [
        { text: "Active", value: "ACTIVE" },
        { text: "Inactive", value: "INACTIVE" },
        { text: "Blocked", value: "BLOCKED" },
      ],
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "5%",
      ellipsis: true,
    },
  ];

  // const fetchData = () => {
  //   setLoading(true);
  //   fetch(
  //     `https://randomuser.me/api?${qs.stringify(
  //       getRandomuserParams(tableParams)
  //     )}`
  //   )
  //     .then((res) => res.json())
  //     .then(({ results }) => {
  //       setCarriers(results);
  //       setLoading(false);
  //       onSuccess();
  //     });
  // };

  useEffect(() => {
    const params = getParams(tableParams);
    dispatch(
      getCarriersListReq({
        queryParams: getParams(tableParams),
      })
    );
  }, [tableParams]);

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={carriers}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
      //   sticky
      //   scroll={{ y: window.innerHeight - 235 }}
    />
  );
};
