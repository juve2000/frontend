import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { FeaturesInfo } from "../common/feature/FeaturesInfo";
import driver1 from "../../img/features/driver1.png";
import driver2 from "../../img/features/driver2.png";

export const FeatureSectionDriverApp = (props: any) => {
  const [activeFrame, setActiveFrame] = React.useState("1");

  const items = [
    {
      title: "Automatic HOS Calculations & Alerts:",
      img: driver1,
      data: [
        {
          dataText: `Eliminate manual calculations and ensure accurate Hours of Service tracking.`,
        },
        {
          dataText:
            "Receive real-time alerts for approaching violations, allowing drivers to stay compliant and avoid penalties",
        },
      ],
      key: 1,
    },
    {
      title: "Easy-to-Use Electronic Logbook:",
      img: driver2,
      data: [
        {
          dataText: `Effortlessly record duty status changes throughout the day with a user-friendly interface.
.`,
        },
        {
          dataText:
            "Manage past logs and edit entries as needed, ensuring accurate recordkeeping",
        },
      ],
      key: 2,
    },
    {
      title: "Streamlined DVIRs (Driver Vehicle Inspection Reports):",
      data: [
        {
          dataText: `Create and complete DVIRs quickly and easily, identifying potential vehicle issues before they become major problems.
`,
        },
        {
          dataText:
            "Improve safety and reduce downtime with proactive vehicle maintenance.",
        },
      ],
      key: 3,
    },
    {
      title: "Reliable On-Road Support:",
      data: [
        {
          dataText: `Get prompt assistance with any compliance questions or technical issues directly through the app.
.`,
        },
        {
          dataText:
            "Enjoy peace of mind knowing our dedicated support team is always available to help drivers stay on the road",
        },
      ],
      key: 4,
    },
    {
      title: "FMCSA-Registered ELD Solution:",
      data: [
        {
          dataText: `Guarantee seamless DOT inspections with our FMCSA-registered ELD.


  .`,
        },
        {
          dataText:
            "Reduce audit risk and ensure compliance with all federal regulations.",
        },
      ],
      key: 5,
    },
  ];
  return (
    <Row>
      <Col xl={{ span: 24 }}>
        <FeaturesInfo
          mainInfoTitle={"Driver App"}
          mainInfoSubTitle="Our features for Driver App"
          bodyTitle=" Core ELD Driver App: Features for Simplified HOS & Compliance"
          activeFrame={activeFrame}
          setActiveFrame={setActiveFrame}
          items={items}
          type="driver"
        />
      </Col>
    </Row>
  );
};
