import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { FaqItem } from "../common/faq/FaqItem";

export const FaqSection = (props: any) => {
  const shop = useSelector((state: any) => state?.shop);

  return (
    <Row className={"jakarta jakarta-bold faq-section-wrapper"}>
      <Col sm={{ span: 24 }}>
        <FaqItem />
      </Col>
    </Row>
  );
};
