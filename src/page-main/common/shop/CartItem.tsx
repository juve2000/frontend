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

export const CartItem = (props: any): React.ReactElement => {
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
    const cart = shop?.cart?.map((item: any, i: any) => {
      if (item?.id === id) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return {
        ...item,
      };
    });
    dispatch(updateCart(cart));
  };
  const decreaseCountChange = () => {
    const cart = shop?.cart?.map((item: any, i: any) => {
      if (item?.id === id) {
        return {
          ...item,
          quantity: item?.quantity > 1 ? item?.quantity - 1 : item?.quantity,
        };
      }
      return {
        ...item,
      };
    });
    dispatch(updateCart(cart));
  };
  const icnreaseCountChange = (quantity: any) => {
    const cart = shop?.cart?.map((item: any, i: any) => {
      if (item?.id === id) {
        return {
          ...item,
          quantity: item?.quantity + 1,
        };
      }
      return {
        ...item,
      };
    });
    dispatch(updateCart(cart));
  };
  const handleAddToCart = (item?: any) => {
    if (item) {
      dispatch(
        addItemToCart([
          ...shop?.cart,
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
          ...shop?.cart,
          {
            ...currentShopItem,
            id: uuid(),
          },
        ])
      );
    }
  };

  const deleteFromCart = (item?: any) => {
    const cart = shop?.cart?.filter((itemData: any) => itemData?.id !== id);
    dispatch(updateCart(cart));
  };

  return (
    <Row className={"shop-item-container-cart"}>
      <Col
        xl={{ span: 6 }}
        className={"shop-item-image-container-cart"}
        onClick={() => {
          dispatch(
            setCurrentShopItem({
              ...props,
            })
          );
          setisOpen(true);
        }}
      >
        <img src={image1} />
      </Col>
      <Col
        xl={{ span: 18 }}
        style={{ height: "100%" }}
        className="cart-item-details-container"
      >
        <div className="cart-item-delete-container">
          <DeleteOutlined onClick={() => deleteFromCart()} />
        </div>
        <div className={"shop-item-data-container-cart"}>
          <div>
            <div className={"shop-item-data-title-cart"}>{title}</div>
            <div className={"shop-item-data-text-cart"}>{description}</div>
          </div>
          <div className={"shop-item-data-price-container-cart"}>
            <div className="cart-item-counter">
              <MinusOutlined onClick={decreaseCountChange} />
              <div>{quantity}</div>
              <PlusOutlined onClick={icnreaseCountChange} />
            </div>
            <div
              className={"shop-item-data-price-btn-cart"}
              style={{ display: "flex" }}
            >
              <div
                className={"shop-item-data-price"}
                onClick={() => setIsCartOpen(true)}
              >
                ${price}
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
