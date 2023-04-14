import React, { useState } from "react";
import { Form, Select, Button, Upload, Col, Input, Row, Modal } from "antd";
import downloadIcon from "../../../img/download.svg";
import uploadIcon from "../../../img/upload.svg";
import { ENV } from "../../../utils/constants";

export const InputImageUploadV2 = (props: any) => {
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
    form,
  } = props;
  const isRequired = rules.find((rule: any) => rule.required);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.file.originFileObj;
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
          <div className="input-item-title input-title ubuntu">{title}</div>
        )
      ) : null}
      <Row>
        <Col span={6}>
          {form.getFieldValue(name) && (
            <>
              <img
                style={{ width: "80%", borderRadius: 10, cursor: "pointer" }}
                src={ENV + form.getFieldValue(name)}
                onClick={() => setIsModalOpen(true)}
              />
              <Modal
                // title="Basic Modal"
                open={isModalOpen}
                onOk={() => setIsModalOpen(true)}
                onCancel={() => setIsModalOpen(false)}
                footer={false}
              >
                <img
                  style={{ width: "80%", borderRadius: 10 }}
                  src={ENV + form.getFieldValue(name)}
                />
              </Modal>
            </>
          )}
        </Col>
        <Col span={18}>
          <Form.Item
            rules={rules}
            name={name}
            style={{ width: "100%" }}
            // valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="logo"
              listType="picture"
              onChange={(e) => {
                console.log("e", e);
              }}
              maxCount={1}
            >
              <Button className="white ubuntu">
                {" "}
                <span
                  className="icon-fi-rr-upload orange"
                  style={{ marginRight: 10 }}
                ></span>
                Click to upload
              </Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Col>
  );
};
