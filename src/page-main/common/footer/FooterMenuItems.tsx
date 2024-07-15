import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-scroll";

import { CONTENT_MAIN_PAGE } from "../../constant-spa";

const FooterItemLinkType = {
  SCROLL: "SCROLL",
  LINK: "LINK",
};

const footerItems = [
  {
    title: "Solutions",
    items: [
      {
        title: "Pricing",
        id: CONTENT_MAIN_PAGE.SECTION_BUDNLE,
        type: FooterItemLinkType.SCROLL,
      },
      {
        title: "How it works",
        id: "HAVE_TO_DEFINE",
        type: FooterItemLinkType.LINK,
      },

      {
        title: "Service",
        id: "HAVE_TO_DEFINE_2",

        type: FooterItemLinkType.SCROLL,
      },
      {
        title: "Assistant",
        id: "HAVE_TO_DEFINE_3",
        type: FooterItemLinkType.LINK,
      },
    ],
  },
  {
    title: "Free ELD",
    items: [
      {
        title: "Web APP",
        id: CONTENT_MAIN_PAGE.SECTION_HEADER,
        type: FooterItemLinkType.SCROLL,
      },
      {
        title: "Android App",
        id: "HAVE_TO_DEFINE",
        type: FooterItemLinkType.LINK,
      },

      {
        title: "iOS App",
        id: "HAVE_TO_DEFINE_2",

        type: FooterItemLinkType.SCROLL,
      },
      {
        title: "Shop",
        id: CONTENT_MAIN_PAGE.SECTION_SHOP,
        type: FooterItemLinkType.SCROLL,
      },
    ],
  },
  {
    title: "About Us",
    items: [
      {
        title: "Blog",
        id: CONTENT_MAIN_PAGE.SECTION_HEADER,
        type: FooterItemLinkType.SCROLL,
      },
      {
        title: "FAQ",
        id: CONTENT_MAIN_PAGE.SECTION_FAQ,
        type: FooterItemLinkType.LINK,
      },

      {
        title: "Events",
        id: "HAVE_TO_DEFINE_2",

        type: FooterItemLinkType.SCROLL,
      },
      {
        title: "Ebook & Guide",
        id: CONTENT_MAIN_PAGE.SECTION_SHOP,
        type: FooterItemLinkType.SCROLL,
      },
    ],
  },
  {
    title: "Follow Us",
    items: [
      {
        title: "LinkedIn",
        id: CONTENT_MAIN_PAGE.SECTION_HEADER,
        type: FooterItemLinkType.SCROLL,
      },
      {
        title: "Twitter",
        id: CONTENT_MAIN_PAGE.SECTION_FAQ,
        type: FooterItemLinkType.LINK,
      },

      {
        title: "Instagram",
        id: "HAVE_TO_DEFINE_2",

        type: FooterItemLinkType.SCROLL,
      },
      {
        title: "Facebook",
        id: CONTENT_MAIN_PAGE.SECTION_SHOP,
        type: FooterItemLinkType.SCROLL,
      },
      {
        title: "YouTube",
        id: CONTENT_MAIN_PAGE.SECTION_SHOP,
        type: FooterItemLinkType.SCROLL,
      },
    ],
  },
];

export const FooterMenuItems = () => {
  return (
    <Row className="footer-menu-container">
      {footerItems?.map((item: any, i: any) => {
        return (
          <Col
            key={i}
            xs={{ span: 12 }}
            md={{ span: 6 }}
            className="footer-menu-item-container"
          >
            <div className="title">{item?.title}</div>
            {item?.items?.map((itemItems: any, y: number) => {
              return (
                <div className="item">
                  <Link
                    key={y}
                    className="item"
                    to={itemItems?.id}
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                  >
                    {itemItems?.title}
                  </Link>
                </div>
              );
            })}
          </Col>
        );
      })}
    </Row>
  );
};
