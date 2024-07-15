import React from "react";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderButtons } from "./HeaderButtons";

export const HeaderBar = () => {
  return (
    <div className="header-bar-container">
      <HeaderLogo />
      <HeaderMenu />
      <HeaderButtons />
    </div>
  );
};
