import React, { useState } from "react";
import { Row, Col, Button, Drawer, InputNumber, notification } from "antd";

import image1 from "../../../img/shop/image1.png";
import cartIcon from "../../../img/cart.svg";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, setCurrentShopItem } from "../../../actions";
import "./shop-custom.scss";
import { CartItem } from "./CartItem";

import { uuid } from "@gilbarbara/helpers";
import { CartTotal } from "./CartTotal";

export const ShopItem = (props: any): React.ReactElement => {
  const {
    image = image1,
    title = `Automatic Invoice Payment`,
    description = `No need to pay manually, we provide automatic invoice payment
            service! Set a payment schedule and you're done, it's that easy!`,
    price = "23.00",
    id,
    quantity = 1,
  } = props;

  const [open, setisOpen] = useState(false);
  const [cartOpen, setIsCartOpen] = useState(false);

  const dispatch = useDispatch();
  const currentShopItem =
    useSelector((state: any) => state?.shop?.currentShopItem) || {};
  const shop = useSelector((state: any) => state?.shop);

  const handleCountChange = (quantity: any) => {
    dispatch(
      setCurrentShopItem({
        ...currentShopItem,
        quantity: quantity,
      })
    );
  };

  const handleAddToCart = (item?: any) => {
    notification.success({
      message: `${item?.title || currentShopItem?.title} added to Cart`,
    });
    const cart = shop?.cart;

    if (item) {
      dispatch(
        addItemToCart([
          ...cart,
          {
            ...item,
            quantity: 1,
            id: uuid(),
          },
        ])
      );
    } else {
      dispatch(
        addItemToCart([
          ...cart,
          {
            ...currentShopItem,
            id: uuid(),
          },
        ])
      );
    }
    console.log("dispatch");
  };

  return (
    <Row className={"shop-item-container"}>
      <Col
        xl={{ span: 24 }}
        className={"shop-item-image-container"}
        onClick={() => {
          dispatch(
            setCurrentShopItem({
              ...props,
              quantity: props?.quantity || 1,
            })
          );
          setisOpen(true);
        }}
      >
        <img src={image1} />
      </Col>
      <Col xl={{ span: 24 }}>
        <div className={"shop-item-data-container"}>
          <div className={"shop-item-data-title"}>{title}</div>
          <div className={"shop-item-data-text"}>{description}</div>
          <div className={"shop-item-data-price-container"}>
            <div className={"shop-item-data-price"}>${price}</div>
            <div
              className={"shop-item-data-price-btn"}
              style={{ display: "flex" }}
            >
              <Button
                onClick={() => setIsCartOpen(true)}
                style={{ marginRight: 10 }}
              >
                Cart
              </Button>
              <Button
                className="orange"
                onClick={() => handleAddToCart({ ...props })}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </Col>
      <Drawer
        title={title}
        placement="right"
        onClose={() => setisOpen(false)}
        open={open}
        className="shop-item-drawer-container"
      >
        <Row className="shop-item-container-drawer">
          <Col xl={{ span: 12 }} sm={{ span: 24 }}>
            <img src={image1} />
          </Col>
          <Col
            xl={{ span: 12 }}
            sm={{ span: 24 }}
            className="shop-item-container-drawer"
          >
            <div className={"shop-item-data-container"}>
              <div className={"shop-item-data-title"}>{title}</div>
              <div className={"shop-item-data-text"}>{description}</div>
              <div className={"shop-item-data-price"}>${price}</div>

              <div className={"shop-item-data-price-container"}>
                <div>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={1}
                    value={currentShopItem?.quantity || 1}
                    onChange={(value) => handleCountChange(value)}
                  />
                </div>
                <div className={"shop-item-data-price-btn"}>
                  <Button className="orange" onClick={() => handleAddToCart()}>
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Drawer>
      <Drawer
        title={
          <div style={{ display: "flex" }} className="cart-header-container">
            <div className="cart-header-title">Cart</div>
            <div className="cart-header-icon-container">
              <img src={cartIcon} alt="alt" />
              <div className="cart-header-counter">{shop?.cart?.length}</div>
            </div>
          </div>
        }
        placement="right"
        onClose={() => setIsCartOpen(false)}
        open={cartOpen}
        className="shop-item-drawer-container-cart"
      >
        <Row className="shop-item-container-drawer jakarta">
          <Col md={{ span: 12 }} sm={{ span: 24 }}>
            <div className="cart-title-container">
              <div className="cart-title-main">
                Your One-Stop Shop for fleet Management
              </div>
              <div className="cart-title-secondary">
                <div className="cart-title-secondary-1">Cart</div>
                <div className="cart-title-secondary-2">Checkout</div>
              </div>
            </div>
          </Col>
          <Col md={{ span: 12 }} sm={{ span: 24 }}>
            <div className="cart-title-container-description">
              Our platform helps your business in managing expenses. These are
              some of the reasons why you should use our platform in managing
              business finances.
            </div>
          </Col>
          <Col md={{ span: 12 }} sm={{ span: 24 }}>
            {shop?.cart?.map((item: any, i: any) => {
              return <CartItem {...item} key={i} />;
            })}
          </Col>
          <Col md={{ span: 12 }} sm={{ span: 24 }}>
            <CartTotal />
          </Col>
        </Row>
      </Drawer>
    </Row>
  );
};
