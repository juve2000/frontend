import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "antd";

import image1 from "../../../img/shop/image1.png";

export const DrawerShopItem = (props: any): React.ReactElement => {
  const {
    image = image1,
    title = `Automatic Invoice Payment`,
    description = `No need to pay manually, we provide automatic invoice payment
            service! Set a payment schedule and you're done, it's that easy!`,
    price = "23.00",
    id,
  } = props;

  const dispatch = useDispatch();
  const shop = useSelector((state: any) => state?.shop) || {};

  return (
    <Row className={"shop-item-container"}>
      <Col xl={{ span: 24 }} className={"shop-item-image-container"}>
        <img src={image1} />
      </Col>
      <Col xl={{ span: 24 }}>
        <div className={"shop-item-data-container"}>
          <div className={"shop-item-data-title"}>${title}</div>
          <div className={"shop-item-data-text"}>${description}</div>
          <div className={"shop-item-data-price-container"}>
            <div className={"shop-item-data-price"}>${price}</div>
            <div className={"shop-item-data-price-btn"}>
              <Button className="orange">Add to cart</Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
