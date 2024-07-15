import React from "react";
import { Row, Col } from "antd";
import { FeatureSection } from "./Section1/FeatureSection";
import { SectionShop } from "./Section1/SectionShop";
import { SectionBundle } from "./Section1/SectionBundle";
import { FeatureSectionDriverApp } from "./Section1/FeatureSectionDriverApp";
import { DownloadSection } from "./Section1/DownloadSection";
import { FaqSection } from "./Section1/FaqSection";
import { SectionBenefits } from "./Section1/BenefitsSection";
import { HeaderSection } from "./Section1/HeaderSection";
import { SectionFooter } from "./Section1/SectionFooter";
// import {CONTENT_MAIN_PAGE} from './constant-spa'

const SectionWrapper = (props: any) => {
  const { isCommonWrapper = true, sectionID = "" } = props;
  return props?.isFull ? (
    <Row
      id={sectionID}
      className={`${props?.className} ${
        isCommonWrapper ? "common-section-wrapper" : ""
      }`}
    >
      <Col span={24}>{props?.children}</Col>
    </Row>
  ) : (
    <Row
      id={sectionID}
      className={`${props?.className} ${
        isCommonWrapper ? "common-section-wrapper" : ""
      }`}
    >
      <Col span={1}></Col>
      <Col span={22}>{props?.children}</Col>
    </Row>
  );
};

export const CONTENT_MAIN_PAGE = {
  SECTION_HEADER: "SECTION_HEADER",
  SECTION_BENEFITS: "SECTION_BENEFITS",
  SECTION_FEAT_DRIVER_APP: "SECTION_FEAT_DRIVER_APP",
  SECTION_DOWNLOAD: "SECTION_DOWNLOAD",
  SECTION_FEATURE: "SECTION_FEATURE",
  SECTION_FAQ: "SECTION_FAQ",
  SECTION_SHOP: "SECTION_SHOP",
  SECTION_BUDNLE: "SECTION_BUDNLE",
  SECTION_DOWNLOAD_2: "SECTION_DOWNLOAD_2",
  SECTION_FOOTER: "SECTION_FOOTER",
};

export const MainPage = (props: any) => {
  return (
    <Row>
      <SectionWrapper
        isFull
        className="header-section-wrapper"
        sectionID={CONTENT_MAIN_PAGE.SECTION_HEADER}
      >
        <HeaderSection />
      </SectionWrapper>
      <SectionWrapper
        className="benefits-section-wrapper"
        sectionID={CONTENT_MAIN_PAGE.SECTION_BENEFITS}
      >
        <SectionBenefits />
      </SectionWrapper>
      <SectionWrapper sectionID={CONTENT_MAIN_PAGE.SECTION_FEAT_DRIVER_APP}>
        <FeatureSectionDriverApp />
      </SectionWrapper>
      <SectionWrapper
        isCommonWrapper={false}
        className="download-section-wrapper"
        sectionID={CONTENT_MAIN_PAGE.SECTION_DOWNLOAD}
      >
        <DownloadSection />
      </SectionWrapper>
      <SectionWrapper sectionID={CONTENT_MAIN_PAGE.SECTION_FEATURE}>
        <FeatureSection />
      </SectionWrapper>
      <SectionWrapper
        className="faq-section-wrapper"
        sectionID={CONTENT_MAIN_PAGE.SECTION_FAQ}
      >
        <FaqSection />
      </SectionWrapper>
      <SectionWrapper sectionID={CONTENT_MAIN_PAGE.SECTION_SHOP}>
        <SectionShop />
      </SectionWrapper>
      <SectionWrapper
        className="bundle-section-wrapper"
        sectionID={CONTENT_MAIN_PAGE.SECTION_BUDNLE}
      >
        <SectionBundle />
      </SectionWrapper>
      <SectionWrapper
        isCommonWrapper={false}
        className="download-section-wrapper"
        sectionID={CONTENT_MAIN_PAGE.SECTION_DOWNLOAD_2}
      >
        <DownloadSection />
      </SectionWrapper>
      <SectionWrapper
        isCommonWrapper={false}
        sectionID={CONTENT_MAIN_PAGE.SECTION_FOOTER}
        className="footer-section-wrapper"
      >
        <SectionFooter />
      </SectionWrapper>
    </Row>
  );
};
