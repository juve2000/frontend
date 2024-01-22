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
      title: "Log ID",
      key: "identificator_log",
      dataIndex: "identificator",
      // sortOrder: getOrderFromTableParams("identificator", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.identificator - b.identificator,
      //   multiple: 5,
      // },
      render: (name, record, index) => {
        return <div>{`0129`}</div>;
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
      title: "Date",
      key: "identificator",
      dataIndex: "identificator",
      sortOrder: getOrderFromTableParams("identificator", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.identificator - b.identificator,
        multiple: 5,
      },
      render: (name, record, index) => {
        return <div>{`01/02/2024`}</div>;
      },
      width: "10%",
      ellipsis: true,
      filterDropdown: () => {
        return (
          <div style={{ padding: 10 }}>
            <RangePicker />
          </div>
        );
      },
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
      filters: [
        { key: 1, value: "Vehicle 1" },
        { key: 2, value: "Vehicle 2" },
      ].map((st: any) => {
        return {
          text: st.value,
          value: st.key,
        };
      }),
      filteredValue: tableParams?.filters?.group || null,
    },
    // {
    //   title: "Start Time",
    //   key: "identificator",
    //   dataIndex: "identificator",
    //   sortOrder: getOrderFromTableParams("identificator", tableParams),
    //   sorter: {
    //     compare: (a: any, b: any) => a.identificator - b.identificator,
    //     multiple: 5,
    //   },
    //   render: (name, record, index) => {
    //     return <div>{`11:41:22 PM`}</div>;
    //   },
    //   width: "10%",
    //   ellipsis: true,
    // },
    // {
    //   title: "Duration",
    //   dataIndex: "duration",
    //   key: "duration",
    //   // sortOrder: getOrderFromTableParams("vin", tableParams),
    //   // sorter: {
    //   //   compare: (a: any, b: any) => a.email - b.email,
    //   //   multiple: 5,
    //   // },
    //   render: (name, record, index) => {
    //     return <div>{`01:02:03`}</div>;
    //   },
    //   ellipsis: true,
    //   width: "10%",
    // },
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
    // filterDropdown: () => {
    //   return (
    //     <div style={{ padding: 10 }}>
    //       <div>
    //         <Select
    //           style={{ width: 200, marginBottom: 20 }}
    //           value={tableParams.filters?.carrier}
    //           onChange={(value) => {
    //             clearCustomFilter("group");
    //             setCustomFilter("carrier", value);
    //           }}
    //         >
    //           {carriers?.map((carrier: any) => {
    //             return (
    //               <Select.Option key={carrier.id} value={carrier.id}>
    //                 {carrier.name}
    //               </Select.Option>
    //             );
    //           })}
    //         </Select>
    //       </div>
    //       <Button
    //         style={{ width: 80, height: 40 }}
    //         className="orange"
    //         onClick={() => {
    //           clearCustomFilter("carrier");
    //           clearCustomFilter("group");
    //         }}
    //       >
    //         Reset
    //       </Button>
    //     </div>
    //   );
    // },
    //   filters: [
    //     { key: 1, value: "On" },
    //     { key: 2, value: "Off" },
    //     { key: 3, value: "SB" },
    //     { key: 4, value: "D" },
    //     { key: 5, value: "Login" },
    //     { key: 6, value: "Logout" },
    //     { key: 7, value: "YM" },
    //     { key: 8, value: "Power up" },
    //     { key: 9, value: "Shut down" },
    //     { key: 10, value: "Certification" },
    //     { key: 11, value: "Intermediate" },
    //   ].map((st: any) => {
    //     return {
    //       text: st.value,
    //       value: st.key,
    //     };
    //   }),
    //   filteredValue: tableParams?.filters?.group || null,
    // },

    // {
    //   title: "User Name",
    //   dataIndex: "user_name",
    //   key: "user_name",
    //   // sortOrder: getOrderFromTableParams("vin", tableParams),
    //   // sorter: {
    //   //   compare: (a: any, b: any) => a.email - b.email,
    //   //   multiple: 5,
    //   // },
    //   render: (name, record, index) => {
    //     return <div>{`David03`}</div>;
    //   },
    //   ellipsis: true,
    //   width: "10%",
    //   filters: [
    //     { key: 1, value: "David 003" },
    //     { key: 2, value: "John 17x" },
    //   ].map((st: any) => {
    //     return {
    //       text: st.value,
    //       value: st.key,
    //     };
    //   }),
    //   filteredValue: tableParams?.filters?.group || null,
    // },

    {
      title: "Status & Duration Status",
      dataIndex: "status",
      key: "status",
      // sortOrder: getOrderFromTableParams("vin", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.email - b.email,
      //   multiple: 5,
      // },
      render: (name, record, index) => {
        return (
          <div>
            {`SB`} : {`05:34`}
          </div>
        );
      },
      ellipsis: true,
      width: "20%",
      filters: [
        { key: 1, value: "SB" },
        { key: 2, value: "ON" },
        { key: 3, value: "PC" },
        { key: 4, value: "OFF" },
        { key: 5, value: "Driving" },
        { key: 6, value: "YM" },
      ].map((st: any) => {
        return {
          text: st.value,
          value: st.key,
        };
      }),
      filteredValue: tableParams?.filters?.group || null,
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
            {`location`}
          </div>
        );
      },
    },
    {
      title: "Driving",
      dataIndex: "ndriving",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "driving",
      // sorter: {
      //   compare: (a: any, b: any) => a.model - b.model,
      //   multiple: 5,
      // },
      width: "5%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`4:15`}
          </div>
        );
      },
    },
    {
      title: "Shift",
      dataIndex: "shift",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "shift",
      // sorter: {
      //   compare: (a: any, b: any) => a.model - b.model,
      //   multiple: 5,
      // },
      width: "5%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`2:25`}
          </div>
        );
      },
    },
    {
      title: "Cycle",
      dataIndex: "cycle",
      // sortOrder: getOrderFromTableParams("notes", tableParams),
      key: "cycle",
      // sorter: {
      //   compare: (a: any, b: any) => a.model - b.model,
      //   multiple: 5,
      // },
      width: "5%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div className="ubuntu" style={{ cursor: "pointer" }}>
            {`00:17`}
          </div>
        );
      },
    },
    {
      title: "Worked Hours",
      dataIndex: "tbd",
      key: "tbd",
      // sortOrder: getOrderFromTableParams("vin", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.email - b.email,
      //   multiple: 5,
      // },
      render: (name, record, index) => {
        return <div>{`05:37`}</div>;
      },
      ellipsis: true,
      width: "10%",
    },
    // {
    //   title: "Distance",
    //   dataIndex: "distance",
    //   key: "distance",
    //   // sortOrder: getOrderFromTableParams("vin", tableParams),
    //   // sorter: {
    //   //   compare: (a: any, b: any) => a.email - b.email,
    //   //   multiple: 5,
    //   // },
    //   render: (name, record, index) => {
    //     return <div>{`306`}</div>;
    //   },
    //   ellipsis: true,
    //   width: "10%",
    // },
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

    // {
    //   title: "Violations",
    //   dataIndex: "violations",
    //   // sortOrder: getOrderFromTableParams("license_issuing", tableParams),
    //   // sorter: {
    //   //   compare: (a: any, b: any) => a.license_issuing - b.license_issuing,
    //   //   multiple: 5,
    //   // },
    //   key: "violations",
    //   // sorter: true,
    //   render: (value, record, index) => {
    //     return <div>TBD</div>;
    //   },
    //   width: "10%",
    //   ellipsis: true,
    //   filters: [
    //     { value: "No", key: "No" },
    //     { value: "Form & Manner", key: 2 },
    //     { value: "HOS", key: 3 },
    //   ].map((st: any) => {
    //     return {
    //       text: st.value,
    //       value: st.key,
    //     };
    //   }),
    //   filteredValue: tableParams?.filters?.status || null,
    // },

    // {
    //   title: "DOT",
    //   dataIndex: "dot",
    //   // sortOrder: getOrderFromTableParams("status", tableParams),
    //   key: "dot",
    //   // sorter: {
    //   //   compare: (a: any, b: any) => a.mcnumber - b.mcnumber,
    //   //   multiple: 5,
    //   // },
    //   width: "9%",
    //   ellipsis: true,
    //   render: (value, record, index) => {
    //     const status = carrierData.status.find((st) => st.key === value);

    //     return <div>8 min. NY </div>;
    //   },
    //   filters: [
    //     { key: "Yes", value: 1 },
    //     { key: "No", value: 1 },
    //   ].map((st: any) => {
    //     return {
    //       text: st.key,
    //       value: st.value,
    //     };
    //   }),
    //   filteredValue: tableParams?.filters?.status || null,
    // },
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
