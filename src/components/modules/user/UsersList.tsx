import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { useTableParams } from "../../../hooks/useTableParams";
import { getUsersListReq } from "../../../actions/user";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

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

export const UsersList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usersList = useSelector((state: any) => state.user.usersList);
  const { handleTableChange, onSuccess, tableParams } = useTableParams({});

  React.useEffect(() => {
    dispatch(getUsersListReq({}));
  }, []);

  React.useEffect(() => {
    setUsers(usersList);
  }, [usersList]);

  const columns: ColumnsType<any> = [
    {
      title: "Name",
      dataIndex: ["first_name"],
      sorter: true,
      render: (name, record, index) => {
        return (
          <div
            onClick={() => {
              navigate(`${location.pathname}/${record.id}`);
            }}
          >
            {record.first_name} {record.last_name}
          </div>
        );
      },
      width: "40%",
      ellipsis: true,
    },
    {
      title: "Email",
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
      title: "phone",
      dataIndex: "phone",
      width: "15%",
      render: (value) => `${value}`,
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "active",
      sorter: true,
      render: (value, record) =>
        !!record?.active ? (
          <CheckCircleFilled style={{ color: "green" }} />
        ) : (
          <CloseCircleFilled style={{ color: "red" }} />
        ),
      width: "5%",
      ellipsis: true,
    },
    {
      title: "Role",
      dataIndex: "role",
      sorter: true,
      width: "10%",
      ellipsis: true,

      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "10%",
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
        setUsers(results);
        setLoading(false);
        onSuccess();
      });
  };

  useEffect(() => {
    dispatch(getUsersListReq({}));
  }, [JSON.stringify(tableParams)]);

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={users}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
      //   sticky
      //   scroll={{ y: window.innerHeight - 235 }}
    />
  );
};
