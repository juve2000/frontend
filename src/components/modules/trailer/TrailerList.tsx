import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Table, Dropdown, Row, Col, Select, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTableParams } from "../../../hooks/useTableParams";
import dayjs from "dayjs";
import { getCarriersListReq } from "../../../actions/carrier";
import { getTrailerListReq } from "../../../actions/trailer";
import { getParams } from "../../../routes/utils";
import { InputSearch } from "../../common/doubleinput/InputSearch";
import { getOrderFromTableParams } from "../../../hooks/utils";
import { InputPageTitle } from "../../common/doubleinput/InputPageTitle";

import ResetSort from "../../../img/resetSort.svg";
import ResetFilter from "../../../img/resetFilter.svg";
import { carrierData } from "../carrier/constant";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { generateArrayOfYears } from "../../../hooks/utils";
import { LogoCarrier } from "../../common/LogoCarrier";

dayjs.extend(customParseFormat);

export const TrailerList: React.FC = () => {
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
  const trailers = useSelector((state: any) => state.trailer.trailerList);
  const carriers = useSelector((state: any) => state.carrier.carrierList);

  const count = useSelector((state: any) => state.vehicle.count);
  const loading = useSelector((state: any) => state.vehicle.loading);
  const [accautnModalOpen, setAccauntModalOpen] = useState(false);
  const [currentCarrier, setCurrentCarrier] = useState({
    id: "",
    name: "",
  });

  React.useEffect(() => {
    dispatch(
      getCarriersListReq({
        queryParams: {
          with: ["driver_groups"],
        },
      })
    );
  }, []);

  const columns: ColumnsType<any> = [
    Table.SELECTION_COLUMN,
    {
      title: "Trailer ID",
      key: "identificator",
      dataIndex: "identificator",
      sortOrder: getOrderFromTableParams("identificator", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.identificator - b.identificator,
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
            {`${record.identificator}`}
          </div>
        );
      },
      width: 300,
      ellipsis: true,
    },
    {
      title: "VIN",
      dataIndex: "vin",
      key: "vin",
      sortOrder: getOrderFromTableParams("vin", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.email - b.email,
        multiple: 5,
      },
      render: (name, record, index) => {
        return (
          <div
            className="ubuntu orange"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {`${record.vin}`}
          </div>
        );
      },
      ellipsis: true,
      width: "20%",
    },

    {
      title: "Carrier",
      dataIndex: "carrier",
      sortOrder: getOrderFromTableParams("carrier", tableParams),
      key: "carrier",
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
              navigate(`/client/carriers/${record?.carrier?.id}`);
            }}
          >
            <LogoCarrier
              logo={record?.carrier?.logo}
              onClick={() => null}
              styles={{ width: 30, height: 30 }}
            />
            <div style={{ marginLeft: 20 }}>{`${record?.carrier?.name}`}</div>
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
                  setCustomFilter("carrier", value);
                }}
              >
                {carriers?.map((carrier: any) => {
                  return (
                    <Select.Option key={carrier.id} value={carrier.id}>
                      {carrier.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
            <Button
              style={{ width: 80, height: 40 }}
              className="orange"
              onClick={() => {
                clearCustomFilter("carrier");
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
      title: "Make",
      dataIndex: "make",
      sortOrder: getOrderFromTableParams("make", tableParams),
      key: "make",
      sorter: {
        compare: (a: any, b: any) => a.make - b.make,
        multiple: 5,
      },
      width: "10%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="orange ubuntu" style={{ cursor: "pointer" }}>
            {`${record?.make}`}
          </div>
        );
      },
      filters: generateArrayOfYears().map((st: any) => {
        return {
          text: st,
          value: st,
        };
      }),
      filteredValue: tableParams?.filters?.make || null,
    },
    {
      title: "Model",
      dataIndex: "model",
      sortOrder: getOrderFromTableParams("model", tableParams),
      key: "model",
      sorter: {
        compare: (a: any, b: any) => a.model - b.model,
        multiple: 5,
      },
      width: "25%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="orange ubuntu" style={{ cursor: "pointer" }}>
            {`${record?.model}`}
          </div>
        );
      },
      filters: generateArrayOfYears().map((st: any) => {
        return {
          text: st,
          value: st,
        };
      }),
      filteredValue: tableParams?.filters?.model || null,
    },

    {
      title: "License No",
      dataIndex: "license_issuing",
      sortOrder: getOrderFromTableParams("license_issuing", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.license_issuing - b.license_issuing,
        multiple: 5,
      },
      key: "license_issuing",
      // sorter: true,
      render: (value, record, index) => {
        return <div>{record?.license_issuing}</div>;
      },
      width: "15%",
      ellipsis: true,
    },
    {
      title: "License Expiration",
      dataIndex: "license_expiration",
      sortOrder: getOrderFromTableParams("license_expiration", tableParams),
      key: "license_expiration",
      sorter: {
        compare: (a: any, b: any) => a.cdl_state - b.cdl_state,
        multiple: 5,
      },
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        const state = carrierData.states.find(
          (st) => st.key === +record.cdl_state
        );
        const dateParsed = dayjs(record.license_expiration);

        return (
          <div
            className="ubuntu"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span>{dateParsed.format("MM-DD-YYYY")} </span>
            <span
              className="icon-fi-rr-calendar"
              style={{ marginLeft: "10px" }}
            ></span>
          </div>
        );
      },
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
                      // onClick={() => {
                      //   setCurrentCarrier({
                      //     id: record.id,
                      //     name: record.name,
                      //   });
                      //   setAccauntModalOpen(true);
                      // }}
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
      getTrailerListReq({
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
            fields={["Trailers"]}
            route="/client/trailer"
            vehicles
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
        dataSource={trailers?.map((carrier: any, index: any) => {
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
