import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { Logo2 } from "../header/logo";
import { login, registerUserReq } from "../../actions/auth";
import { TextInput } from "../Input/Input";
import { useNavigate } from "react-router-dom";
import greyCircle from "../../img/grey_circle.svg";
import orangeCircle from "../../img/orange_circle.svg";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    dispatch(
      registerUserReq({
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
      <div style={{ position: "absolute", right: -60, top: -80, zIndex: 0 }}>
        <img src={greyCircle} />
      </div>
      <div style={{ position: "absolute", left: -70, bottom: -100, zIndex: 1 }}>
        <img src={orangeCircle} />
      </div>
      <div
        className="sign-container"
        style={{
          textAlign: "center",
          padding: 40,
          width: 700,
          zIndex: 100,
          position: "relative",
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
        >
          <div
            style={{ color: "black", marginBottom: 28, textAlign: "left" }}
            className="ubuntu"
          >
            Register
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item
              name="first_name"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input
                prefix={<span className="icon-icon-user orange"></span>}
                placeholder="First name"
                style={{ width: 300 }}
              />
            </Form.Item>

            <Form.Item
              style={{ width: "100%" }}
              name="last_name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input
                prefix={<span className="icon-icon-user orange"></span>}
                placeholder="Last name"
                style={{ width: 300 }}
              />
            </Form.Item>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
                { type: "email", message: "Should be an email" },
              ]}
            >
              <Input
                prefix={<span className="icon-icon-user orange"></span>}
                placeholder="Email"
                style={{ width: 300 }}
              />
            </Form.Item>

            <Form.Item
              style={{ width: "100%" }}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 1, message: "Minimum 8 characters" },
              ]}
            >
              <Input.Password
                prefix={<span className="icon-icon-lock orange"></span>}
                placeholder="Password"
                style={{ width: 300 }}
              />
            </Form.Item>
          </div>
          <Form.Item
            name="company_usdot"
            rules={[{ required: true, message: "Please input your usdot!" }]}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Input
              prefix={<span className="icon-icon-user orange"></span>}
              placeholder="USDOT"
              style={{ width: 300 }}
            />
          </Form.Item>

          <Form.Item style={{ width: "100%" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="orange"
              style={{ width: "100%" }}
            >
              Submit
            </Button>
            <Button
              onClick={() => {
                navigate("/signin");
              }}
              className="white"
              style={{ width: "100%", marginTop: 16 }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
