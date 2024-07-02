import React from "react";
import { Row, Col } from "antd";
import { FeatureSection } from "./Section1/FeatureSection";
import { SectionShop } from "./Section1/SectionShop";
import { SectionBundle } from "./Section1/SectionBundle";
import { FeatureSectionDriverApp } from "./Section1/FeatureSectionDriverApp";
import { DownloadSection } from "./Section1/DownloadSection";
import { FaqSection } from "./Section1/FaqSection";

const SectionWrapper = (props: any) => {
  const { isCommonWrapper = true } = props;
  return (
    <Row
      className={`${props?.className} ${
        isCommonWrapper ? "common-section-wrapper" : ""
      }`}
    >
      <Col span={1}></Col>
      <Col span={22}>{props?.children}</Col>
    </Row>
  );
};

export const MainPage = (props: any) => {
  return (
    <Row>
      <SectionWrapper>
        <FeatureSectionDriverApp />
      </SectionWrapper>
      <SectionWrapper
        isCommonWrapper={false}
        className="download-section-wrapper"
      >
        <DownloadSection />
      </SectionWrapper>
      <SectionWrapper>
        <FeatureSection />
      </SectionWrapper>
      <SectionWrapper className="faq-section-wrapper">
        <FaqSection />
      </SectionWrapper>
      <SectionWrapper>
        <SectionShop />
      </SectionWrapper>
      <SectionWrapper className="bundle-section-wrapper">
        <SectionBundle />
      </SectionWrapper>
      <SectionWrapper
        isCommonWrapper={false}
        className="download-section-wrapper"
      >
        <DownloadSection />
      </SectionWrapper>
    </Row>
  );
};
