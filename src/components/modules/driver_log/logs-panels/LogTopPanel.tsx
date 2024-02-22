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
import quarterClock from "../../../../img/quarter-clock.svg";
import userTime from "../../../../img/user-time.svg";
import arrowLeft from "../../../../img/arrow-left.svg";
import arrowRight from "../../../../img/arrow-right.svg";
import dayjs from "dayjs";
import { getNextDate, getPreviousDate } from "../log-utils";

import "./log-top-panel.scss";
import { setDriverLogDate } from "../../../../actions";

export const LogTopPanel = (props: any) => {
  const driverLog = useSelector((state: any) => state.driverLog);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
            className="top-log-item-container"
          >
            <img src={marker} alt="marker" />
            <span className="orange ubuntu top-log-item">Call</span>
          </Col>
          <Col
            style={{ display: "flex", alignItems: "center" }}
            className="top-log-item-container"
          >
            <img src={chat} alt="chat" />
            <span className="orange ubuntu top-log-item">Chat</span>
          </Col>
          <Col
            style={{ display: "flex", alignItems: "center" }}
            className="top-log-item-container"
            onClick={() => {
              navigate(`/client/drivers/${driverLog?.driverData?.driver?.id}`);
            }}
          >
            <img src={profile} alt="profile" />
            <span className="orange ubuntu top-log-item">Profile</span>
          </Col>
          <Col
            style={{ display: "flex", alignItems: "center" }}
            className="top-log-item-container"
          >
            <img src={carrier} alt="carrier" />
            <span
              className=" ubuntu top-log-item"
              onClick={() => {
                navigate(`/client/carriers/${driverLog?.logUnit?.carrier.id}`);
              }}
            >
              Carrier: {driverLog?.logUnit?.carrier?.name}
            </span>
          </Col>
          <Col
            style={{ display: "flex", alignItems: "center" }}
            className="top-log-item-container"
          >
            <img src={note} alt="chat" />
            <span className=" ubuntu top-log-item">Note:</span>
          </Col>
          <Col
            style={{ display: "flex", alignItems: "center" }}
            className="top-log-item-container"
          >
            <img src={quarterClock} alt="clock" />
            <span className=" ubuntu top-log-item">Time Zone:</span>
          </Col>
        </Row>
        <Row>
          <Col
            style={{ display: "flex", alignItems: "center", marginRight: 50 }}
            className="top-log-item-container"
          >
            <img src={userTime} alt="clock" />
            <span className=" ubuntu top-log-item">CO-Driver: ()</span>
          </Col>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ marginRight: 10, cursor: "pointer" }}
              onClick={() => {
                dispatch(
                  setDriverLogDate(getPreviousDate(driverLog?.driverLogDate))
                );
              }}
            >
              <img src={arrowLeft} alt="left" />
            </div>
            <DatePicker
              onChange={(v, dateString) => {
                dispatch(setDriverLogDate(dateString));
              }}
              defaultValue={dayjs(driverLog?.driverLogDate)}
              value={dayjs(driverLog?.driverLogDate)}
            />
            <div
              style={{ marginLeft: 10, cursor: "pointer" }}
              onClick={() => {
                dispatch(
                  setDriverLogDate(getNextDate(driverLog?.driverLogDate))
                );
              }}
            >
              <img src={arrowRight} alt="right" />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
