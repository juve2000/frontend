import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Input, Col, Row } from "antd";
import { CommonInputV2 } from "./index";

export const InputPageTitle = (props: any) => {
  const navigate = useNavigate();

  return (
    <div
      className="ubuntu"
      style={{ display: "flex", alignItems: "baseline", padding: "12px 0px" }}
    >
      {props.fields.map((field: any, i: any) => {
        if (i === 0) {
          return (
            <div
              style={{ fontSize: 26, fontWeight: "bold", cursor: "pointer" }}
              onClick={() => {
                navigate(props.route);
              }}
            >
              {field}
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
