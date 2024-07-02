import React, { useState } from "react";
import { Row, Col, Button, Drawer, InputNumber } from "antd";
import { uuid } from "@gilbarbara/helpers";

import image1 from "../../../img/shop/image1.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  setCurrentShopItem,
  updateCart,
} from "../../../actions";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";

import "./shop-custom.scss";

export const CartTotal = (props: any): React.ReactElement => {
  const [open, setisOpen] = useState(false);
  const [cartOpen, setIsCartOpen] = useState(false);

  const dispatch = useDispatch();
  const currentShopItem =
    useSelector((state: any) => state?.shop?.currentShopItem) || {};
  const shop = useSelector((state: any) => state?.shop);

  const totalPrice = shop?.cart
    ?.reduce((acc: any, item: any) => {
      return acc + item?.quantity * parseFloat(item?.price);
    }, 0)
    .toFixed(2);

  return (
    <Row className={"jakarta"}>
      <Col
        xl={{ span: 24 }}
        style={{ height: "100%" }}
        className="cart-item-total-details-container"
      >
        <div className="cart-total-title-container">
          <div className="title">Sub Total</div>
          <div className="price">$ 23.00</div>
        </div>
        <div className="cart-total-item-description">
          No need to pay manually, we provide automatic invoice payment service!
          Set a payment schedule and you're done, it's that easy!
        </div>
        <div className="cart-item-total-costs">
          <div className="cost-container">
            <div>Subtotal:</div>
            <div>$ {totalPrice}</div>
          </div>
        </div>
        <div className="cart-item-total-costs">
          <div className="cost-container">
            <div>Estimated shipping:</div>
            <div>$0.00</div>
          </div>
        </div>
        <div className="cart-item-total-costs">
          <div className="cost-container jakarta-bold">
            <div>Total:</div>
            <div>$ {totalPrice}</div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Button className="black">Checkout</Button>

          <Button className="orange">Checkout</Button>
        </div>
      </Col>
    </Row>
  );
};
