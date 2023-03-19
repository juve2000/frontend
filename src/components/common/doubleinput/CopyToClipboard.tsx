import React, { useState } from "react";
import { Button, message, Space } from "antd";

export function CopyToClipboard({
  copyText,
  style = { top: 43, right: 10 },
}: any) {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Copied !",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Something went wrong!",
    });
  };

  // This is the function we wrote earlier
  async function copyTextToClipboard(text: any) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        success();
      })
      .catch((err) => {
        error();
      });
  };

  return (
    <span
      onClick={handleCopyClick}
      className="icon-fi-rr-copy"
      style={{
        position: "absolute",
        cursor: "pointer",

        zIndex: 9999,
        ...style,
      }}
    >
      {contextHolder}
    </span>
  );
}
