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
import {
  getOfficeListReq,
  getOfficeReq,
  getOfficeListRootReq,
} from "../../../actions";

import ResetSort from "../../../img/resetSort.svg";
import ResetFilter from "../../../img/resetFilter.svg";
import { carrierData } from "../driver/constant";
import customParseFormat from "dayjs/plugin/customParseFormat";
// generateArrayOfYears
import { LogoCarrier } from "../../common/LogoCarrier";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";

dayjs.extend(customParseFormat);

export const OfficeList: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("foffi");
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
  const offices = useSelector((state: any) => state.office.officeList);
  const companies = useSelector((state: any) => state.company.companiesList);

  const count = useSelector((state: any) => state.office.count);
  const loading = useSelector((state: any) => state.office.loading);
  const { checkPermission } = usePermissions();
  const isSuperAdmin = checkPermission(AllPermissionsType.SUPER_ADMIN);

  useEffect(() => {
    if (isSuperAdmin && companies?.length < 1) {
      dispatch(
        getCompaniesListRootReq({
          queryParams: {
            ...getParams(tableParams),
            // with: ["offices"],
          },
        })
      );
    }
  }, [isSuperAdmin]);

  const columns: ColumnsType<any> = [
    Table.SELECTION_COLUMN,

    // {
    //   title: "Authority adress",
    //   key: "address",
    //   dataIndex: "address",

    //   render: (name, record, index) => {
    //     return <div className="orange ubuntu">{`TBD`}</div>;
    //   },
    //   width: 300,
    //   ellipsis: true,
    // },
    {
      title: "Company",
      dataIndex: "company",
      sortOrder: getOrderFromTableParams("company", tableParams),
      key: "company",
      sorter: {
        compare: (a: any, b: any) => a.carrier - b.carrier,
        multiple: 5,
      },
      width: "20%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div
            className="orange ubuntu"
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={() => {
              navigate(`/client/company/${record?.company?.id}`);
            }}
          >
            <LogoCarrier
              logo={record?.company?.logo}
              onClick={() => null}
              styles={{ width: 30, height: 30 }}
            />
            <div style={{ marginLeft: 20 }}>{`${record?.company?.name}`}</div>
          </div>
        );
      },
      filterDropdown: () => {
        return (
          <div style={{ padding: 10 }}>
            <div>
              <Select
                style={{ width: 200, marginBottom: 20 }}
                value={tableParams.filters?.carrier}
                onChange={(value) => {
                  clearCustomFilter("group");
                  setCustomFilter("company", value);
                }}
              >
                {companies?.map((company: any) => {
                  return (
                    <Select.Option key={company.id} value={company.id}>
                      {company.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
            <Button
              style={{ width: 80, height: 40 }}
              className="orange"
              onClick={() => {
                clearCustomFilter("company");
                clearCustomFilter("group");
              }}
            >
              Reset
            </Button>
          </div>
        );
      },

      filteredValue: tableParams?.filters?.carrier || null,
    },
    {
      title: "DOT#",
      dataIndex: "usdot",
      key: "usdot",
      sortOrder: getOrderFromTableParams("usdot", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.type - b.type,
        multiple: 5,
      },

      render: (name, record, index) => {
        return (
          <div
            className="ubuntu"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {`${record.company.usdot}`}
          </div>
        );
      },
      ellipsis: true,
      width: "20%",
    },
    {
      title: "MC#",
      dataIndex: "mcnumber",
      key: "mcnumber",
      sortOrder: getOrderFromTableParams("mcnumber", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.type - b.type,
        multiple: 5,
      },

      render: (name, record, index) => {
        return (
          <div
            className="ubuntu"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {`${record.company.mcnumber}`}
          </div>
        );
      },
      ellipsis: true,
      width: "20%",
    },
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
      title: "Office Adress",
      dataIndex: "address",
      // sorter: true,
      render: (value, record, index) => {
        const {
          address_index,
          country,
          state,
          number_street,
          area = "",
        } = record?.address || {};
        const stateFound = carrierData.states.find(
          (st: any) => st.key === state
        );
        const countryFound = carrierData.countries.find(
          (st: any) => st.key === country
        );

        return (
          <div style={{ display: "flex" }}>
            {number_street ? (
              <div style={{ marginRight: 2 }}>{number_street}</div>
            ) : null}
            {area ? <div style={{ marginRight: 2 }}>{area},</div> : null}
            {stateFound?.code ? (
              <div style={{ marginRight: 2 }}>({stateFound?.code}),</div>
            ) : null}
            {countryFound?.value ? (
              <div style={{ marginRight: 2 }}>{countryFound?.value},</div>
            ) : null}

            {address_index ? (
              <div style={{ marginRight: 2 }}>{address_index}</div>
            ) : null}
          </div>
        );
      },
      width: "30%",
      ellipsis: true,
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
    if (isSuperAdmin) {
      dispatch(
        getOfficeListReq({
          queryParams: {
            ...getParams(tableParams),
            with: ["company", "config"],
          },
        })
      );
    } else {
      dispatch(
        getOfficeListReq({
          queryParams: {
            ...getParams(tableParams),
            with: ["company", "config"],
          },
        })
      );
    }
  }, [tableParams, isSuperAdmin]);

  return (
    <>
      {checkPermission(AllPermissionsType.DEVICE_LIST) ? (
        <>
          <Row>
            <Col span={12}>
              <InputPageTitle
                fields={["Offices"]}
                route="/client/office"
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
                  Create Office
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
            dataSource={offices?.map((carrier: any, index: any) => {
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
