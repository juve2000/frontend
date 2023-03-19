import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Table, Dropdown, Row, Col } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTableParams } from "../../../hooks/useTableParams";
import { getCarriersListReq } from "../../../actions/carrier";
import { getParams } from "../../../routes/utils";
import { carrierData } from "./constant";
import { InputSearch } from "../../common/doubleinput/InputSearch";
import { getOrderFromTableParams } from "../../../hooks/utils";
import { InputPageTitle } from "../../common/doubleinput/InputPageTitle";

export const CarriersList: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleTableChange,
    onSuccess,
    tableParams,
    rowSelection,
    clearOrderFilters,
    setSearchParam,
    hasFiltersOrOrder,
  } = useTableParams({});
  const carriers = useSelector((state: any) => state.carrier.carrierList);
  const count = useSelector((state: any) => state.carrier.count);
  const loading = useSelector((state: any) => state.carrier.loading);

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
      sortOrder: getOrderFromTableParams("name", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.name - b.name,
        multiple: 5,
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
      width: 300,
      ellipsis: true,
    },
    {
      title: "USDOT",
      dataIndex: "usdot",
      key: "usdot",
      sortOrder: getOrderFromTableParams("usdot", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.usdot - b.usdot,
        multiple: 5,
      },
      ellipsis: true,
      width: "8%",
    },
    {
      title: "MC",
      dataIndex: "mcnumber",
      key: "mcnumber",
      width: "8%",
      // render: (value) => `${value.mcnumber}`,
      sortOrder: getOrderFromTableParams("mcnumber", tableParams),

      sorter: {
        compare: (a: any, b: any) => a.mcnumber - b.mcnumber,
        multiple: 5,
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
      sortOrder: getOrderFromTableParams("status", tableParams),
      key: "status",
      sorter: {
        compare: (a: any, b: any) => a.mcnumber - b.mcnumber,
        multiple: 5,
      },
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
      filteredValue: tableParams?.filters?.status || null,
    },
    {
      title: "Account",
      dataIndex: "account",
      sortOrder: getOrderFromTableParams("account", tableParams),
      key: "account",
      sorter: {
        compare: (a: any, b: any) => a.account - b.account,
        multiple: 5,
      },
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
      filteredValue: tableParams?.filters?.account || null,
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
        <Col span={12}>
          <InputPageTitle fields={["Carriers"]} route="/client" carriers />
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InputSearch
            onChange={setSearchParam}
            onClear={clearOrderFilters}
            hasFilters={hasFiltersOrOrder}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="icon-fi-rr-plus ubuntu orange" />
            <div
              className="orange ubuntu"
              style={{
                fontWeight: 500,
                fontSize: 12,
                marginLeft: 8,
                cursor: "pointer",
              }}
              onClick={() => {
                navigate(`${location.pathname}/create`);
              }}
            >
              Create
            </div>
          </div>
        </Col>
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
