import React, { useEffect, useState } from "react";
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
  getDriverAlertsReq,
  // getCarrierPasswordReq,
} from "../../../actions/alerts";
import { getParams } from "../../../routes/utils";
import { InputSearch } from "../../common/doubleinput/InputSearch";
import { getOrderFromTableParams } from "../../../hooks/utils";
import { InputPageTitle } from "../../common/doubleinput/InputPageTitle";
import { SetPassword } from "./modals/CarrierSetPassword";
import { InputCallToCall } from "../../common/doubleinput/InputCallToCall";

import ResetSort from "../../../img/resetSort.svg";
import ResetFilter from "../../../img/resetFilter.svg";
import { carrierData } from "./constant";
import { LogoCarrier } from "../../common/LogoCarrier";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../role/constant";
import { NoPermission } from "../../common/NoPermission";
import { BurgerIcon } from "../../header/logo";
import dayjs from "dayjs";

export const AlertsList: React.FC = () => {
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
  const alerts = useSelector((state: any) => state.alerts.alerts);
  const carriers = useSelector((state: any) => state.carrier.carrierList);

  const count = useSelector((state: any) => state.driver.count);
  const loading = useSelector((state: any) => state.driver.loading);
  const [accautnModalOpen, setAccauntModalOpen] = useState(false);
  const [currentCarrier, setCurrentCarrier] = useState({
    id: "",
    name: "",
  });

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
      title: "Date & Time",
      key: "created_at",
      dataIndex: "created_at",
      sortOrder: getOrderFromTableParams("created_at", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.created_at - b.created_at,
        multiple: 5,
      },
      render: (value, record, index) => {
        console.log("record", record);
        const dateParsed = dayjs(record.license_expiration);

        return (
          <div
            className="ubuntu"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span>{dateParsed.format("MM-DD-YYYY")} </span>
            <span
              className="icon-fi-rr-calendar"
              style={{ marginLeft: "10px" }}
            ></span>
          </div>
        );
      },
      width: "20%",
      ellipsis: true,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      sortOrder: getOrderFromTableParams("email", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.email - b.email,
        multiple: 5,
      },
      render: (name, record, index) => {
        return (
          <div
            className="ubuntu"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {record?.type}
          </div>
        );
      },
      ellipsis: true,
      width: "15%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "15%",
      // render: (value) => `${value.mcnumber}`,
      // sortOrder: getOrderFromTableParams("phone", tableParams),

      // sorter: {
      //   compare: (a: any, b: any) => a.phone - b.phone,
      //   multiple: 5,
      // },
      render: (name, record, index) => {
        return (
          <div
            className="ubuntu orange"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {record?.name}
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
      // sorter: true,
      render: (value, record, index) => {
        return <div>{record?.source}</div>;
      },
      width: "10%",
      ellipsis: true,
    },
    {
      title: "Priority",
      dataIndex: "priority",
      sortOrder: getOrderFromTableParams("priority", tableParams),
      key: "priority",
      sorter: {
        compare: (a: any, b: any) => a.cdl_state - b.cdl_state,
        multiple: 5,
      },
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        const state = carrierData.states.find(
          (st) => st.key === +record.cdl_state
        );
        return <div className="ubuntu">{record.proprity}</div>;
      },
      filters: carrierData.states.map((st: any) => {
        return {
          text: st.value,
          value: st.key,
        };
      }),

      filterSearch: true,
      filteredValue: tableParams?.filters?.cdl_state || null,
    },
    {
      title: "Text",
      dataIndex: "text",
      sortOrder: getOrderFromTableParams("text", tableParams),
      key: "text",
      sorter: {
        compare: (a: any, b: any) => a.carrier - b.carrier,
        multiple: 5,
      },
      width: "20%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div
            className="orange ubuntu"
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            // onClick={() => {
            //   navigate(`/client/carriers/${record?.carrier?.id}`);
            // }}
          >
            {record?.text}
          </div>
        );
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

      filteredValue: tableParams?.filters?.carrier || null,
    },
    {
      title: "Working on",
      dataIndex: "group",
      sortOrder: getOrderFromTableParams("group", tableParams),
      key: "group",
      sorter: {
        compare: (a: any, b: any) => a.group - b.group,
        multiple: 5,
      },
      width: "20%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div
            className="orange ubuntu"
            style={{ cursor: "pointer" }}
            // onClick={() => {
            //   navigate(`/client/driver_groups/${record?.group?.id}`);
            // }}
          >
            {record?.working}
          </div>
        );
      },
      // filterDropdown: () => {
      //   const groups =
      //     carriers.find(
      //       (carrier: any) => carrier.id === tableParams?.filters?.carrier
      //     )?.driver_groups || [];
      //   return (
      //     <div style={{ padding: 10 }}>
      //       <div>
      //         <Select
      //           style={{ width: 200, marginBottom: 20 }}
      //           value={tableParams.filters?.group}
      //           placeholder="Select Group"
      //           onChange={(value) => {
      //             setCustomFilter("group", value);
      //           }}
      //         >
      //           {groups?.map((carrier: any) => {
      //             return (
      //               <Select.Option key={carrier.id} value={carrier.id}>
      //                 {carrier.name}
      //               </Select.Option>
      //             );
      //           })}
      //         </Select>
      //       </div>
      //       <Button
      //         style={{ width: 80 }}
      //         className="orange"
      //         onClick={() => {
      //           clearCustomFilter("group");
      //         }}
      //       >
      //         Reset
      //       </Button>
      //     </div>
      //   );
      // },

      filteredValue: tableParams?.filters?.group || null,
    },
  ];

  useEffect(() => {
    dispatch(getDriverAlertsReq({}));
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
            <Col span={12}>
              <InputPageTitle
                fields={["Alerts"]}
                route="/client/alerts"
                alerts
              />
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
            dataSource={alerts.map((carrier: any, index: any) => {
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
