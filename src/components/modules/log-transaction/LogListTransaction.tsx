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
  getCarriersListReq,
  getCarrierPasswordReq,
} from "../../../actions/carrier";
import {
  getVehicleListReq,
  getVehicleListRootReq,
  // getCarrierPasswordReq,
} from "../../../actions/vehicle";
import {
  getLogListReq,
  // getCarrierPasswordReq,
} from "../../../actions/logs";
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
import {
  parseTimeString,
  parseTimeStringFormat,
  parseDateTimeStringFormat,
  parseDateGeneralStringFormat,
  parseDateStringFormat,
  parseDateWitoutTimeStringFormat,
} from "../driver_log/log-utils";
import { ModalGoogleMapTracker } from "../../common/GoogleModal";
import { getEventLabel } from "../driver_log/log-utils";
import { getOriginLabel } from "../driver_log/log-utils";

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

export const LogListTransaction: React.FC = () => {
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
  const driverLogDate = useSelector(
    (state: any) => state?.driverLog?.driverLogDate
  );
  const driverLogData = useSelector(
    (state: any) => state?.driverLog?.driverData
  );
  const count = useSelector((state: any) => state.log.count);
  const loading = useSelector((state: any) => state.log.loading);
  const [logDateFilter, setLogDateFilter] = React.useState<any>("");

  React.useEffect(() => {
    dispatch(
      getLogListReq({
        queryParams: {
          with: [
            "drivers",
            "driver",
            "vehicles",
            "carrier",
            "vehicle",
            "carriers",
          ],
        },
      })
    );
  }, []);

  const columns: ColumnsType<any> = [
    // Table.SELECTION_COLUMN,
    {
      title: "Period",
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
      title: "Carrier",
      key: "carrier",
      dataIndex: "carrier",
      // sortOrder: getOrderFromTableParams("duration", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.duration - b.duration,
      //   multiple: 5,
      // },
      render: (name, record, index) => {
        const duration = record?.duration || `03:11:03`;
        return <div>{duration}</div>;
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
      title: "Driver",
      dataIndex: "driver",
      // sortOrder: getOrderFromTableParams("event", tableParams),
      key: "driver",
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
      title: "Created At",
      dataIndex: "created_at",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "created_at",
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
      title: "Status",
      dataIndex: "status",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "status",
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
      title: "Info",
      dataIndex: "info",
      // sortOrder: getOrderFromTableParams("vehicle", tableParams),
      key: "info",
      // sorter: {
      //   compare: (a: any, b: any) => a.fuel_type - b.fuel_type,
      //   multiple: 5,
      // },
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`${record?.vehicle?.identificator}`}
          </div>
        );
      },
    },

    {
      title: "User",
      dataIndex: "user",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "user",
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
      title: "Roll Back",
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
          <div className="ubuntu" style={{ display: "flex" }}>
            <Button className="white small" style={{ width: 65, padding: 0 }}>
              Roll Back
            </Button>
          </div>
        );
      },
    },
  ];

  // useEffect(() => {
  //   dispatch(
  //     getLogListReq({
  //       queryParams: {
  //         ...getParams(tableParams),
  //         with: ["driver", "carrier", "vehicle"],
  //       },
  //     })
  //   );
  // }, [tableParams]);

  const { checkPermission } = usePermissions();

  return (
    <>
      {checkPermission(AllPermissionsType.VEHICLE_LIST) ? (
        <>
          <Row>
            {/* <Col span={24}>
              <LogTabs />
            </Col> */}

            <Col span={12} style={{ display: "flex", alignItems: "center" }}>
              <InputPageTitle
                fields={["Transactions"]}
                route="/client/logs"
                vehicles
              />
              <div style={{ marginTop: 10 }}>
                {!!logDateFilter[0]
                  ? `Date rage: ${logDateFilter[0]} - ${logDateFilter[1]}`
                  : null}
              </div>
            </Col>
            {/* <Col
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
            </Col> */}
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
                total: defaultTo(logs?.length, count),
              }}
              loading={loading}
              onChange={handleTableChange}
              // rowSelection={{ ...rowSelection, columnWidth: 10 }}
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
