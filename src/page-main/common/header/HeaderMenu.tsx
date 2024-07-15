import React from "react";
import { Link } from "react-scroll";
import { CONTENT_MAIN_PAGE } from "../../constant-spa";

const menuItems = [
  {
    title: "Benefits",
    id: CONTENT_MAIN_PAGE.SECTION_BENEFITS,
  },
  {
    title: "Driver App",
    id: CONTENT_MAIN_PAGE.SECTION_FEAT_DRIVER_APP,
  },
  {
    title: "Fleet Platform",
    id: "fleet_platform",
  },
  {
    title: "Shop",
    id: CONTENT_MAIN_PAGE.SECTION_SHOP,
  },
  {
    title: "Prices",
    id: CONTENT_MAIN_PAGE.SECTION_BUDNLE,
  },
  {
    title: "FAQ",
    id: CONTENT_MAIN_PAGE.SECTION_FAQ,
  },
  {
    title: "Download",
    id: CONTENT_MAIN_PAGE.SECTION_DOWNLOAD,
  },
];

export const HeaderMenu = () => {
  return (
    <div className="header-menu-container jakarta">
      {menuItems.map((item: any) => {
        return (
          <Link
            className="header-menu-item-container"
            to={item?.id}
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
            {item?.title}
          </Link>
        );
      })}
    </div>
  );
};
