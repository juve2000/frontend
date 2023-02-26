import React, { useState } from "react";
import { Form, Input, Col, Row } from "antd";
import { CommonInputV2 } from "./index";

export const InputTitle = (props: any) => {
  const { label } = props;
  return <div className="input-title-item ubuntu">{label}</div>;
};
