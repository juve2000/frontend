import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { FeaturesInfo } from "../common/feature/FeaturesInfo";

export const FeatureSection = (props: any) => {
  const [activeFrame, setActiveFrame] = React.useState("1");

  const items = [
    {
      title: "Centralized Control & Monitoring:",
      data: [
        {
          dataTitle: "Driver & Fleet Activity",
          dataText: `Track driver location, HOS status, logs, DVIRs, and duty cycles in real-time from a single platform.`,
        },
        {
          dataTitle: "Document Management",
          dataText:
            " Securely store and access all driver and vehicle documents electronically for seamless recordkeeping and compliance.",
        },
        {
          dataTitle: "Alerts & Notifications",
          dataText: `
        Receive proactive alerts for potential HOS violations, maintenance needs, and other critical events.
          `,
        },
      ],
      key: 1,
    },

    // Simplified DVIR Completion: Review and approve DVIRs quickly, ensuring timely vehicle maintenance and safety checks.
    // Automated Reporting: Generate comprehensive reports on driver and fleet performance to gain valuable insights.
    {
      title: "Streamlined Workflows & Reduced Administration:",
      data: [
        {
          dataTitle: `
              Effortless Log Management: 
          
          `,
          dataText:
            "Electronically manage and review driver logs for accuracy and compliance.",
        },
        {
          dataTitle: "Simplified DVIR Completion",
          dataText:
            "Review and approve DVIRs quickly, ensuring timely vehicle maintenance and safety checks.",
        },
        {
          dataTitle: "Automated Reporting",
          dataText:
            "Generate comprehensive reports on driver and fleet performance to gain valuable insights.",
        },
      ],
      key: 2,
    },
    //     HOS Violation Prevention: Identify potential HOS violations before they occur, minimizing penalties and ensuring compliance.
    // FMCSA-Registered ELD: Guarantee seamless DOT inspections with our compliant ELD solution.
    // Audit-Ready Recordkeeping: Maintain detailed and easily accessible electronic records for all fleet activities.
    {
      title: "Proactive Compliance Management & Reduced Risk:",
      data: [
        {
          dataTitle: `
              HOS Violation Prevention 
          
          `,
          dataText:
            "Identify potential HOS violations before they occur, minimizing penalties and ensuring compliance.",
        },
        {
          dataTitle: "FMCSA-Registered ELD",
          dataText:
            "Guarantee seamless DOT inspections with our compliant ELD solution.",
        },
        {
          dataTitle: "Audit-Ready Recordkeeping",
          dataText:
            "Maintain detailed and easily accessible electronic records for all fleet activities.",
        },
      ],
      key: 3,
    },

    {
      title: "Data-Driven Insights & Improved Performance:",
      data: [
        {
          dataTitle: `
              Real-Time Data & Analytics 
          
          `,
          dataText:
            "Gain valuable insights into driver behavior, route efficiency, and overall fleet performance.",
        },
        {
          dataTitle: "Performance Optimization",
          dataText:
            "Utilize data to optimize routes, reduce fuel consumption, and improve delivery times.",
        },
        {
          dataTitle: "Data-Based Decision Making",
          dataText:
            "Make informed decisions about driver assignments, maintenance schedules, and resource allocation.",
        },
      ],
      key: 4,
    },
  ];
  return (
    <Row>
      <Col xl={{ span: 24 }}>
        <FeaturesInfo
          activeFrame={activeFrame}
          setActiveFrame={setActiveFrame}
          items={items}
          type={"web"}
        />
      </Col>
    </Row>
  );
};
