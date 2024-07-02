import React from "react";
import bundle1Icon from "../../../img/bundle1-icon.svg";
import bundle2Icon from "../../../img/bundle2-icon.svg";
import bundle3Icon from "../../../img/bundle3-icon.svg";
import bundleChecked from "../../../img/bundle-checked.svg";
import bundleUnchecked from "../../../img/bundle-unchecked.svg";
import { Button } from "antd";

const getIconByName = (name: any) => {
  switch (name) {
    case "lovely":
      return bundle1Icon;
    case "crown":
      return bundle2Icon;
    case "flash":
      return bundle3Icon;
    default:
      return bundle1Icon;
  }
};

export const BundleItem = (props: any): React.ReactElement => {
  const {
    icon = "",
    iconDefaultName = "",
    subTitle,
    price,
    description,
    options,
    title,
    type,
    costType,
    isPopular = false,
  } = props;
  return (
    <div className="bundle-item-container">
      <div className="bundle-header-container">
        <div className="bundle-header-icon">
          <img src={icon ? icon : getIconByName(iconDefaultName)} alt="icon" />
        </div>
        <div className="bundle-header-title">{title}</div>
        {isPopular && <div className="bundle-header-label">Popular</div>}
      </div>
      {/* ------ */}
      <div className="bundle-item-subTitle">{subTitle}</div>
      <div className="bundle-item-price-container">
        <div className="bundle-item-price">$ {price.toFixed(2)}</div>
        <div className="bundle-item-price-month">/ {costType}</div>
      </div>
      {/* -------- */}
      <div className="bundle-item-description">{description}</div>
      {/* ------- */}
      <div className="bundle-options-container">
        {options?.map((option: any, i: any) => {
          return (
            <div className="bundle-option-container">
              <div className="bundle-option-icon">
                <img
                  src={option?.enabled ? bundleChecked : bundleUnchecked}
                  alt="checked"
                />
              </div>
              <div className="bundile-option-title">{option?.title}</div>
            </div>
          );
        })}
      </div>
      {/* --------
       */}
      <div className="bundle-btn-container">
        <Button className="orange">
          {type === "free" ? "Get Your Free Plan" : "Get Started"}
        </Button>
      </div>
    </div>
  );
};
