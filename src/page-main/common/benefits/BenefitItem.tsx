import React from "react";

export const BenefitItem = (props: any): React.ReactElement => {
  return (
    <div className="benefit-item-container">
      <img className="benefit-icon" src={props?.icon} alt={props?.title} />
      <div className="benefit-title">{props?.title}</div>
    </div>
  );
};
