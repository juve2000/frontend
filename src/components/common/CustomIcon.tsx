import React from "react";
import user from "../../img/fi-rr-user.svg";

interface CustomIconProps {
  color?: string;
}

export const CustomIcon = (props: CustomIconProps) => {
  return (
    <>
      <img src={user} className="" />
    </>
  );
};
