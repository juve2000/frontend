import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Table, Dropdown, Row, Col, Select, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTableParams } from "../../../hooks/useTableParams";
import dayjs from "dayjs";
import {
  getCarriersListReq,
  getCarrierPasswordReq,
} from "../../../actions/carrier";
import {
  getRoleListReq,
  // getCarrierPasswordReq,
} from "../../../actions/role";
import { getParams } from "../../../routes/utils";
import { InputSearch } from "../../common/doubleinput/InputSearch";
import { getOrderFromTableParams } from "../../../hooks/utils";
import { InputPageTitle } from "../../common/doubleinput/InputPageTitle";

import ResetSort from "../../../img/resetSort.svg";
import ResetFilter from "../../../img/resetFilter.svg";
import { carrierData } from "../driver/constant";
import customParseFormat from "dayjs/plugin/customParseFormat";
// generateArrayOfYears
import { generateArrayOfYears } from "../../../hooks/utils";
import { LogoCarrier } from "../../common/LogoCarrier";

dayjs.extend(customParseFormat);

export const RoleList: React.FC = () => {
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
    clearFilter,
    clearOrder,
    clearCustomFilter,
    setCustomFilter,
  } = useTableParams({});
  const roles = useSelector((state: any) => state.role.roleList);

  const count = useSelector((state: any) => state.role.count);
  const loading = useSelector((state: any) => state.role.loading);
  const [accautnModalOpen, setAccauntModalOpen] = useState(false);

  const columns: ColumnsType<any> = [
    Table.SELECTION_COLUMN,
    {
      title: "Role Name",
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
            className="orange ubuntu"
            onClick={() => {
              navigate(`${location.pathname}/${record.id}`);
            }}
          >
            {`${record.name}`}
          </div>
        );
      },
      width: 300,
      ellipsis: true,
    },
    {
      title: "Assigned Users",
      dataIndex: "type",
      key: "type",
      sortOrder: getOrderFromTableParams("type", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.type - b.type,
        multiple: 5,
      },

      render: (name, record, index) => {
        return (
          <div
            className="ubuntu orange"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {`TBD`}
          </div>
        );
      },
      ellipsis: true,
      width: "20%",
    },
    {
      title: "Data Modified",
      key: "serial_number",
      dataIndex: "serial_number",
      sortOrder: getOrderFromTableParams("serial_number", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.serial_number - b.serial_number,
        multiple: 5,
      },
      render: (name, record, index) => {
        return (
          <div
            className="orange ubuntu"
            onClick={() => {
              navigate(`${location.pathname}/${record.id}`);
            }}
          >
            {`TBD`}
          </div>
        );
      },
      width: 300,
      ellipsis: true,
    },
    {
      title: "Permissions",
      dataIndex: "mac_address",
      key: "mac_address",
      sortOrder: getOrderFromTableParams("mac_address", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.mac_address - b.mac_address,
        multiple: 5,
      },

      render: (name, record, index) => {
        return (
          <div
            className="ubuntu orange"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {`TBD`}
          </div>
        );
      },
      ellipsis: true,
      width: "20%",
    },

    {
      title: "Status",
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
                    <div
                      onClick={() => {
                        navigate(
                          `${location.pathname}/${record.id}?state=EDIT`
                        );
                      }}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        className="icon-fi-rr-pencil"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      Edit
                    </div>
                  ),
                },
                {
                  key: "2",
                  label: (
                    <div
                      onClick={() => {
                        navigate(
                          `${location.pathname}/${record.id}?state=VIEW`
                        );
                      }}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        className="icon-fi-rr-eye"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      View
                    </div>
                  ),
                },
                {
                  key: "3",
                  label: (
                    <div
                      onClick={() => {}}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        className="icon-fi-rr-trash"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      Delete
                    </div>
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
    dispatch(
      getRoleListReq({
        queryParams: {
          ...getParams(tableParams),
          with: ["terminal", "carrier", "group"],
        },
      })
    );
  }, [tableParams]);

  return (
    <>
      <Row>
        <Col span={12}>
          <InputPageTitle
            fields={["Roles and Permissions"]}
            route="/client/role"
            devices
          />
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
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
          <div style={{ marginLeft: 20, display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={clearOrder}
            >
              <div style={{ marginRight: 5 }}>
                <img src={ResetSort} />
              </div>
              <div
                className="ubuntu"
                style={{ color: "#8A8996", fontSize: 12 }}
              >
                Reset sorting
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                marginLeft: 10,
              }}
              onClick={clearFilter}
            >
              <div style={{ marginRight: 5 }}>
                <img src={ResetFilter} />
              </div>
              <div
                className="ubuntu"
                style={{ color: "#8A8996", fontSize: 12 }}
              >
                Reset filter
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={roles?.map((carrier: any, index: any) => {
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
        rowSelection={{ ...rowSelection, columnWidth: 10 }}
        className="table-custom"
        //   sticky
        //   scroll={{ y: window.innerHeight - 235 }}
      />
    </>
  );
};
