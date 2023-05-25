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
      style={{ display: "flex", alignItems: "center", padding: "12px 0px" }}
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
                alignItems: "center",
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
                  margin: "0px 16px",
                  fontWeight: "normal",
                }}
                className="orange"
              >
                All {field}
              </div>
            </div>
          );
        }
        return (
          <div style={{ fontSize: 14, margin: "0px 16px" }} className="orange">
            {field}
          </div>
        );
      })}
    </div>
  );
};
