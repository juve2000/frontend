import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { Logo2 } from "../header/logo";
import { login } from "../../actions/auth";
import { TextInput } from "../Input/Input";
import { useNavigate } from "react-router-dom";
import greyCircle from "../../img/grey_circle.svg";
import orangeCircle from "../../img/orange_circle.svg";

export const SignIn = () => {
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
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", right: -70, top: 10, zIndex: 0 }}>
        <img src={greyCircle} />
      </div>
      <div style={{ position: "absolute", left: -70, bottom: 10, zIndex: 0 }}>
        <img src={orangeCircle} />
      </div>
      <div
        className="sign-container"
        style={{
          textAlign: "center",
          padding: 40,
          width: 440,
          position: "relative",
          zIndex: 100,
        }}
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
            style={{
              color: "black",
              marginBottom: 8,
              textAlign: "left",
              fontWeight: "bold",
            }}
            className="ubuntu"
          >
            Login
          </div>

          <Form.Item
            name="username"
            hasFeedback
            rules={[
              { required: true, message: "Please input your username!" },
              // { type: "email", message: "Should be an email" },
            ]}
          >
            <div style={{ textAlign: "left" }}>
              <div className="access-item-wrapper">Email</div>
              <Input
                prefix={<span className="icon-icon-user orange"></span>}
                placeholder="Your Email"
                style={{ width: 360 }}
              />
            </div>
          </Form.Item>

          <Form.Item
            style={{ width: "100%" }}
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              // {
              //   pattern:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              //   message:
              //     " Use at least: 8 characters, 1 uppercase letter, 1 digit",
              // },
            ]}
          >
            <div style={{ textAlign: "left" }}>
              <div className="access-item-wrapper">Password</div>
              <Input.Password
                prefix={<span className="icon-icon-lock orange"></span>}
                placeholder="Your Password"
                style={{ width: 360 }}
              />
            </div>
          </Form.Item>
          <div
            className="orange ubuntu pointer"
            style={{
              fontSize: 12,
              fontWeight: 200,
              marginTop: 16,
              marginBottom: 36,
              textAlign: "left",
            }}
            onClick={() => {
              navigate("/recovery");
            }}
          >
            Forgot your password ?
          </div>

          <Form.Item style={{ width: "100%" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="orange"
              style={{ width: "100%" }}
            >
              Sign In
            </Button>
            <div
              style={{
                backgroundColor: "#D9D9D9",
                marginTop: 46,
                marginBottom: 10,
                height: 1,
              }}
            ></div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                color: "#D9D9D9",
              }}
            >
              Dont have an account ?
            </div>
            <Button
              onClick={() => {
                navigate("/signup");
              }}
              className="white orange-border"
              style={{ width: "100%", marginTop: 16 }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
