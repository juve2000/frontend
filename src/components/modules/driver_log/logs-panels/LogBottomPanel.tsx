import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col, DatePicker } from "antd";

import "./log-top-panel.scss";

const mock = [
  {
    data: "1/16/2024",
    worked: 0,
    droven: 0,
  },
  {
    data: "1/17/2024",
    worked: 0,
    droven: 0,
  },
  {
    data: "1/18/2024",
    worked: 0,
    droven: 0,
  },
  {
    data: "1/19/2024",
    worked: 0,
    droven: 0,
  },
  {
    data: "1/20/2024",
    worked: 0,
    droven: 0,
  },
  {
    data: "1/21/2024",
    worked: 0,
    droven: 0,
  },
  {
    data: "1/22/2024",
    worked: 0,
    droven: 0,
  },
];

export const LogBottomPanel = (props: any) => {
  return (
    <Row style={{ width: "100%" }}>
      <Col
        span={24}
        className="ubuntu top-log-container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Row style={{ width: "100%" }}>
          <Col style={{ fontWeight: "bold" }} span={3}>
            <div className="log-bottom-panel-item"></div>
            <div className="log-bottom-panel-item-header log-bottom-panel-item">
              Worked Hours
            </div>
            <div className="log-bottom-panel-item-header log-bottom-panel-item">
              Droven Hours
            </div>
          </Col>
          {mock.map((item: any, i: number) => {
            return (
              <Col key={i} span={3} style={{ fontWeight: "bold" }}>
                <div className="log-bottom-panel-item log-bottom-panel-item-data">
                  {item.data}
                </div>
                <div className="log-bottom-panel-item log-bottom-panel-item-data">
                  {item.worked + i + 1}h 1{i}m
                </div>
                <div className="log-bottom-panel-item log-bottom-panel-item-data">
                  {item.droven + i + 1}h {i + 1}m
                </div>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Col>
    </Row>
  );
};
