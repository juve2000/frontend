import React, { useState } from "react";
import check from "../../img/check.svg";
import "./checkbox.scss";
export const Checkbox = (props: any) => {
  return (
    <div className="checkbox-container">
      <img src={check} />
    </div>
  );
};
