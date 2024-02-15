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
  getDriverDataLogReq,
  getDriverDataCarrierLogReq,
} from "../../../actions/driver_log";
import { getDriverReq } from "../../../actions";
import { getParams } from "../../../routes/utils";
import { getCarrierReq } from "../../../actions/carrier";
import { InputPageTitle } from "../../common/doubleinput/InputPageTitle";

import { carrierData } from "./constant";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";
import { LogTabs } from "./LogTabs/LogTabs";
import { LogChartHight } from "./LogTabs/LogChartHightCharts";
import { LogTopPanel } from "./logs-panels/LogTopPanel";
import { LogViolationPanel } from "./logs-panels/LogViolationPanel";
import { LogBottomPanel } from "./logs-panels/LogBottomPanel";
import { LogDashboardPanel } from "./logs-panels/LogDashboardPanel";
import { parseDateGeneralStringFormat } from "./log-utils";

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

export const DriverLogList: React.FC = () => {
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
  const params = useParams();

  React.useEffect(() => {
    dispatch(
      getDriverDataLogReq({
        driverId: params.driverid,
        queryParams: {
          with: ["terminal", "group", "carrier", "documents"],
        },
        onSuccess: (carrierId: any) => {
          dispatch(
            getDriverDataCarrierLogReq({
              carrierId: carrierId,
              queryParams: {
                with: ["vehicles", "devices", "trailers", "drivers"],
              },
            })
          );
        },
      })
    );
  }, []);

  const columns: ColumnsType<any> = [
    Table.SELECTION_COLUMN,
    {
      title: "1Date & Time",
      key: "timestamp",
      dataIndex: "timestap",
      // sortOrder: getOrderFromTableParams("identificator", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.identificator - b.identificator,
      //   multiple: 5,
      // },
      render: (name, record, index) => {
        console.log("record", record);
        return (
          // <div>{parseDateGeneralStringFormat(record?.timestamp as any)}</div>
          <div>1</div>
        );
      },
      width: "15%",
      ellipsis: true,
    },
    {
      title: "Duration",
      key: "duration",
      dataIndex: "duration",

      render: (name, record, index) => {
        return <div>{`01:56:22`}</div>;
      },
      width: "10%",
      ellipsis: true,
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
        return <div className="ubuntu">SB</div>;
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
            {`2.0 NY 56`}
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
      title: "ELD2",
      dataIndex: "eld",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "eld",
      // sorter: {
      //   compare: (a: any, b: any) => a.model - b.model,
      //   multiple: 5,
      // },
      width: "8%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`GBMF0912`}
          </div>
        );
      },
    },
    {
      title: "Odometer",
      dataIndex: "odometer",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "odometer",
      // sorter: {
      //   compare: (a: any, b: any) => a.model - b.model,
      //   multiple: 5,
      // },
      width: "8%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`567123`}
          </div>
        );
      },
    },
    {
      title: "EH",
      dataIndex: "eh",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "eh",
      // sorter: {
      //   compare: (a: any, b: any) => a.model - b.model,
      //   multiple: 5,
      // },
      width: "5%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`1089.5`}
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
            {`Driver`}
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
        return (
          <div>
            {`7621`}
            {index}
          </div>
        );
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
        const status = carrierData.status.find((st) => st.key === value);

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
            <Col span={12}>
              <InputPageTitle fields={["Logs"]} route="/client/logs" vehicles />
            </Col>
            <Col span={24}>
              <LogTopPanel />
            </Col>
            <Col span={24}>
              <LogChartHight />
            </Col>
            <Col span={24}>
              <LogViolationPanel />
            </Col>
            <Col span={24}>
              <LogBottomPanel />
            </Col>
            <Col span={24}>
              <LogDashboardPanel />
            </Col>
            <Col span={24}>
              <LogTabs />
            </Col>
          </Row>
        </>
      ) : (
        <NoPermission />
      )}
    </>
  );
};
