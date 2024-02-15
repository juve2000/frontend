import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
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
import { LogBulkPanel } from "./logs-panels/LogBulk";
import {
  getEventLabel,
  getOriginLabel,
  parseDateGeneralStringFormat,
} from "./log-utils";
import { getDriverLogListReq } from "../../../actions";

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
      getDriverLogListReq({
        queryParams: {
          with: ["driver_groups", "vehicles", "drivers"],
        },
      })
    );
  }, []);

  const columns: ColumnsType<any> = [
    Table.SELECTION_COLUMN,
    {
      title: "Date & Time",
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
          <div>{`${parseDateGeneralStringFormat(record?.timestamp)}`}</div>
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
        const duration = record?.duration || `03:11:03`;
        return <div>{duration}</div>;
      },
      width: "10%",
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
      width: "8%",
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
            {`${record?.location}`}
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
            {`Note`}
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
      width: "10%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`Truck 008`}
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
      width: "8%",
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
      width: "6%",
      ellipsis: true,
      render: (value, record, index) => {
        return <div className="ubuntu">Edit</div>;
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
        return <div>{`${record?.id}`}</div>;
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
              span={16}
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
                    borderRadius: 10,
                    background: "#f5f9ff",
                    display: "flex",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <div
                    style={{
                      marginRight: 5,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img style={{ width: 15 }} src={quarterClock} alt="" />
                  </div>
                  <div style={{ fontWeight: "bold", marginRight: 10 }}>
                    Unsigned logs
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
                  >
                    2
                  </div>
                </div>
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
                  }}
                >
                  Origin
                </div>
                <div
                  className="orange ubuntu"
                  style={{
                    fontWeight: 500,
                    fontSize: 12,
                    marginLeft: 16,
                    cursor: "pointer",
                  }}
                >
                  Report
                </div>
                <div
                  className="orange ubuntu"
                  style={{
                    fontWeight: 500,
                    fontSize: 12,
                    marginLeft: 16,
                    cursor: "pointer",
                  }}
                >
                  Fix logs
                </div>
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
            <Col span={8}>
              <LogBulkPanel />
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
