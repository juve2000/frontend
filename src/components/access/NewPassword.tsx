import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { Logo2 } from "../header/logo";
import { login } from "../../actions/auth";
import { useNavigate } from "react-router-dom";

export const NewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    dispatch(
      login({
        values,
        navigate,
      })
    );
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  return (
    <div
      className="sign-container"
      style={{ textAlign: "center", padding: 40, width: 440 }}
    >
      <div style={{ marginBottom: 34 }}>
        <Logo2 />
      </div>

      <Form
        validateMessages={validateMessages}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="off"
        form={form}
      >
        <div
          style={{ color: "black", marginBottom: 8, textAlign: "left" }}
          className="ubuntu"
        >
          Create new password
        </div>
        <div
          style={{ color: "#6F6F6F", marginBottom: 28, textAlign: "left" }}
          className="ubuntu"
        >
          The password must consist of Numbers and letters
        </div>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<span className="icon-icon-lock orange"></span>}
            placeholder="Password"
            style={{ width: 360 }}
          />
        </Form.Item>

        <Form.Item
          style={{ width: "100%" }}
          name="confirm_password"
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<span className="icon-icon-lock orange"></span>}
            placeholder="Confirm password"
            style={{ width: 360 }}
          />
        </Form.Item>

        <Form.Item style={{ width: "100%" }}>
          <Button
            type="primary"
            htmlType="submit"
            className="orange"
            style={{ width: "100%" }}
          >
            Save
          </Button>
          <Button
            onClick={() => {
              navigate("/signup");
            }}
            className="white"
            style={{ width: "100%", marginTop: 16 }}
          >
            Back to Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
