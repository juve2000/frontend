import React from "react";
import { Row, Col } from "antd";
import { BenefitItem } from "../common/benefits/BenefitItem";
import { BenefitTitle } from "../common/benefits/BenefitTitle";
import icon_1 from "../../img/benefits/1_d.svg";
import icon_2 from "../../img/benefits/2_d.svg";
import icon_3 from "../../img/benefits/3_d.svg";
import icon_4 from "../../img/benefits/4_d.svg";
import icon_5 from "../../img/benefits/5_d.svg";
import icon_6 from "../../img/benefits/6_d.svg";
import icon_7 from "../../img/benefits/7_d.svg";
import icon_8 from "../../img/benefits/8_d.svg";
import circleBg from "../../img/benefits/benefit-bg.png";

export const SectionBenefits = (props: any) => {
  const benefits = [
    {
      icon: icon_1,
      title: "FMCSA-Certified ELD",
    },
    {
      icon: icon_2,
      title: "Reliable Hardware",
    },
    {
      icon: icon_3,
      title: "Seamless Integration ",
    },
    {
      icon: icon_4,
      title: "24/7 Support",
    },
    {
      icon: icon_5,
      title: "Real-time Monitoring",
    },
    {
      icon: icon_6,
      title: "Customizable Reporting ",
    },
    {
      icon: icon_7,
      title: "Effortless Compliance",
      span: 12,
    },
    {
      icon: icon_8,
      title: "Advanced Analytics",
      span: 12,
    },
  ];

  return (
    <Row className={" jakarta jakarta-bold benefit-container"}>
      <Col sm={{ span: 24 }}>
        <BenefitTitle />
      </Col>

      {benefits?.map((benefit: any, i: any) => {
        return (
          <Col
            md={{ span: benefit?.span ? benefit?.span : 8 }}
            sm={{ span: 12 }}
            className="benefit-item-wrapper"
          >
            <BenefitItem key={i} {...benefit} />
          </Col>
        );
      })}
      <img className="circle-bg" src={circleBg} alt="bg" />
    </Row>
  );
};
