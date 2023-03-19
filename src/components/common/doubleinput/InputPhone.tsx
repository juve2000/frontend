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

export const InputPhone = (props: any) => {
  const {
    rules = [],
    name = "",
    icon,
    placeholder = "",
    label = "",
    disabled,
    width = "100%",
    title = "",
    isSecondField = false,
    span = 24,
    styles = {},
    pathName = "",
    form,
  } = props;
  const isRequired = rules.find((rule: any) => rule.required);

  const [isOpen, setIsOpen] = useState(false);

  const getName = useMemo(() => {
    return pathName ? [...pathName, name] : name;
  }, [pathName, name]);

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

  //   For mobile devices:

  // <a href="viber://chat?number=PHONE_WITHOUT_PLUS">Text to Viber</a>

  // <a href="viber://add?number=PHONE_WITHOUT_PLUS">Add the phone to Viber</a>
  // For desktop devices:

  // <a href="viber://chat?number=+PHONE_WITH_PLUS">Text to Viber</a>

  // <!-- or use %2B = + -->

  // <a href="viber://chat?number=%2BPHONE_WITH_PLUS">Text to Viber</a>

  const items = [
    CallTypes.VIBER,
    CallTypes.WHATS_APP,
    CallTypes.PHONE,
    CallTypes.TELEGRAM,
  ];

  const CallItem = (props: any) => {
    const options = getCallOptions(props.type, props.value);
    return (
      <div style={{ display: "flex", marginBottom: "10px" }}>
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
    <Col
      span={span}
      className="input-container-v2"
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {title ? (
        title === "invisible" ? (
          <div
            className="input-item-title input-title ubuntu"
            style={{ opacity: 0 }}
          >
            {title}
          </div>
        ) : (
          <div
            className="input-item-title input-title ubuntu"
            style={{ display: "flex" }}
          >
            <div>{title}</div>
            {
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                  padding: "0px 8px",
                  color: "white",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                className="bg-orange ubuntu"
                onClick={() => setIsOpen(true)}
              >
                <Popover
                  content={
                    <div>
                      {items.map((item) => {
                        return (
                          <CallItem
                            value={form.getFieldValue(getName)}
                            type={item}
                          />
                        );
                      })}
                    </div>
                  }
                  title="Call-to-Call"
                  trigger="click"
                  open={isOpen}
                  onOpenChange={() => setIsOpen(false)}
                />
                <div
                  className="icon-fi-rr-call-outgoing"
                  style={{ marginRight: 10 }}
                />
                {<div className="ubuntu">Call-to-call</div>}
              </div>
            }
          </div>
        )
      ) : null}
      <Form.Item rules={rules} name={getName} style={{ width: "100%" }}>
        <Input
          prefix={
            !!icon ? (
              <span className={`icon-icon-${icon} orange`}></span>
            ) : (
              <span></span>
            )
          }
          placeholder={placeholder}
          style={{ width, ...styles }}
          disabled={disabled}
        />
      </Form.Item>
    </Col>
  );
};
