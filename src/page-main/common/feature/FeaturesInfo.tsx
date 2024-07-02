import React, { useState } from "react";
import { Row, Col, Collapse } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import { FeaturesImage } from "./FeatureImage";

const { Panel } = Collapse;

export const FeaturesInfo = (props: any): React.ReactElement => {
  const {
    mainInfoTitle = "Fleet Platform",
    mainInfoSubTitle = "Our features for Web",
    bodyTitle = "Core ELD Web Platform: Empowering Fleet Management with Real-Time Visibility",
    activeFrame,
    setActiveFrame,
    items = [],
    type,
  } = props;

  return (
    <Row className="features-info-container jakarta">
      <Col xl={{ span: 24 }}>
        <div className="featureInfoTitle jakarta-bold">
          <div className="title">{mainInfoTitle}</div>
          <div className="subTitle">{mainInfoSubTitle}</div>
        </div>
      </Col>
      <Row style={{ width: "100%" }}>
        <Col xl={{ span: 12 }} className={"featureInfoBody jakarta"}>
          <div className="title jakarta-bold">{bodyTitle}</div>
          <Collapse
            defaultActiveKey={["1"]}
            activeKey={activeFrame}
            accordion
            ghost
            expandIcon={() => <PlusOutlined color="#FFAB00" />}
            onChange={(key) => {
              setActiveFrame(key);
            }}
          >
            {items?.map((item: any, i: any) => {
              return (
                <Panel header={item?.title} key={item?.key}>
                  {item?.data?.map((itemData: any, y: any) => {
                    return (
                      <div className={"collapse-item-container"}>
                        {itemData?.dataTitle ? (
                          <div className={"collapse-item-data-title"}>
                            {itemData?.dataTitle}:
                          </div>
                        ) : null}
                        <div className={"collapse-item-data-text"}>
                          {itemData?.dataText}
                        </div>
                      </div>
                    );
                  })}
                </Panel>
              );
            })}
          </Collapse>
        </Col>
        <Col
          xl={{ span: 12 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <FeaturesImage activeFrame={activeFrame} type={type} />
        </Col>
      </Row>
    </Row>
  );
};
