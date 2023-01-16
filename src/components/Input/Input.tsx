import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

const InputWrapped: React.FC = () => (
  <>
    <Input
      size="large"
      placeholder="large size"
      prefix={<span className="icon-icon-bag"></span>}
    />
  </>
);

export const TextInput = InputWrapped;
