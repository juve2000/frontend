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
  getMechanicListReq,
  // getCarrierPasswordReq,
} from "../../../actions/mechanic";
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

export const MechanicsList: React.FC = () => {
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
  const mechanics = useSelector((state: any) => state.mechanic.mechanicList);
  const carriers = useSelector((state: any) => state.carrier.carrierList);

  const count = useSelector((state: any) => state.mechanic.count);
  const loading = useSelector((state: any) => state.mechanic.loading);
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
      title: "Full Name",
      key: "first_name",
      dataIndex: "first_name",
      sortOrder: getOrderFromTableParams("first_name", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.first_name - b.first_name,
        multiple: 5,
      },
      render: (name, record, index) => {
        return (
          <div
            className="orange ubuntu"
            onClick={() => {
              navigate(`${location.pathname}/${record.id}`);
            }}
          >
            {`${record.first_name} ${record.last_name}`}
          </div>
        );
      },
      width: 300,
      ellipsis: true,
    },
    {
      title: "Username",
      dataIndex: "login",
      key: "login",
      sortOrder: getOrderFromTableParams("login", tableParams),
      sorter: {
        compare: (a: any, b: any) => a.login - b.login,
        multiple: 5,
      },
      render: (name, record, index) => {
        return (
          <div
            className="ubuntu"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            {`${record?.login}`}
          </div>
        );
      },
      ellipsis: true,
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
            {`${record?.email}`}
          </div>
        );
      },
      ellipsis: true,
      width: "20%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: "15%",
      sortOrder: getOrderFromTableParams("phone", tableParams),

      sorter: {
        compare: (a: any, b: any) => a.phone - b.phone,
        multiple: 5,
      },
      render: (name, record, index) => {
        return (
          <div
            className="ubuntu"
            style={{ color: "#141029", cursor: "pointer" }}
          >
            <InputCallToCall phone={record.phone} />
          </div>
        );
      },
      ellipsis: true,
    },

    {
      title: "Carrier",
      dataIndex: "carrier",
      sortOrder: getOrderFromTableParams("carrier", tableParams),
      key: "carrier",
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
            onClick={() => {
              navigate(`/client/carriers/${record?.carrier?.id}`);
            }}
          >
            <LogoCarrier
              logo={record?.carrier?.logo}
              onClick={() => null}
              styles={{ width: 30, height: 30 }}
            />
            <div style={{ marginLeft: 20 }}>{`${record?.carrier?.name}`}</div>
          </div>
        );
      },
      filterDropdown: () => {
        return (
          <div style={{ padding: 10 }}>
            <div>
              <Select
                style={{ width: 200, marginBottom: 20 }}
                value={tableParams.filters?.carrier}
                onChange={(value) => {
                  clearCustomFilter("group");
                  setCustomFilter("carrier", value);
                }}
              >
                {carriers?.map((carrier: any) => {
                  return (
                    <Select.Option key={carrier.id} value={carrier.id}>
                      {carrier.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
            <Button
              style={{ width: 80, height: 40 }}
              className="orange"
              onClick={() => {
                clearCustomFilter("carrier");
                clearCustomFilter("group");
              }}
            >
              Reset
            </Button>
          </div>
        );
      },

      filteredValue: tableParams?.filters?.carrier || null,
    },

    {
      title: "status",
      dataIndex: "status",
      sortOrder: getOrderFromTableParams("status", tableParams),
      key: "status",
      sorter: {
        compare: (a: any, b: any) => a.mcnumber - b.mcnumber,
        multiple: 5,
      },
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
                      onClick={() => {}}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span
                        className="icon-fi-rr-trash"
                        style={{ marginRight: "10px" }}
                      ></span>{" "}
                      Delete
                    </div>
                  ),
                },
              ],
            }}
          >
            <span className="orange icon-fi-rr-menu-dots"></span>
          </Dropdown>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(
      getMechanicListReq({
        queryParams: {
          ...getParams(tableParams),
          with: ["terminal", "carrier", "group"],
        },
      })
    );
  }, [tableParams]);

  return (
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
            fields={["Mechanic (Support Personnel)"]}
            route="/client/mechanic"
            drivers
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
              Create
            </div>
          </div>
          <div style={{ marginLeft: 20, display: "flex" }}>
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
                marginLeft: 10,
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
        dataSource={mechanics?.map((carrier: any, index: any) => {
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
  );
};
