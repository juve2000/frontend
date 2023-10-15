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
  getCompaniesListRootReq,
  // getCarrierPasswordReq,
} from "../../../actions/company";
import { getParams } from "../../../routes/utils";
import { InputSearch } from "../../common/doubleinput/InputSearch";
import { getOrderFromTableParams } from "../../../hooks/utils";
import { InputPageTitle } from "../../common/doubleinput/InputPageTitle";

import ResetSort from "../../../img/resetSort.svg";
import ResetFilter from "../../../img/resetFilter.svg";
import { carrierData } from "../driver/constant";
import customParseFormat from "dayjs/plugin/customParseFormat";
// generateArrayOfYears
import { LogoCarrier } from "../../common/LogoCarrier";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";
import { BurgerIcon } from "../../header/logo";
import { companyStatys } from "./constant";

dayjs.extend(customParseFormat);

export const CompanyList: React.FC = () => {
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
  const companies = useSelector((state: any) => state.company.companiesList);

  const count = useSelector((state: any) => state.company.count);
  const loading = useSelector((state: any) => state.company.loading);

  const columns: ColumnsType<any> = [
    Table.SELECTION_COLUMN,
    {
      title: "Company Name",
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
      title: "DOT#",
      dataIndex: "usdot",
      key: "usdot",
      // sortOrder: getOrderFromTableParams("usdot", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.type - b.type,
      //   multiple: 5,
      // },

      render: (name, record, index) => {
        return (
          <div
            className="ubuntu"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {`${record.usdot}`}
          </div>
        );
      },
      ellipsis: true,
      width: "15%",
    },
    {
      title: "MC#",
      dataIndex: "mcnumber",
      key: "mcnumber",
      // sortOrder: getOrderFromTableParams("usdot", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.type - b.type,
      //   multiple: 5,
      // },

      render: (name, record, index) => {
        console.log("record", record);
        return (
          <div
            className="ubuntu"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {`${record.mcnumber}`}
          </div>
        );
      },
      ellipsis: true,
      width: "15%",
    },
    {
      title: "Authority address",
      key: "address",
      dataIndex: "address",

      render: (name, record, index) => {
        return <div className="orange ubuntu">{`TBD`}</div>;
      },
      width: 300,
      ellipsis: true,
    },
    {
      title: "Billing plan",
      dataIndex: "billing_plan",
      key: "billing_plan",
      filters: [{ key: 1, value: "Billing plan TBD#1" }].map((st: any) => {
        return {
          text: st.value,
          value: st.key,
        };
      }),
      // sortOrder: getOrderFromTableParams("billing_plan", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.billing_plan - b.billing_plan,
      //   multiple: 5,
      // },

      render: (name, record, index) => {
        return (
          <div
            className="ubuntu"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {/* {`${record.billing_plan}`} */}
            TBD
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
        compare: (a: any, b: any) => a.status - b.status,
        multiple: 5,
      },
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        const status = companyStatys.find((st) => st.key === record.status);

        return <div>{status?.value}</div>;
      },
      filters: companyStatys.map((st: any) => {
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
                      onClick={() => {
                        navigate(`/client/office`);
                      }}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        className="icon-fi-rr-folder"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      View Offices
                    </div>
                  ),
                },
                {
                  key: "4",
                  label: (
                    <div
                      onClick={() => {}}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        className="icon-fi-rr-folder"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      Activate
                    </div>
                  ),
                },
                {
                  key: "5",
                  label: (
                    <div
                      onClick={() => {}}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        className="icon-fi-rr-folder"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      Deactivate
                    </div>
                  ),
                },
              ],
            }}
          >
            <span>
              <BurgerIcon />
            </span>
          </Dropdown>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(
      getCompaniesListRootReq({
        queryParams: {
          ...getParams(tableParams),
          // with: ["offices"],
        },
      })
    );
  }, [tableParams]);

  const { checkPermission } = usePermissions();

  return (
    <>
      {checkPermission(AllPermissionsType.DEVICE_LIST) ? (
        <>
          <Row>
            <Col span={12}>
              <InputPageTitle
                fields={["Companies"]}
                route="/client/company"
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
                  Create Company
                </div>
              </div>
              <div style={{ marginLeft: 25, display: "flex" }}>
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
                    marginLeft: 25,
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
            dataSource={companies?.map((carrier: any, index: any) => {
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
      ) : (
        <NoPermission />
      )}
    </>
  );
};
