import React from "react";
import { Switch } from "antd";

export const BundleTitle = (props: any): React.ReactElement => {
  return (
    <div className="bundle-title-container jakarta">
      <div className="title">One Platform, Fits All Sizes</div>
      <div className="description">
        Our flexible pricing plans adapt to your needs, whether you have a
        single truck or a large fleet.
      </div>
      <div className="bundle-title-switch-container">
        <div className="monthly">Montly</div>
        <div className="switcher">
          <Switch
            defaultChecked
            onChange={(e) => {
              console.log("ON SWITCH", e);
              props?.onChange(e);
            }}
          />
        </div>
        <div className="yearly">Yearly</div>
      </div>
    </div>
  );
};
