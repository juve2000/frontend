import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Table, Dropdown, Row, Col } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { useTableParams } from "../../../hooks/useTableParams";
import { getCarriersListReq } from "../../../actions/carrier";
import { getParams } from "../../../routes/utils";
import { carrierData } from "./constant";
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
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleTableChange, onSuccess, tableParams, rowSelection } =
    useTableParams({});
  const carriers = useSelector((state: any) => state.carrier.carrierList);
  const count = useSelector((state: any) => state.carrier.count);

  React.useEffect(() => {
    dispatch(
      getCarriersListReq({
        // queryParams: getParams(tableParams),
      })
    );
  }, []);

  const columns: ColumnsType<any> = [
    {
      title: "Name",
      key: "name",
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
      width: 450,
      ellipsis: true,
    },
    {
      title: "USDOT",
      dataIndex: "usdot",
      sorter: {
        compare: (a: any, b: any) => a.usdot - b.usdot,
        multiple: 2,
      },
      ellipsis: true,
      width: "8%",
    },
    {
      title: "MC",
      dataIndex: "mcnumber",
      width: "8%",
      // render: (value) => `${value.mcnumber}`,
      sorter: {
        compare: (a: any, b: any) => a.mcnumber - b.mcnumber,
        multiple: 3,
      },
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
        const status = carrierData.status.find((st) => st.key === value);
        return <div>{status?.value}</div>;
      },
      filters: carrierData.status.map((st: any) => {
        return {
          text: st.value,
          value: st.key,
        };
      }),
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "5%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <Dropdown
            placement="bottomLeft"
            trigger={["click"]}
            className="menu-option"
            menu={{
              items: [
                {
                  key: "1",
                  label: (
                    <span
                      onClick={() => {
                        navigate(
                          `${location.pathname}/${record.id}?state=EDIT`
                        );
                      }}
                    >
                      Edit
                    </span>
                  ),
                },
                {
                  key: "2",
                  label: (
                    <span
                      onClick={() => {
                        navigate(
                          `${location.pathname}/${record.id}?state=VIEW`
                        );
                      }}
                    >
                      View
                    </span>
                  ),
                },
              ],
            }}
          >
            <span className="orange icon-fi-rr-menu-dots"></span>
          </Dropdown>
        );
      },
    },
  ];

  useEffect(() => {
    const params = getParams(tableParams);
    dispatch(
      getCarriersListReq({
        queryParams: getParams(tableParams),
      })
    );
  }, [tableParams]);

  return (
    <>
      <Row>
        <Col span={12}></Col>
        <Col span={12}></Col>
      </Row>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={carriers.map((carrier: any, index: any) => {
          return {
            ...carrier,
          };
        })}
        pagination={{
          ...tableParams.pagination,
          position: ["bottomCenter"],
          total: count,
        }}
        loading={loading}
        onChange={handleTableChange}
        rowSelection={{ ...rowSelection, columnWidth: "40px" }}
        className="table-custom"
        //   sticky
        //   scroll={{ y: window.innerHeight - 235 }}
      />
    </>
  );
};
