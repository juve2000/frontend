import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form } from "antd";
import { TextInputPassword } from "../../../common/doubleinput/InputPassword";
import { GeneratePassword } from "../../../common/doubleinput/GeneratePassword";
import { TextInputConfirmPassword } from "../../../common/doubleinput/InputConfirmPassword";

export const SetPassword = (props: any): React.ReactElement => {
  const { toggleModal, isOpen = true, onSubmit, currentItem } = props;
  const [initialValues, setInitialValues] = useState({
    password: "",
    confirmPassword: "",
  });

  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    onSubmit({
      password: values.password,
      id: currentItem.id,
    });
  };

  return (
    <>
      <Modal
        className="ubuntu"
        title="Set password for this carrier"
        centered
        open={isOpen}
        footer={false}
        onOk={() => toggleModal(false)}
        onCancel={() => toggleModal(false)}
      >
        <div style={{ marginBottom: 20 }}>
          <GeneratePassword
            onGenerate={(generatedPassword: any) => {
              form.setFieldsValue({
                password: generatedPassword,
                confirm_password: generatedPassword,
              });
            }}
          />
        </div>
        <Form
          form={form}
          name="test"
          onError={(err) => {
            console.log("err", err);
          }}
          onFinish={handleSubmit}
          initialValues={initialValues}
          onChange={(values) => {
            // console.log("form values", values);
          }}
        >
          <TextInputPassword
            style={{ fontWeight: "bold" }}
            name="password"
            title="Password"
            form={form}
          />
          <TextInputConfirmPassword
            style={{ fontWeight: "bold" }}
            name="confirm_password"
            title="Confirm password"
            form={form}
            placeholder="Confirm password"
          />

          <Form.Item style={{ width: "100%" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="orange"
              style={{ width: "65px" }}
            >
              Save
            </Button>
            <Button
              onClick={() => {
                toggleModal(false);
              }}
              type="primary"
              className="white"
              style={{ width: "65px" }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
