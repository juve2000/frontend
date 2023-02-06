import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./customnav.scss";

export const CustomNavigation = (props: any) => {
  const { paths } = props;
  const [mainPath, ...rest] = paths;

  return (
    <div style={{ display: "flex" }} className="path-wrapper">
      <div className="main-path-item"></div>
    </div>
  );
};
