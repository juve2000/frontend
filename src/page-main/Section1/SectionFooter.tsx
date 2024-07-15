import React from "react";
import { Row, Col } from "antd";
import { FooterMenu } from "../common/footer/FooterMenu";
import { FooterBottomPart } from "../common/footer/FooterBottomPart";

export const SectionFooter = (props: any) => {
  return (
    <Row className={"section-footer-container jakarta jakarta-bold"}>
      <Col span={24}>
        <FooterMenu />
      </Col>
      <Col span={24}>
        <FooterBottomPart />
      </Col>
    </Row>
  );
};
