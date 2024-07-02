import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { ShopItem } from "../common/shop/ShopItem";

export const SectionShop = (props: any) => {
  const shop = useSelector((state: any) => state?.shop);

  return (
    <Row className={"section-shop-container jakarta jakarta-bold"}>
      <Col span={24}>
        <Row className={"section-shop-title-container"}>
          <Col
            xl={{ span: 24 }}
            sm={{ span: 24 }}
            className="shop-title-orange jakarta jakarta-bold"
          >
            Your One-Stop Shop for Fleet Management
          </Col>
          <Col
            xl={{ span: 6 }}
            sm={{ span: 24 }}
            className="shop-title-main jakarta jakarta-bold"
          >
            Core ELD Shop
          </Col>
          <Col
            xl={{ span: 8 }}
            sm={{ span: 24 }}
            className="shop-title-description jakarta jakarta-bold"
          >
            Our platform helps your business in managing expenses. These are
            some of the reasons why you should use our platform in managing
            business finances.
          </Col>
        </Row>
      </Col>
      {shop?.shopItems?.map((shopItem: any, i: any) => {
        return (
          <Col
            className="section-shop-col"
            xl={{ span: 8 }}
            key={i}
            md={{ span: 12 }}
            sm={{ span: 24 }}
          >
            <ShopItem {...shopItem} />
          </Col>
        );
      })}
    </Row>
  );
};
