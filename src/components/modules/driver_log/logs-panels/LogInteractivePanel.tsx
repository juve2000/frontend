import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { Row, Col, DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import marker from "../../../../img/marker.svg";
import chat from "../../../../img/chat.svg";
import profile from "../../../../img/calendar.svg";
import carrier from "../../../../img/carrier.svg";
import note from "../../../../img/note.svg";

import "./log-top-panel.scss";

export const LogInteractivePanel = (props: any) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Row>
      <Col
        span={24}
        className="ubuntu top-log-container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Row>
          <Col
            style={{ display: "flex", alignItems: "center" }}
            className="interactive-log-item-container-main"
          >
            <img src={marker} alt="marker" />
            <span className="orange ubuntu top-log-item">Call</span>
          </Col>
          <Col
            style={{ display: "flex", alignItems: "center" }}
            className="interactive-log-item-container"
          >
            <img src={chat} alt="chat" />
            <span className="orange ubuntu top-log-item">Chat</span>
          </Col>
          <Col
            style={{ display: "flex", alignItems: "center" }}
            className="interactive-log-item-container"
          >
            <img src={profile} alt="profile" />
            <span className="orange ubuntu top-log-item">Profile</span>
          </Col>
          <Col
            style={{ display: "flex", alignItems: "center" }}
            className="interactive-log-item-container"
          >
            <img src={carrier} alt="carrier" />
            <span className=" ubuntu top-log-item">Carrier: C1</span>
          </Col>
          <Col
            style={{ display: "flex", alignItems: "center" }}
            className="interactive-log-item-container"
          >
            <img src={note} alt="chat" />
            <span className=" ubuntu top-log-item">Note:</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <DatePicker onChange={onChange} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
