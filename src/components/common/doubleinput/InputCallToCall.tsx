import React, { useState, useMemo } from "react";
import { Form, Input, Col, Popover } from "antd";
import ViberLogo from "../../../img/viber.png";
import WhatsAppLogo from "../../../img/whatsapp.png";
import Phone from "../../../img/phone.png";
import TelegramLogo from "../../../img/telegram.png";

const CallTypes = {
  TELEGRAM: "TELEGRAM",
  VIBER: "VIBER",
  PHONE: "PHONE",
  WHATS_APP: "WHATS_APP",
};

export const InputCallToCall = (props: any) => {
  const { phone = "", className = "" } = props;

  const [isOpen, setIsOpen] = useState(false);

  const getCallOptions = (type: any, numberValue: any) => {
    switch (type) {
      case CallTypes.VIBER:
        return {
          title: "Viber",
          icon: ViberLogo,
          link: `viber://chat?number=${numberValue}`,
        };
      case CallTypes.WHATS_APP:
        return {
          title: "WhatsApp",
          icon: WhatsAppLogo,
          link: `whatsapp://send?phone=${numberValue}`,
        };
      case CallTypes.PHONE:
        return {
          title: "Phone call",
          icon: Phone,
          link: `tel:${numberValue}`,
        };
      case CallTypes.TELEGRAM:
        return {
          title: "Telegram",
          icon: TelegramLogo,
          link: `tg://resolve?phone=${numberValue}`,
        };
      default:
        return {
          title: "",
          icon: "",
        };
    }
  };

  const items = [
    CallTypes.VIBER,
    CallTypes.WHATS_APP,
    CallTypes.PHONE,
    CallTypes.TELEGRAM,
  ];

  const CallItem = (props: any) => {
    const options = getCallOptions(props.type, props.value);
    return (
      <div
        style={{ display: "flex", marginBottom: "10px" }}
        className={className}
      >
        <img style={{ width: "25px" }} src={options.icon} />
        <a style={{ marginLeft: 10 }} href={options.link}>
          {props.value}
        </a>
        <div className="ubuntu" style={{ marginLeft: "10px" }}>
          {options.title}
        </div>
      </div>
    );
  };

  return (
    <div style={{ cursor: "pointer" }} className="ubuntu">
      <Popover
        content={
          <div>
            {items.map((item) => {
              return <CallItem value={phone} type={item} />;
            })}
          </div>
        }
        title="Call-to-Call"
        trigger="click"
        open={isOpen}
        onOpenChange={() => setIsOpen(false)}
      />
      <div onClick={() => setIsOpen(true)} className={className}>
        {phone}
      </div>
    </div>
  );
};
