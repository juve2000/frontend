import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Input, Col, Row } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";

import { CommonInputV2 } from "./index";

export const InputPageTitle = (props: any) => {
  const navigate = useNavigate();

  return (
    <div
      className="ubuntu"
      style={{
        display: "flex",
        alignItems: "baseline",
        padding: "12px 0px",
        // marginLeft: "-30px",
      }}
    >
      {props.fields.map((field: any, i: any) => {
        if (i === 0) {
          return (
            <div
              style={{
                fontSize: 26,
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "baseline",
              }}
              onClick={() => {
                navigate(props.route);
              }}
            >
              <span style={{ marginRight: 10 }}>
                <CaretLeftOutlined style={{ fontSize: 20 }} />
              </span>
              {field}
              <div
                style={{
                  fontSize: 14,
                  margin: "0px 8px",
                  fontWeight: "normal",
                }}
              >
                <span style={{ fontWeight: "bold" }}>/</span>{" "}
                <span className="orange">All {field}</span>
              </div>
            </div>
          );
        }
        return (
          <div style={{ fontSize: 14, margin: "0px 8px" }}>
            <span style={{ fontWeight: "bold" }}>/</span>{" "}
            <span className="orange">{field}</span>
          </div>
        );
      })}
    </div>
  );
};
