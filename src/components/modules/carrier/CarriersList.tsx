import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Table, Dropdown, Row, Col, Popover } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTableParams } from "../../../hooks/useTableParams";
import {
  getCarriersListReq,
  getCarrierPasswordReq,
} from "../../../actions/carrier";
import { getParams } from "../../../routes/utils";
import { carrierData } from "./constant";
import { InputSearch } from "../../common/doubleinput/InputSearch";
import { getOrderFromTableParams } from "../../../hooks/utils";
import { InputPageTitle } from "../../common/doubleinput/InputPageTitle";
import { SetPassword } from "./modals/CarrierSetPassword";
import { ENV } from "../../../utils/constants";
import { AllPermissionsType } from "../role/constant";
import { usePermissions } from "../../../hooks/usePermissions";

import ResetSort from "../../../img/resetSort.svg";
import ResetFilter from "../../../img/resetFilter.svg";
import { LogoCarrier } from "../../common/LogoCarrier";
import { NoPermission } from "../../common/NoPermission";
import { BurgerIcon } from "../../header/logo";

export const CarriersList: React.FC = () => {
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
  } = useTableParams({});
  const carriers = useSelector((state: any) => state.carrier.carrierList);
  const count = useSelector((state: any) => state.carrier.count);
  const loading = useSelector((state: any) => state.carrier.loading);
  const [accautnModalOpen, setAccauntModalOpen] = useState(false);
  const [currentCarrier, setCurrentCarrier] = useState({
    id: "",
    name: "",
    email: "",
  });

  React.useEffect(() => {
    dispatch(
      getCarriersListReq({
        // queryParams: getParams(tableParams),
      })
    );
  }, []);

  const columns: ColumnsType<any> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      sortOrder: getOrderFromTableParams("name", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.name - b.name,
        multiple: 5,
      },
      render: (name, record, index) => {
        return (
          <div
            className="pointer"
            onClick={() => {
              navigate(`${location.pathname}/${record.id}`);
            }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <LogoCarrier
              logo={record?.logo}
              onClick={() => null}
              styles={{ width: 40, height: 40 }}
            />

            <span style={{ marginLeft: 10 }}>{record.name}</span>
          </div>
        );
      },
      width: 300,
      ellipsis: true,
    },

    {
      title: "DOT#",
      dataIndex: "usdot",
      key: "usdot",
      // sortOrder: getOrderFromTableParams("usdot", tableParams),
      // sorter: {
      //   compare: (a: any, b: any) => a.usdot - b.usdot,
      //   multiple: 5,
      // },
      ellipsis: true,
      width: "12%",
    },
    {
      title: "MC#",
      dataIndex: "mcnumber",
      key: "mcnumber",
      width: "12%",
      // render: (value) => `${value.mcnumber}`,
      // sortOrder: getOrderFromTableParams("mcnumber", tableParams),

      // sorter: {
      //   compare: (a: any, b: any) => a.mcnumber - b.mcnumber,
      //   multiple: 5,
      // },
      ellipsis: true,
    },
    {
      title: "Authority address",
      dataIndex: ["terminals", "0"],

      // sorter: true,
      render: (value, record, index) => {
        const {
          address_index,
          country,
          state,
          number_street,
          area = "",
        } = record?.terminals?.[0]?.address || {};
        const stateFound = carrierData.states.find(
          (st: any) => st.key === state
        );
        const countryFound = carrierData.countries.find(
          (st: any) => st.key === country
        );

        return (
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 2 }}>{number_street}</div>
            <div style={{ marginRight: 2 }}>{area},</div>
            <div style={{ marginRight: 2 }}>({stateFound?.code}),</div>
            <div style={{ marginRight: 2 }}>{countryFound?.value},</div>

            <div style={{ marginRight: 2 }}>{address_index}</div>
          </div>
        );
      },
      width: "30%",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      sortOrder: getOrderFromTableParams("status", tableParams),
      key: "status",
      // sorter: {
      //   compare: (a: any, b: any) => a.mcnumber - b.mcnumber,
      //   multiple: 5,
      // },
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        const status = carrierData.status.find((st) => st.key === value);

        return <div>{status?.value}</div>;
      },
      filters: carrierData.status.map((st: any) => {
        return {
          text: st.value,
          value: st.key,
        };
      }),
      filteredValue: tableParams?.filters?.status || null,
    },
    {
      title: "Account",
      dataIndex: "account",
      // sortOrder: getOrderFromTableParams("account", tableParams),
      key: "account",
      // sorter: {
      //   compare: (a: any, b: any) => a.account - b.account,
      //   multiple: 5,
      // },
      width: "9%",
      ellipsis: true,
      render: (value, record, index) => {
        const status = carrierData.status.find((st) => st.key === value);
        return (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {record?.with_account ? (
              <span className="icon-fi-rr-check orange" />
            ) : (
              <span className="icon-fi-rr-minus-small" />
            )}
          </div>
        );
      },
      filters: carrierData.status.map((st: any) => {
        return {
          text: st.value,
          value: st.key,
        };
      }),
      filteredValue: tableParams?.filters?.account || null,
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
                    <div
                      onClick={() => {
                        console.log("record", record);
                        setCurrentCarrier({
                          id: record.id,
                          name: record.name,
                          email: record.email,
                        });
                        setAccauntModalOpen(true);
                      }}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        className="icon-fi-rr-lock"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      Set password
                    </div>
                  ),
                },
                {
                  key: "4",
                  label: (
                    <div
                      onClick={() => {
                        console.log("TODO: ACTIVATE");
                      }}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        className="icon-fi-rr-eye"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      Activate Carrier
                    </div>
                  ),
                },
                {
                  key: "5",
                  label: (
                    <div
                      onClick={() => {
                        console.log("TODO: DEACTIVATE ACTIVATE");
                      }}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        className="icon-fi-rr-lock"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      Deactivate Carrier
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
      getCarriersListReq({
        queryParams: {
          ...getParams(tableParams),
          with: ["terminals", "driver_groups"],
        },
      })
    );
  }, [tableParams]);

  const { checkPermission } = usePermissions();

  return checkPermission(AllPermissionsType.CARRIER_LIST) ? (
    <>
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
                      queryParams: {
                        ...getParams(tableParams),
                        with: ["terminals", "driver_groups"],
                      },
                    })
                  );
                  setAccauntModalOpen(false);
                },
              })
            );
          }}
        />
        <Col span={12}>
          <InputPageTitle fields={["Carriers"]} route="/carriers" carriers />
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
              Create Carrier
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
        dataSource={carriers.map((carrier: any, index: any) => {
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
        rowSelection={{ ...rowSelection, columnWidth: "40px" }}
        className="table-custom"
        //   sticky
        //   scroll={{ y: window.innerHeight - 235 }}
      />
    </>
  ) : (
    <NoPermission />
  );
};
