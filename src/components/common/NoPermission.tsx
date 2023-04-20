import React from "react";

export const NoPermission = (props: any) => {
  const { label = `Access denied, don't have permissions` } = props;

  return (
    <div
      className="ubuntu"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {label}
    </div>
  );
};
