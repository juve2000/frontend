import React, { useState } from "react";
import { Form, Select, Button, Upload, Col, Input, Row, Modal } from "antd";
import downloadIcon from "../../../img/download.svg";
import uploadIcon from "../../../img/upload.svg";

export const InputMultiUploadV2 = (props: any) => {
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
    fileType = "CDL",
    documentName = "",
    isMultiType = false,
  } = props;
  const isRequired = rules.find((rule: any) => rule.required);
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    console.log("props", props);
  }, [props]);

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }

    const fileId = e.file.uid;
    const updatedFileList = e?.fileList.map((file: any) => {
      if (file.uid === fileId) {
        return {
          ...file,
          fileType,
        };
      }
      return file;
    });

    return updatedFileList;
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
        {/* <Col span={6}>
          {form.getFieldValue(name) && (
            <>
              <img
                style={{ width: "80%", borderRadius: 10, cursor: "pointer" }}
                src={"https://dev.hgrs.us/" + form.getFieldValue(name)}
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
                  src={"https://dev.hgrs.us/" + form.getFieldValue(name)}
                />
              </Modal>
            </>
          )}
        </Col> */}
        <Col span={18}>
          <Form.Item
            rules={[{ required: false }]}
            name={name}
            style={{ width: "100%" }}
            // valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="documents"
              listType="picture"
              beforeUpload={(file: any) => {
                console.log("file", file);
              }}
              onChange={(e) => {
                console.log("e", e);
              }}
              onRemove={() => {
                console.log("remove");
              }}
              maxCount={3}
            >
              <Button
                className="hoverWhite white ubuntu"
                style={{ padding: "0px 0px" }}
              >
                <span
                  className="icon-fi-rr-upload orange"
                  style={{ marginRight: 10 }}
                ></span>
                Upload document {fileType}
              </Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Col>
  );
};
