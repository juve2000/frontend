import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form } from "antd";
import { TextInputPassword } from "../../../common/doubleinput/InputPassword";
import { GeneratePassword } from "../../../common/doubleinput/GeneratePassword";
import { TextInputConfirmPassword } from "../../../common/doubleinput/InputConfirmPassword";
import { TextInputV2 } from "../../../common/doubleinput";

export const SetPassword = (props: any): React.ReactElement => {
  const { toggleModal, isOpen = true, onSubmit, currentItem } = props;
  const [initialValues, setInitialValues] = useState({
    password: "",
    confirmPassword: "",
    email: currentItem?.email || "",
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
        {/* <div style={{ marginBottom: 20 }}>
          <GeneratePassword
            onGenerate={(generatedPassword: any) => {
              form.setFieldsValue({
                password: generatedPassword,
                confirm_password: generatedPassword,
              });
            }}
          />
        </div> */}
        {/* {
      type: InputType.TEXT_V2,
      name: CarrierField.EMAIL,
      label: "Email",
      // rules: [getValidation(REQUIRED, ""), validate("", VALIDATION_TYPE.EMAIL)],
      placeholder: " Email, e.g. username@domain.net",
      hasFeedback: true,
      title: "Email*",
      span: 24,
      width: "100%",
    }, */}

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
          <TextInputV2
            styles={{ fontWeight: "bold" }}
            name="email"
            label="Login"
            title="Login"
            disabled
          />
          <TextInputPassword
            style={{ fontWeight: "bold" }}
            name="password"
            title="Password"
            form={form}
            hasGenerate={true}
            handleOnGenerate={(pwd: any) => {
              form.setFieldValue("confirm_password", pwd);
            }}
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
              style={{ width: "85px", marginRight: 20 }}
            >
              Save
            </Button>
            <Button
              onClick={() => {
                // toggleModal(false);
                form.setFieldsValue({
                  password: "",
                  confirm_password: "",
                });
              }}
              type="primary"
              className="white"
              style={{ width: "85px" }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
