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

export const LogListUnidentified: React.FC = () => {
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
            {`${record?.annotations?.[0]?.text || ""}`}
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
      title: "Select Driver",
      dataIndex: "progress",
      // sortOrder: getOrderFromTableParams("status", tableParams),
      key: "progress",
      // sorter: {
      //   compare: (a: any, b: any) => a.mcnumber - b.mcnumber,
      //   multiple: 5,
      // },
      width: "15%",
      ellipsis: true,
      render: (value, record, index) => {
        const status = carrierData?.status?.find((st: any) => st.key === value);
        const defaultValue = driverLogData?.carrier?.drivers.find(
          (driver: any) => driver.id === driverLogData?.driver?.id
        )?.id;

        return (
          <div>
            <Select
              //   disabled={disabled}
              //   style={{ width, ...styles }}
              //   placeholder={placeholder}
              //   onChange={onChange}
              showSearch
              optionFilterProp="children"
              style={{ width: 200 }}
              defaultValue={defaultValue}
            >
              {driverLogData?.carrier?.drivers?.map((item: any, i: number) => {
                console.log("driverLogDate", driverLogData);
                return (
                  <Select.Option
                    key={i}
                    value={item.id}
                    style={{ backgroundColor: item.color }}
                  >
                    {item?.first_name} {item?.last_name}
                  </Select.Option>
                );
              })}
            </Select>
          </div>
        );
      },
      //   filters: [
      //     { key: "shift/repair", value: "shift/repair" },
      //     { key: "processing", value: "processing" },
      //     { key: "pending", value: "pending" },
      //     { key: "shift finished", value: "shift finished" },
      //     { key: "created", value: "created" },
      //   ].map((st: any) => {
      //     return {
      //       text: st.value,
      //       value: st.key,
      //     };
      //   }),
      //   filteredValue: tableParams?.filters?.status || null,
    },
    {
      title: "Assign",
      dataIndex: "edit",
      // sortOrder: getOrderFromTableParams("event", tableParams),
      key: "edit",
      // sorter: {
      //   compare: (a: any, b: any) => a.carrier - b.carrier,
      //   multiple: 5,
      // },
      width: "5%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ display: "flex" }}>
            <Button className="white small" style={{ width: 65, padding: 0 }}>
              Assign
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
                fields={["Unidentified Logs"]}
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
