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

export const LogTableTransaction: React.FC = () => {
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

  const [logDateFilter, setLogDateFilter] = React.useState<any>("");
  const [logDateCreatedAtFilter, setLogDateCreatedAtFilter] =
    React.useState<any>("");

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
      filterDropdown: () => {
        return (
          <div style={{ padding: 10 }}>
            <RangePicker
              onChange={(v, d) => {
                setLogDateFilter(d);
              }}
            />
            <Button
              onClick={() => {
                setCustomFilter("period", logDateFilter);
              }}
            >
              Apply
            </Button>
          </div>
        );
      },
      filteredValue: tableParams?.filters?.period || null,
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
            {record?.created_at ? `${record?.created_at}` : ""}
          </div>
        );
      },
      filterDropdown: () => {
        return (
          <div style={{ padding: 10 }}>
            <RangePicker
              onChange={(v, d) => {
                setLogDateCreatedAtFilter(d);
              }}
            />
            <Button
              onClick={() => {
                setCustomFilter("created_at", logDateCreatedAtFilter);
              }}
            >
              Apply
            </Button>
          </div>
        );
      },
      filteredValue: tableParams?.filters?.created_at || null,
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
              //   rowSelection={{ ...rowSelection, columnWidth: 10 }}
              className="table-custom-original-tab"
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
