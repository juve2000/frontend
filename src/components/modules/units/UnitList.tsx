import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Table, Dropdown, Row, Col, Select, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTableParams } from "../../../hooks/useTableParams";
import {
  getCarriersListReq,
  getCarrierPasswordReq,
} from "../../../actions/carrier";
import {
  getUnitListReq,
  // getCarrierPasswordReq,
} from "../../../actions/unit";
import { getParams } from "../../../routes/utils";
import { InputSearch } from "../../common/doubleinput/InputSearch";
import { getOrderFromTableParams } from "../../../hooks/utils";
import { InputPageTitle } from "../../common/doubleinput/InputPageTitle";
import { SetPassword } from "./modals/CarrierSetPassword";
import { InputCallToCall } from "../../common/doubleinput/InputCallToCall";

import ResetSort from "../../../img/resetSort.svg";
import ResetFilter from "../../../img/resetFilter.svg";
import { LogoCarrier } from "../../common/LogoCarrier";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";
import { BurgerIcon } from "../../header/logo";
import { getColorByCode } from "../../../utils/utils";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { carrierData } from "../carrier/constant";
import {
  ServerToClientEvents,
  ClientToServerEvents,
} from "../../../socket/interface";
import GoogleMapReact from "google-map-react";
import { GoogleMapTracker } from "../../common/google-map/googleMapTracker";
// import * as io from "socket.io-client";
import { socket } from "../../../socket";
import { OpenLayerMap } from "../../common/google-map/olMap";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function MapApp() {
  const defaultProps = {
    center: {
      lat: 26.513266263248372,
      lng: -80.9255265001059,
    },
    zoom: 6,
  };

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCgYHcwm3P78F60WtJcicP3KmN5kZzyFag",
          language: "EN",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={26.513266263248372}
          lng={-80.9255265001059}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

// const socket = io.connect("http://localhost:3001");
// const socket = io.connect(
//   "http://87.248.167.60:4000/?channel=eld:realtime:gps*"
// );

export const UnitList: React.FC = () => {
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

  //SOCKET
  const [room, setRoom] = useState("");
  const [units, setUnits] = useState<any>([]);
  const [info, setInfo] = useState<any>([]);
  const [countV, setCount] = useState<any>(0);
  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      console.log("receive message", data);
      setMessageReceived(data.message);
    });
    socket.on("message", (data: any) => {
      console.log("message", data.message);
      if (data?.message) {
        setInfo(JSON.parse(data.message));
        setCount((state: any) => {
          return state + 1;
        });
      }
    });
  }, [socket]);

  React.useEffect(() => {
    console.log("info", info);
  }, [info]);

  //SOCEKT END
  const unitsRedux = useSelector((state: any) => state.units.units);
  const carriers = useSelector((state: any) => state.carrier.carrierList);

  const count = useSelector((state: any) => state.driver.count);
  const loading = useSelector((state: any) => state.driver.loading);
  const [accautnModalOpen, setAccauntModalOpen] = useState(false);
  const [currentCarrier, setCurrentCarrier] = useState({
    id: "",
    name: "",
  });

  React.useEffect(() => {
    setUnits(unitsRedux);
  }, [unitsRedux]);

  React.useEffect(() => {
    dispatch(
      getCarriersListReq({
        queryParams: {
          with: ["driver_groups"],
        },
      })
    );
  }, []);

  const columns: ColumnsType<any> = [
    Table.SELECTION_COLUMN,
    {
      title: "Unit",
      key: "unit",
      dataIndex: "unit",
      sortOrder: getOrderFromTableParams("unit", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.driver - b.driver,
        multiple: 5,
      },
      render: (name, record, index) => {
        return (
          <div
            className="orange ubuntu pointer"
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => {
              navigate(`/client/units/${record.id}`);
            }}
          >
            <div
              className="driver-marker"
              style={{
                marginRight: 10,
                backgroundColor: record.color,
              }}
            />
            <div>{`${record.id}`}</div>
          </div>
        );
      },
      width: "10%",
      ellipsis: true,
    },
    {
      title: "Driver",
      key: "driver",
      dataIndex: "driver",
      sortOrder: getOrderFromTableParams("driver", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.driver - b.driver,
        multiple: 5,
      },
      render: (name, record, index) => {
        return (
          <div
            className="orange ubuntu pointer"
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => {
              navigate(`/client/drivers/${record.driver?.id}`);
            }}
          >
            <div
              className="driver-marker"
              style={{
                marginRight: 10,
                backgroundColor: record.color,
              }}
            />
            <div>
              {`${record?.driver?.first_name} ${record?.driver?.last_name}`}
            </div>
          </div>
        );
      },
      width: "20%",
      ellipsis: true,
    },
    {
      title: "Truck ID",
      dataIndex: "truck_id",
      key: "truck_id",
      sortOrder: getOrderFromTableParams("truck_id", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.truck_id - b.truck_id,
        multiple: 5,
      },
      render: (name, record, index) => {
        return (
          <div
            className="ubuntu"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {`${record?.vehicle?.identificator}`}
          </div>
        );
      },
      ellipsis: true,
      width: "15%",
    },
    {
      title: "Break",
      dataIndex: "break",
      key: "break",
      width: "10%",

      render: (name, record, index) => {
        return (
          <div
            className="ubuntu orange"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {record?.break}
            {countV + index}
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Drive",
      dataIndex: "drive",
      key: "drive",
      width: "10%",

      render: (name, record, index) => {
        return (
          <div
            className="ubuntu"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {record?.drive}
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Shift",
      dataIndex: "shift",
      key: "shift",
      width: "10%",

      render: (name, record, index) => {
        return (
          <div
            className="ubuntu"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {record?.shift}
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Violations",
      dataIndex: "violations",
      key: "violations",
      width: "10%",

      render: (name, record, index) => {
        return (
          <div
            className="ubuntu"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {record?.violations}
          </div>
        );
      },
      ellipsis: true,
    },

    {
      title: "Speed",
      dataIndex: "speed",
      sortOrder: getOrderFromTableParams("speed", tableParams),
      key: "speed",
      // sorter: {
      //   compare: (a: any, b: any) => a.cdl_state - b.cdl_state,
      //   multiple: 5,
      // },
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        return <div className="ubuntu">{info[0]?.speed}</div>;
      },
      filters: [{ value: "Driving", key: 0 }].map((st: any) => {
        return {
          text: st.value,
          value: st.key,
        };
      }),

      filterSearch: true,
      filteredValue: tableParams?.filters?.speed || null,
    },
    {
      title: "Status",
      dataIndex: "status",
      sortOrder: getOrderFromTableParams("status", tableParams),
      key: "status",

      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        const status = carrierData?.status?.find(
          (st: any) => st.key === record?.status
        );

        return <div>{status?.value}</div>;
      },
      filters: [{ value: "Driving", key: 0 }].map((st: any) => {
        return {
          text: st.value,
          value: st.key,
        };
      }),

      filterSearch: true,
      filteredValue: tableParams?.filters?.speed || null,
    },
    {
      title: "Violations",
      dataIndex: "violations",
      key: "violations",
      width: "10%",
      filters: [
        { value: "Critical", key: 0 },
        { value: "No", key: 1 },
      ].map((st: any) => {
        return {
          text: st.value,
          value: st.key,
        };
      }),

      filterSearch: true,
      filteredValue: tableParams?.filters?.speed || null,
      render: (name, record, index) => {
        return (
          <div
            className="ubuntu orange"
            style={{
              color: "#141029",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {record?.violations ? (
              <span className="icon-fi-rr-check orange" />
            ) : (
              <span className="icon-fi-rr-minus-small" />
            )}
          </div>
        );
      },
      ellipsis: true,
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
                        className="icon-fi-rr-user"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      Activate Unit
                    </div>
                  ),
                },
                {
                  key: "4",
                  label: (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span
                        className="icon-fi-rr-user"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      Deactivate Unit
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
      getUnitListReq({
        queryParams: {
          ...getParams(tableParams),
          with: ["terminal", "carrier", "group", "vehicle"],
        },
      })
    );
  }, [tableParams]);

  const { checkPermission } = usePermissions();

  return (
    <>
      {checkPermission(AllPermissionsType.DRIVER_LIST) ? (
        <>
          {" "}
          <Row>
            <SetPassword
              currentItem={currentCarrier}
              isOpen={accautnModalOpen}
              toggleModal={(status: any) => setAccauntModalOpen(status)}
              onSubmit={(payload: any) => {
                dispatch(
                  getCarrierPasswordReq({
                    data: payload,
                    onSuccess: () => {
                      dispatch(
                        getCarriersListReq({
                          queryParams: getParams(tableParams),
                        })
                      );
                      setAccauntModalOpen(false);
                    },
                  })
                );
              }}
            />

            <Col span={12} style={{ marginBottom: 30 }}>
              <InputPageTitle fields={["Units"]} route="/client/units" units />
            </Col>
            {/* <Col span={24} style={{ marginBottom: 25 }}>
              <GoogleMapTracker />
            </Col> */}
            <Col span={24} style={{ marginBottom: 25 }}>
              <OpenLayerMap />
            </Col>
            <Col
              span={24}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginBottom: 25,
              }}
            >
              <InputSearch
                onChange={setSearchParam}
                onClear={clearOrderFilters}
                hasFilters={hasFiltersOrOrder}
              />
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="icon-fi-rr-plus ubuntu orange" />
                <div
                  className="orange ubuntu"
                  style={{
                    fontWeight: 500,
                    fontSize: 12,
                    marginLeft: 8,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate(`${location.pathname}/create`);
                  }}
                >
                  Create Unit
                </div>
              </div>
              <div style={{ marginLeft: 25, display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
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
          <Table
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={units.map((carrier: any, index: any) => {
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
        </>
      ) : (
        <NoPermission />
      )}
    </>
  );
};
