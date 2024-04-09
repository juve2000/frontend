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
import { SciChart } from "./LogTabs/ChartSci";
import { ChartSciReact } from "./LogTabs/ChartSciReact";
import { ChartLineTest } from "./LogTabs/ChartLineTest";

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
  const driverLogs = useSelector((state: any) => state.driverLog?.driverData);
  const driverLogDate = useSelector(
    (state: any) => state.driverLog?.driverLogDate
  );

  const params = useParams();

  React.useEffect(() => {
    dispatch(
      getDriverDataLogReq({
        driverId: params.driverid,
        date: driverLogDate,
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
  }, [driverLogDate]);

  const { checkPermission } = usePermissions();

  return (
    <>
      {checkPermission(AllPermissionsType.VEHICLE_LIST) ? (
        <>
          <Row>
            <Col span={12}>
              <InputPageTitle
                fields={[
                  `Logs (${driverLogs?.driver?.first_name} ${driverLogs?.driver?.last_name})`,
                ]}
                route="/client/logs"
                vehicles
                driverLogPage={true}
              />
            </Col>
            <Col span={24}>
              <LogTopPanel />
            </Col>
            {/* <Col span={24}>
              <LogChartHight />
            </Col> */}
            <Col span={24}>
              <ChartLineTest />
              {/* <ChartSciReact /> */}
            </Col>
            {/* <Col span={24}>
              <SciChart />
            </Col> */}
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
