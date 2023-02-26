import React, { useState } from "react";
import { Form, Input, Col, Row } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { CommonInputV2 } from "./index";

export const InputTitleDynamic = ({
  label = "",
  items = [],
  onClick,
  itemName,
  currentIndex,
  onAdd,
  onRemove,
}: any) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className="input-title-item ubuntu"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Row style={{ width: "100%" }}>
        <Col span={6}>{label}</Col>
        <Col span={14} style={{ display: "flex" }}>
          {items?.length &&
            items.map((item: any, i: any) => {
              return (
                <div
                  key={i}
                  onMouseEnter={() => setOnHover(true)}
                  onMouseLeave={() => setOnHover(false)}
                  onClick={() => onClick(item.key)}
                  style={{ margin: "0px 8px 0px 0px", cursor: "pointer" }}
                  className={currentIndex === item.key ? "orange" : ""}
                >
                  {itemName} {i + 1}
                </div>
              );
            })}
        </Col>
        <Col span={4}>
          <div
            onClick={onAdd}
            className="orange ubuntu"
            style={{ cursor: "pointer" }}
          >
            Add {itemName}
          </div>
        </Col>
      </Row>
    </div>
  );
};
