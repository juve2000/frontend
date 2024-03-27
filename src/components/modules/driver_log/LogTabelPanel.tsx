import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import {
  Table,
  Dropdown,
  Row,
  Col,
  Select,
  Button,
  Tooltip,
  DatePicker,
  Space,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTableParams } from "../../../hooks/useTableParams";
import dayjs from "dayjs";
import { defaultTo } from "lodash";
import {
  getVehicleListReq,
  getVehicleListRootReq,
  // getCarrierPasswordReq,
} from "../../../actions/vehicle";
import { getParams } from "../../../routes/utils";
import { InputSearch } from "../../common/doubleinput/InputSearch";

import ResetSort from "../../../img/resetSort.svg";
import ResetFilter from "../../../img/resetFilter.svg";
import { carrierData } from "./constant";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";
import { BurgerIcon } from "../../header/logo";
import { LogTabs } from "./LogTabs/LogTabs";
import { CreateDriverLogModal } from "./CreateLogModal";
import quarterClock from "../../../img/quarter-clock.svg";
import edit from "../../../img/edit.svg";
import copyAlt from "../../../img/copy-alt.svg";

import download from "../../../img/download.svg";
import trash from "../../../img/trash.svg";

import { LogBulkPanel } from "./logs-panels/LogBulk";
import {
  getEventLabel,
  getOriginLabel,
  parseDateGeneralStringFormat,
  secondsToHMS,
} from "./log-utils";
import { deleteDriverLogReq, getDriverLogListReq } from "../../../actions";
import { EditDriverLogModal } from "./EditLogModal";

const { RangePicker } = DatePicker;

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" />
  </Space>
);

dayjs.extend(customParseFormat);

export const LogTabelPanel: React.FC = () => {
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
  const logs = useSelector((state: any) => state.driverLog.logList);
  const driverLogDate = useSelector(
    (state: any) => state?.driverLog?.driverLogDate
  );

  const carriers = useSelector((state: any) => state.carrier.carrierList);
  const params = useParams();
  const count = useSelector((state: any) => state.log.count);
  const loading = useSelector((state: any) => state.log.loading);
  const [accautnModalOpen, setAccauntModalOpen] = useState(false);
  const [currentCarrier, setCurrentCarrier] = useState({
    id: "",
    name: "",
  });

  React.useEffect(() => {
    dispatch(
      getDriverLogListReq({
        queryParams: {
          with: ["driver_groups", "vehicles", "drivers", "vehicle"],
        },
        driverid: params?.driverid,
        date: driverLogDate,
      })
    );
  }, [driverLogDate]);

  const columns: ColumnsType<any> = [
    Table.SELECTION_COLUMN,
    {
      title: "   Date & Time",
      key: "identificator_log",
      dataIndex: "identificator",
      // sortOrder: getOrderFromTableParams("identificator", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.identificator - b.identificator,
      //   multiple: 5,
      // },
      render: (name, record, index) => {
        console.log("record", record);

        // return <div>{`01/02/2024  02:03:67 AM`}</div>;
        return (
          <div style={{ marginLeft: 10 }}>{`${parseDateGeneralStringFormat(
            record?.timestamp
          )}`}</div>
        );
      },
      width: "15%",
      ellipsis: true,
      // filterDropdown: () => {
      //   return (
      //     <div style={{ padding: 10 }}>
      //       <RangePicker />
      //     </div>
      //   );
      // },
    },
    {
      title: "Duration",
      key: "duration",
      dataIndex: "duration",
      // sortOrder: getOrderFromTableParams("duration", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.duration - b.duration,
      //   multiple: 5,
      // },
      render: (name, record, index) => {
        const duration = record?.duration || 0;

        return <div>{!!duration && secondsToHMS(duration)}</div>;
      },
      width: "8%",
      ellipsis: true,
      // filterDropdown: () => {
      //   return (
      //     <div style={{ padding: 10 }}>
      //       <RangePicker />
      //     </div>
      //   );
      // },
    },
    {
      title: "Event",
      dataIndex: "event",
      // sortOrder: getOrderFromTableParams("event", tableParams),
      key: "event",
      // sorter: {
      //   compare: (a: any, b: any) => a.carrier - b.carrier,
      //   multiple: 5,
      // },
      width: "10%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu">
            {getEventLabel(record?.event_type, record?.event_code)}
          </div>
        );
      },
    },
    {
      title: "Location",
      dataIndex: "location",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "location",
      // sorter: {
      //   compare: (a: any, b: any) => a.model - b.model,
      //   multiple: 5,
      // },
      width: "15%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {record?.location ? `${record?.location}` : ""}
          </div>
        );
      },
    },
    {
      title: "Notes",
      dataIndex: "notes",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "notes",
      // sorter: {
      //   compare: (a: any, b: any) => a.model - b.model,
      //   multiple: 5,
      // },
      width: "15%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`${record?.annotations[0]?.text || ""}`}
          </div>
        );
      },
    },
    {
      title: "Vehicle",
      dataIndex: "vehicle",
      // sortOrder: getOrderFromTableParams("vehicle", tableParams),
      key: "vehicle",
      // sorter: {
      //   compare: (a: any, b: any) => a.fuel_type - b.fuel_type,
      //   multiple: 5,
      // },
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`${record?.forms?.vehicle?.identificator}`}
          </div>
        );
      },
    },

    {
      title: "Odometer",
      dataIndex: "total_miles",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "total_miles",
      // sorter: {
      //   compare: (a: any, b: any) => a.model - b.model,
      //   multiple: 5,
      // },
      width: "7%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`${defaultTo(record?.total_miles, "")}`}
          </div>
        );
      },
    },
    {
      title: "EH",
      dataIndex: "total_hours",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "total_hours",
      // sorter: {
      //   compare: (a: any, b: any) => a.model - b.model,
      //   multiple: 5,
      // },
      width: "5%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`${defaultTo(record?.total_hours, "")}`}
          </div>
        );
      },
    },
    {
      title: "Origin",
      dataIndex: "origin",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "origin",
      // sorter: {
      //   compare: (a: any, b: any) => a.model - b.model,
      //   multiple: 5,
      // },
      width: "6%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`${defaultTo(
              getOriginLabel(
                record?.event_type,
                record?.event_code,
                record?.record_origin
              ),
              ""
            )}`}
          </div>
        );
      },
    },

    {
      title: "Edit",
      dataIndex: "edit",
      // sortOrder: getOrderFromTableParams("event", tableParams),
      key: "edit",
      // sorter: {
      //   compare: (a: any, b: any) => a.carrier - b.carrier,
      //   multiple: 5,
      // },
      width: "10%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ display: "flex" }}>
            <EditDriverLogModal log={record}>
              <div>
                <img
                  style={{ width: 12, cursor: "pointer", marginRight: 10 }}
                  src={edit}
                  alt={"edit"}
                />
              </div>
            </EditDriverLogModal>
            <div>
              <img
                style={{
                  width: 12,
                  cursor: "pointer",
                  marginRight: 10,
                  color: "red",
                }}
                src={trash}
                alt={"delete"}
                onClick={() => {
                  dispatch(
                    deleteDriverLogReq({
                      logId: record?.id,
                      onSuccess: () => {
                        console.log("ON SUCCESS");
                        dispatch(
                          getDriverLogListReq({
                            queryParams: {
                              with: [
                                "driver_groups",
                                "vehicles",
                                "drivers",
                                "vehicle",
                                "driver",
                                "codriver",
                              ],
                            },
                            driverid: params?.driverid,
                            date: driverLogDate,
                          })
                        );
                      },
                    })
                  );
                }}
              />
            </div>
            <div>
              <img
                style={{ width: 12, cursor: "pointer", marginRight: 10 }}
                src={copyAlt}
                alt={"copy"}
              />
            </div>
          </div>
        );
      },
    },

    {
      title: "Log ID",
      dataIndex: "log_id",
      key: "log_id",
      // sortOrder: getOrderFromTableParams("vin", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.email - b.email,
      //   multiple: 5,
      // },
      render: (name, record, index) => {
        // return <div>{`${record?.id}`}</div>;
        return <div>{`${record?.sequence_id ? record?.sequence_id : ""}`}</div>;
      },
      ellipsis: true,
      width: "8%",
    },

    {
      title: "Progress",
      dataIndex: "progress",
      // sortOrder: getOrderFromTableParams("status", tableParams),
      key: "progress",
      // sorter: {
      //   compare: (a: any, b: any) => a.mcnumber - b.mcnumber,
      //   multiple: 5,
      // },
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        const status = carrierData.status.find((st: any) => st.key === value);

        return (
          <div>
            <Tooltip title="Last modified by: John">
              <span>Processing</span>
            </Tooltip>
          </div>
        );
      },
      filters: [
        { key: "shift/repair", value: "shift/repair" },
        { key: "processing", value: "processing" },
        { key: "pending", value: "pending" },
        { key: "shift finished", value: "shift finished" },
        { key: "created", value: "created" },
      ].map((st: any) => {
        return {
          text: st.value,
          value: st.key,
        };
      }),
      filteredValue: tableParams?.filters?.status || null,
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
            <Col
              span={8}
              style={{
                display: "flex",
                // justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <LogBulkPanel />
            </Col>
            <Col
              span={4}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    marginLeft: 25,
                  }}
                  onClick={clearOrder}
                >
                  <div
                    className="ubuntu"
                    style={{ color: "#8A8996", fontSize: 12 }}
                  >
                    <CreateDriverLogModal />
                  </div>
                </div>

                <div
                  className="orange ubuntu"
                  style={{
                    fontWeight: 500,
                    fontSize: 12,
                    marginLeft: 16,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 10,
                    background: "#f5f9ff",
                    padding: 10,
                  }}
                >
                  <img src={download} style={{ marginRight: 10 }} />
                  <div>Report</div>
                </div>
              </div>
            </Col>
            <Col
              span={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 10,
                    marginLeft: 10,
                    borderRadius: 10,
                    background: "#f5f9ff",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      marginRight: 10,
                    }}
                  >
                    Fix Logs
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 10,
                    marginLeft: 10,
                    borderRadius: 10,
                    background: "#f5f9ff",
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{ width: 15, marginRight: 10 }}
                    src={quarterClock}
                    alt=""
                  />

                  <div style={{ fontWeight: "bold", marginRight: 10 }}>
                    Revert
                  </div>

                  <div
                    style={{
                      background: "#ffab00",

                      borderRadius: 5,

                      color: "white",

                      width: 25,

                      height: 25,

                      display: "flex",

                      justifyContent: "center",

                      alignItems: "center",
                    }}
                    className="ubuntu"
                    // style={{ color: "#8A8996", fontSize: 12 }}
                  >
                    10
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 10,
                    marginLeft: 10,
                    borderRadius: 10,
                    background: "#f5f9ff",
                    cursor: "pointer",
                  }}
                >
                  {/* <img
                    style={{ width: 15, marginRight: 10 }}
                    src={quarterClock}
                    alt=""
                  /> */}

                  <div style={{ fontWeight: "bold", marginRight: 10 }}>
                    Submit Transactions
                  </div>

                  <div
                    style={{
                      background: "#ffab00",

                      borderRadius: 5,

                      color: "white",

                      width: 25,

                      height: 25,

                      display: "flex",

                      justifyContent: "center",

                      alignItems: "center",
                    }}
                    className="ubuntu"
                    // style={{ color: "#8A8996", fontSize: 12 }}
                  >
                    2
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
