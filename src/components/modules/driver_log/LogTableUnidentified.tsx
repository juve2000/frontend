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

export const LogTabelUnidentified: React.FC = () => {
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
  const driverLogData = useSelector(
    (state: any) => state?.driverLog?.driverData
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
          with: ["driver_groups", "vehicles", "drivers"],
        },
        driverid: params?.driverid,
        date: driverLogDate,
      })
    );
  }, [driverLogDate]);

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
      width: "8%",
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
          <div style={{ width: "100%" }} className="logs-table">
            <Table
              columns={columns}
              rowKey={(record) => record.id}
              dataSource={[{}]?.map((carrier: any, index: any) => {
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
