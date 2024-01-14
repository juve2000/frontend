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
  getVehicleListReq,
  getVehicleListRootReq,
  // getCarrierPasswordReq,
} from "../../../actions/vehicle";
import { getParams } from "../../../routes/utils";
import { InputSearch } from "../../common/doubleinput/InputSearch";
import { getOrderFromTableParams } from "../../../hooks/utils";
import { InputPageTitle } from "../../common/doubleinput/InputPageTitle";
import { SetPassword } from "./modals/CarrierSetPassword";
import { InputCallToCall } from "../../common/doubleinput/InputCallToCall";

import ResetSort from "../../../img/resetSort.svg";
import ResetFilter from "../../../img/resetFilter.svg";
import { carrierData } from "./constant";
import customParseFormat from "dayjs/plugin/customParseFormat";
// generateArrayOfYears
import { generateArrayOfYears } from "../../../hooks/utils";
import { LogoCarrier } from "../../common/LogoCarrier";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";
import { BurgerIcon } from "../../header/logo";
import { LogTabs } from "./LogTabs/LogTabs";

dayjs.extend(customParseFormat);

export const LogList: React.FC = () => {
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
  const logs = useSelector((state: any) => state.log.logList);
  const carriers = useSelector((state: any) => state.carrier.carrierList);

  const count = useSelector((state: any) => state.log.count);
  const loading = useSelector((state: any) => state.log.loading);
  const [accautnModalOpen, setAccauntModalOpen] = useState(false);
  const [currentCarrier, setCurrentCarrier] = useState({
    id: "",
    name: "",
  });

  React.useEffect(() => {
    dispatch(
      getVehicleListReq({
        queryParams: {
          with: ["driver_groups", "vehicles", "drivers"],
        },
      })
    );
  }, []);

  const columns: ColumnsType<any> = [
    Table.SELECTION_COLUMN,
    {
      title: "Time",
      key: "identificator",
      dataIndex: "identificator",
      sortOrder: getOrderFromTableParams("identificator", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.identificator - b.identificator,
        multiple: 5,
      },
      render: (name, record, index) => {
        return <div>{`11:41 PM`}</div>;
      },
      width: "10%",
      ellipsis: true,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      // sortOrder: getOrderFromTableParams("vin", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.email - b.email,
      //   multiple: 5,
      // },
      render: (name, record, index) => {
        return <div>{`01:02:03`}</div>;
      },
      ellipsis: true,
      width: "10%",
    },

    {
      title: "Event",
      dataIndex: "event",
      sortOrder: getOrderFromTableParams("event", tableParams),
      key: "event",
      sorter: {
        compare: (a: any, b: any) => a.carrier - b.carrier,
        multiple: 5,
      },
      width: "8%",
      ellipsis: true,
      render: (value, record, index) => {
        return <div className="ubuntu">SB</div>;
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
      title: "location",
      dataIndex: "location",
      sortOrder: getOrderFromTableParams("location", tableParams),
      key: "location",
      sorter: {
        compare: (a: any, b: any) => a.make - b.make,
        multiple: 5,
      },
      width: "10%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`TBD`}
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
      title: "Notes",
      dataIndex: "notes",
      sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "notes",
      sorter: {
        compare: (a: any, b: any) => a.model - b.model,
        multiple: 5,
      },
      width: "15%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`Note`}
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
      title: "Vehicle",
      dataIndex: "vehicle",
      sortOrder: getOrderFromTableParams("vehicle", tableParams),
      key: "vehicle",
      sorter: {
        compare: (a: any, b: any) => a.fuel_type - b.fuel_type,
        multiple: 5,
      },
      width: "10%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`Truck 008`}
          </div>
        );
      },
      filters: generateArrayOfYears().map((st: any) => {
        return {
          text: st,
          value: st,
        };
      }),
      filteredValue: tableParams?.filters?.group || null,
    },
    {
      title: "ELD",
      dataIndex: "eld",
      // sortOrder: getOrderFromTableParams("license_issuing", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.license_issuing - b.license_issuing,
      //   multiple: 5,
      // },
      key: "eld",
      // sorter: true,
      render: (value, record, index) => {
        return <div>GBJK003</div>;
      },
      width: "10%",
      ellipsis: true,
    },
    {
      title: "Odometer",
      dataIndex: "odometer",
      sortOrder: getOrderFromTableParams("odometer", tableParams),
      key: "odometer",
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
            {/* <span>{dateParsed.format("MM-DD-YYYY")} </span> */}
            7123123
          </div>
        );
      },
    },
    {
      title: "Engine Hours",
      dataIndex: "engine_hours",
      // sortOrder: getOrderFromTableParams("status", tableParams),
      key: "engine_hours",
      // sorter: {
      //   compare: (a: any, b: any) => a.mcnumber - b.mcnumber,
      //   multiple: 5,
      // },
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        const status = carrierData.status.find((st) => st.key === value);

        return <div>112.8</div>;
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
      title: "DOT",
      dataIndex: "dot",
      // sortOrder: getOrderFromTableParams("status", tableParams),
      key: "dot",
      // sorter: {
      //   compare: (a: any, b: any) => a.mcnumber - b.mcnumber,
      //   multiple: 5,
      // },
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        const status = carrierData.status.find((st) => st.key === value);

        return <div>TBD</div>;
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
      title: "Origin",
      dataIndex: "origin",
      // sortOrder: getOrderFromTableParams("status", tableParams),
      key: "origin",
      // sorter: {
      //   compare: (a: any, b: any) => a.mcnumber - b.mcnumber,
      //   multiple: 5,
      // },
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        const status = carrierData.status.find((st) => st.key === value);

        return <div>TBD</div>;
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
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span
                        className="icon-fi-rr-trash"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      Activate
                    </div>
                  ),
                },
                {
                  key: "4",
                  label: (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span
                        className="icon-fi-rr-trash"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      Dectivate
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
      getVehicleListReq({
        queryParams: {
          ...getParams(tableParams),
          with: ["carrier"],
        },
      })
    );
  }, [tableParams]);

  const { checkPermission } = usePermissions();

  return (
    <>
      {checkPermission(AllPermissionsType.VEHICLE_LIST) ? (
        <>
          <Row>
            <Col span={24}>
              <LogTabs />
            </Col>

            <Col span={12}>
              <InputPageTitle fields={["Logs"]} route="/client/logs" vehicles />
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

              <div style={{ marginLeft: 20, display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    marginLeft: 25,
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
          <div style={{ width: "100%" }} className="logs-table">
            <Table
              columns={columns}
              rowKey={(record) => record.id}
              dataSource={logs?.map((carrier: any, index: any) => {
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
          </div>
        </>
      ) : (
        <NoPermission />
      )}
    </>
  );
};
