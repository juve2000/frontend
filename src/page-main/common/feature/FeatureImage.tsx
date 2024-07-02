import React, { useState } from "react";
import { Row, Col, Collapse } from "antd";

import Frame1 from "../../../img/frame1.png";
import Frame2 from "../../../img/frame2.png";
import driver0 from "../../../img/features/driver0.png";

import driver1 from "../../../img/features/driver1.png";
import driver2 from "../../../img/features/driver2.png";
import driver3 from "../../../img/features/driver3.png";
import driver4 from "../../../img/features/driver4.png";
import driver5 from "../../../img/features/driver5.png";

import web0 from "../../../img/features/web0.png";
import web1 from "../../../img/features/web1.png";
import web2 from "../../../img/features/web2.png";
import web3 from "../../../img/features/web3.png";
import web4 from "../../../img/features/web4.png";

export const FeaturesImage = (props: any): React.ReactElement => {
  const { activeFrame, width = "100%", type = "driver" } = props;

  const getImageDriver = (frame: any) => {
    if (!frame) {
      return driver0;
    }
    switch (frame) {
      case "1":
        return driver1;
      case "2":
        return driver2;
      case "3":
        return driver3;
      case "4":
        return driver4;
      case "5":
        return driver5;
      default:
        return driver0;
    }
  };
  const getImageWeb = (frame: any) => {
    console.log("web", frame);
    if (!frame) {
      return web0;
    }
    switch (frame) {
      case "1":
        return web1;
      case "2":
        return web2;
      case "3":
        return web3;
      case "4":
        return web4;
      default:
        return web0;
    }
  };

  const image =
    type === "driver" ? getImageDriver(activeFrame) : getImageWeb(activeFrame);

  // const isFrame = activeFrame ? image : type === "driver" ? driver0 : web0;

  React.useEffect(() => {
    console.log("active frame", activeFrame);
  }, [activeFrame]);

  return (
    <Row className="features-info-container jakarta">
      <Col
        xl={{ span: 24 }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {<img src={image} style={{ width }} alt={"frame"} />}
      </Col>
    </Row>
  );
};
