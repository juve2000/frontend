import React from "react";
import { Row, Col, Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const items = [
  {
    title: "Centralized Control & Monitoring:",
    data: [
      {
        dataTitle: "Driver & Fleet Activity",
        dataText: `Track driver location, HOS status, logs, DVIRs, and duty cycles in real-time from a single platform.`,
      },
      {
        dataTitle: "Document Management",
        dataText:
          " Securely store and access all driver and vehicle documents electronically for seamless recordkeeping and compliance.",
      },
      {
        dataTitle: "Alerts & Notifications",
        dataText: `
        Receive proactive alerts for potential HOS violations, maintenance needs, and other critical events.
          `,
      },
    ],
    key: 1,
  },
  {
    title: "Centralized Control & Monitoring:",
    data: [
      {
        dataTitle: "Driver & Fleet Activity",
        dataText: `Track driver location, HOS status, logs, DVIRs, and duty cycles in real-time from a single platform.`,
      },
      {
        dataTitle: "Document Management",
        dataText:
          " Securely store and access all driver and vehicle documents electronically for seamless recordkeeping and compliance.",
      },
      {
        dataTitle: "Alerts & Notifications",
        dataText: `
        Receive proactive alerts for potential HOS violations, maintenance needs, and other critical events.
          `,
      },
    ],
    key: 2,
  },
  {
    title: "Centralized Control & Monitoring:",
    data: [
      {
        dataTitle: "Driver & Fleet Activity",
        dataText: `Track driver location, HOS status, logs, DVIRs, and duty cycles in real-time from a single platform.`,
      },
      {
        dataTitle: "Document Management",
        dataText:
          " Securely store and access all driver and vehicle documents electronically for seamless recordkeeping and compliance.",
      },
      {
        dataTitle: "Alerts & Notifications",
        dataText: `
        Receive proactive alerts for potential HOS violations, maintenance needs, and other critical events.
          `,
      },
    ],
    key: 3,
  },
  {
    title: "Centralized Control & Monitoring:",
    data: [
      {
        dataTitle: "Driver & Fleet Activity",
        dataText: `Track driver location, HOS status, logs, DVIRs, and duty cycles in real-time from a single platform.`,
      },
      {
        dataTitle: "Document Management",
        dataText:
          " Securely store and access all driver and vehicle documents electronically for seamless recordkeeping and compliance.",
      },
      {
        dataTitle: "Alerts & Notifications",
        dataText: `
        Receive proactive alerts for potential HOS violations, maintenance needs, and other critical events.
          `,
      },
    ],
    key: 4,
  },
];

export const FaqItem = (props: any): React.ReactElement => {
  return (
    <Row>
      <Col lg={{ span: 6 }} sm={{ span: 0 }}></Col>
      <Col lg={{ span: 12 }} sm={{ span: 24 }}>
        <div className="faq-item-container">
          <div className="faq-title">F.A.Q.</div>
          <div className="faq-subTitle">Frequently Asked Questions</div>
          <div className="faq-description">
            In just few easy step, you are all set to manage your business
            finances. Manage all expenses with Spend.In all in one place.
          </div>
          <div className="faq-options-container">
            <Collapse
              defaultActiveKey={["1"]}
              accordion
              ghost
              expandIcon={() => <PlusOutlined color="#FFAB00" />}
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
          </div>
        </div>
      </Col>
    </Row>
  );
};
