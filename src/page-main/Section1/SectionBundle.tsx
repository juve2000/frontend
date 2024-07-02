import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { BundleItem } from "../common/bundle/BundleItem";
import { BundleTitle } from "../common/bundle/BundleTitle";

export const SectionBundle = (props: any) => {
  const shop = useSelector((state: any) => state?.shop);
  const [bundlesByType, setBundles] = React.useState(true);
  const bundlesYearly = [
    {
      icon: "",
      title: "ELD Compliance",
      subTitle: "Perfect plan to get started",
      price: 0,
      description: "A free plan grants you access to some cool features ",
      iconDefaultName: "lovely",
      type: "free",
      costType: "yearly",

      options: [
        {
          title: "Sync accross device",
          enabled: true,
        },
        {
          title: "5 workspace",
          enabled: true,
        },
        {
          title: "Sync accross device",
          enabled: true,
        },
        {
          title: "Collaborate with 5 user",
          enabled: true,
        },
        {
          title: "Sharing permission",
          enabled: false,
        },
        {
          title: "100+ integrations",
          enabled: false,
        },
      ],
    },
    {
      icon: "",
      title: "ELD Track",
      subTitle: "Perfect plan for professionals!",
      price: 12 * 12 * 0.65,
      description: "A free plan grants you access to some cool features ",
      iconDefaultName: "crown",
      type: "",
      costType: "yearly",
      isPopular: true,
      options: [
        {
          title: "Sync accross device",
          enabled: true,
        },
        {
          title: "5 workspace",
          enabled: true,
        },
        {
          title: "Sync accross device",
          enabled: true,
        },
        {
          title: "Collaborate with 5 user",
          enabled: true,
        },
        {
          title: "Sharing permission",
          enabled: true,
        },
        {
          title: "100+ integrations",
          enabled: false,
        },
      ],
    },
    {
      icon: "",
      title: "ELD Plus",
      subTitle: "Perfect plan for professionals!",
      price: 33 * 12 * 0.65,
      description: "A free plan grants you access to some cool features ",
      iconDefaultName: "flash",
      type: "",
      costType: "yearly",
      options: [
        {
          title: "Sync accross device",
          enabled: true,
        },
        {
          title: "5 workspace",
          enabled: true,
        },
        {
          title: "Sync accross device",
          enabled: true,
        },
        {
          title: "Collaborate with 5 user",
          enabled: true,
        },
        {
          title: "Sharing permission",
          enabled: true,
        },
        {
          title: "100+ integrations",
          enabled: true,
        },
      ],
    },
  ];

  const bundlesMonthly = [
    {
      icon: "",
      title: "ELD Compliance",
      subTitle: "Perfect plan to get started",
      price: 0,
      description: "A free plan grants you access to some cool features ",
      iconDefaultName: "lovely",
      type: "free",
      costType: "month",

      options: [
        {
          title: "Sync accross device",
          enabled: true,
        },
        {
          title: "5 workspace",
          enabled: true,
        },
        {
          title: "Sync accross device",
          enabled: true,
        },
        {
          title: "Collaborate with 5 user",
          enabled: false,
        },
        {
          title: "Sharing permission",
          enabled: false,
        },
        {
          title: "100+ integrations",
          enabled: false,
        },
      ],
    },
    {
      icon: "",
      title: "ELD Track",
      subTitle: "Perfect plan for professionals!",
      price: 12,
      description: "A free plan grants you access to some cool features ",
      iconDefaultName: "crown",
      type: "",
      costType: "month",
      isPopular: true,
      options: [
        {
          title: "Sync accross device",
          enabled: true,
        },
        {
          title: "5 workspace",
          enabled: true,
        },
        {
          title: "Sync accross device",
          enabled: true,
        },
        {
          title: "Collaborate with 5 user",
          enabled: false,
        },
        {
          title: "Sharing permission",
          enabled: false,
        },
        {
          title: "100+ integrations",
          enabled: false,
        },
      ],
    },
    {
      icon: "",
      title: "ELD Plus",
      subTitle: "Perfect plan for professionals!",
      price: 33,
      description: "A free plan grants you access to some cool features ",
      iconDefaultName: "flash",
      type: "",
      costType: "month",
      options: [
        {
          title: "Sync accross device",
          enabled: true,
        },
        {
          title: "5 workspace",
          enabled: true,
        },
        {
          title: "Sync accross device",
          enabled: true,
        },
        {
          title: "Collaborate with 5 user",
          enabled: true,
        },
        {
          title: "Sharing permission",
          enabled: true,
        },
        {
          title: "100+ integrations",
          enabled: true,
        },
      ],
    },
  ];

  const bundles = React.useMemo(() => {
    return bundlesByType ? bundlesYearly : bundlesMonthly;
  }, [bundlesByType]);

  return (
    <Row className={" jakarta jakarta-bold section-wrapper-bundle"}>
      <Col sm={{ span: 24 }}>
        <BundleTitle onChange={setBundles} />
      </Col>
      {bundles?.map((bundle: any, i: any) => {
        return (
          <Col md={{ span: 8 }} className="bundle-item-wrapper">
            <BundleItem key={i} {...bundle} />
          </Col>
        );
      })}
      <Col span={24}></Col>
    </Row>
  );
};
