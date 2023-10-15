import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { Logo2 } from "../header/logo";
import { forgotPasswordUserReq } from "../../actions/auth";
import { TextInput } from "../Input/Input";
import { useNavigate } from "react-router-dom";

export const Recovery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    dispatch(
      forgotPasswordUserReq({
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
          Password recovery
        </div>
        <div
          style={{ color: "#6F6F6F", marginBottom: 28, textAlign: "left" }}
          className="ubuntu"
        >
          Password Recovery Enter your email. Follow the link sent to your email
          to reset your password
        </div>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter a valid email" },
            { type: "email", message: "Should be an email" },
          ]}
        >
          <Input
            // prefix={<span className="icon-icon-user orange"></span>}
            placeholder="Your Email"
            style={{ width: 360, height: 40, border: "none" }}
          />
        </Form.Item>

        <Form.Item style={{ width: "100%" }}>
          <Button
            type="primary"
            htmlType="submit"
            className="orange"
            style={{ width: "100%" }}
          >
            Send
          </Button>
          <Button
            onClick={() => {
              navigate("/signin");
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
