import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { useTableParams } from "../../../hooks/useTableParams";
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
  const [carriers, setCarriers] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { handleTableChange, onSuccess, tableParams } = useTableParams({});

  React.useEffect(() => {
    console.log("location", location);
  }, [location]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: ["name"],
      sorter: true,
      render: (name, record, index) => {
        return (
          <div
            onClick={() => {
              navigate(`${location.pathname}/${record.login.uuid}`);
            }}
          >
            {name.first} {name.last}
          </div>
        );
      },
      width: "40%",
      ellipsis: true,
    },
    {
      title: "DOT Number",
      dataIndex: "email",
      sorter: true,
      ellipsis: true,
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      width: "15%",
    },
    {
      title: "Carrier ID",
      dataIndex: "login",
      width: "15%",
      render: (value) => `${value.uuid}`,
      ellipsis: true,
    },
    {
      title: "Carrier Time Zone",
      dataIndex: "timeZone",
      sorter: true,
      render: (value) => <div>{value}1</div>,
      width: "15%",
      ellipsis: true,
    },
    {
      title: "status",
      dataIndex: "status",
      sorter: true,
      width: "5%",
      ellipsis: true,

      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "5%",
      ellipsis: true,
    },
  ];

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setCarriers(results);
        setLoading(false);
        onSuccess();
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={carriers}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
      //   sticky
      //   scroll={{ y: window.innerHeight - 235 }}
    />
  );
};
