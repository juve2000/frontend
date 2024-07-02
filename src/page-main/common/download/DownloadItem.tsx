import React from "react";
import { Row, Col } from "antd";
import Phone from "../../../img/download/phone.png";
import Apple from "../../../img/download/apple.png";
import Google from "../../../img/download/google.png";

export const DownloadItem = (props: any): React.ReactElement => {
  return (
    <Row>
      <Col md={{ span: 12 }} sm={{ span: 24 }}>
        <div className="download-title-container">
          <div className="download-title">Download App</div>
          <div className="download-subTitle">Android & iOS App</div>
          <div className="download-description">
            In just few easy step, you are all set to manage your business
            finances. Manage all expenses with Spend.In all in one place.
          </div>
        </div>
        <div style={{ display: "flex" }} className="stores-wrapper">
          <img src={Apple} alt="apple" className="apple-download" />
          <img src={Google} alt="google" className="google-download" />
        </div>
      </Col>
      <Col
        md={{ span: 12 }}
        sm={{ span: 24 }}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
        className="download-item-relative-container"
      >
        <div className="download-image-container">
          <img src={Phone} alt="phone" style={{ width: "100%" }} />
        </div>
      </Col>
    </Row>
  );
};
