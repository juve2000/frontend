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
  onValidate,
}: any) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className="input-title-item ubuntu"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Row style={{ width: "100%" }}>
        <Col
          span={6}
          className="input-title-item ubuntu"
          style={{ padding: "0px 0px", marginBottom: 0 }}
        >
          {label}
        </Col>
        <Col span={14} style={{ display: "flex" }}>
          <Row style={{ width: "100%", display: 'flex', alignItems: 'center' }}>
            {items?.length &&
              items.map((item: any, i: any) => {
                return (
                  <Col key={i} span={4}>
                    <div
                      key={i}
                      onMouseEnter={() => setOnHover(true)}
                      onMouseLeave={() => setOnHover(false)}
                      onClick={() => {
                        onValidate(() => {
                          onClick(item.key);
                        });
                      }}
                      style={{ margin: "0px 8px 0px 0px", cursor: "pointer" }}
                      className={currentIndex === item.name ? "orange" : ""}
                    >
                      {itemName} {i + 1}
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Col>
        <Col span={4}>
          <div
            onClick={() => {
              onAdd();
            }}
            className="orange ubuntu"
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              height: '100%'
            }}
          >
            <span
              className="icon-fi-rr-plus-small"
              style={{ marginRight: 8 }}
            ></span>{" "}
            <span>Add {itemName}</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};
