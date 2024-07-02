import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { DownloadItem } from "../common/download/DownloadItem";

export const DownloadSection = (props: any) => {
  return (
    <Row>
      <Col sm={{ span: 24 }}>
        <DownloadItem />
      </Col>
    </Row>
  );
};
