import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col, DatePicker } from "antd";

import { Pie } from "@ant-design/plots";

import "./log-top-panel.scss";

const dataBreak = [
  {
    type: "1",
    value: 27,
    color: "#D8E3F3",
  },
  {
    type: "2",
    value: 63,
    color: "#FFAB00",
  },
];
const dataDrive = [
  {
    type: "1",
    value: 17,
    color: "#D8E3F3",
  },
  {
    type: "2",
    value: 23,
    color: "#FFAB00",
  },
];

const dataShift = [
  {
    type: "1",
    value: 7,
    color: "#D8E3F3",
  },
  {
    type: "2",
    value: 83,
    color: "#FFAB00",
  },
];

const DemoPie = (props: any) => {
  const { data = [] } = props;

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    legend: null,
    height: 100,
    width: 100,
    autoFit: false,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },

    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "AntV\nG2Plot",
      },
    },
  };
  return <Pie {...config} />;
};

export const LogDashboardPanel = (props: any) => {
  return (
    <Row style={{ width: "100%" }}>
      <Col
        span={24}
        className="ubuntu "
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Row style={{ width: "100%" }}>
          <Col
            className="log-dashboard-item"
            style={{ height: 100, width: 100 }}
            span={3}
          >
            <div>
              <DemoPie data={dataDrive} />
            </div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: 5 }}>
                Break In
              </div>
              <div>6h 40m</div>
            </div>
          </Col>
          <Col
            className="log-dashboard-item"
            style={{ height: 100, width: 100 }}
            span={3}
          >
            <div>
              <DemoPie data={dataBreak} />
            </div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: 5 }}>
                11 Hr Drive
              </div>
              <div>9h 40m</div>
            </div>
          </Col>
          <Col
            className="log-dashboard-item"
            style={{ height: 100, width: 100 }}
            span={3}
          >
            <div>
              <DemoPie data={dataShift} />
            </div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: 5 }}>
                14 Hr Shift
              </div>
              <div>6h 40m</div>
            </div>
          </Col>
          <Col
            className="log-dashboard-item"
            style={{ height: 100, width: 100 }}
            span={3}
          >
            <div>
              <DemoPie data={dataDrive} />
            </div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: 5 }}>Cycle</div>
              <div>21h 40m</div>
            </div>
          </Col>
          <Col
            className="log-dashboard-item"
            style={{ height: 100, width: 100 }}
            span={2}
          >
            <div>
              <div style={{ fontWeight: "bold", marginBottom: 5 }}>
                Miles Today
              </div>
              <div>345mi</div>
            </div>
          </Col>
          <Col
            className="log-dashboard-item"
            style={{ height: 100, width: 100 }}
            span={2}
          >
            <div>
              <div style={{ fontWeight: "bold", marginBottom: 5 }}>
                Current Status:
              </div>
              <div>Off, 2d 5h 40m</div>
            </div>
          </Col>
          <Col
            className="log-dashboard-item"
            style={{ height: 100, width: 100 }}
            span={2}
          >
            <div>
              <div style={{ fontWeight: "bold", marginBottom: 5 }}>
                Certification
              </div>
              <div style={{ color: "#69CE46" }}>Certified</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Col>
    </Row>
  );
};
