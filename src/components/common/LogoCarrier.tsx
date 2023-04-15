import React from "react";
import { Popover } from "antd";
import { ENV } from "../../utils/constants";

export const LogoCarrier = (props: any) => {
  const { logo, onClick, styles = { width: "80%" } } = props;

  return (
    <div onClick={onClick}>
      {logo ? (
        <Popover
          content={
            <div style={{ width: 100 }}>
              <img style={{ width: "100%" }} src={ENV + logo} />
            </div>
          }
        >
          <img style={{ ...styles, borderRadius: "50%" }} src={ENV + logo} />
        </Popover>
      ) : (
        <div
          style={{
            ...styles,
            backgroundColor: "rgb(247, 249, 253)",
            borderRadius: "50%",
          }}
        />
      )}
    </div>
  );
};
