import React, { useState } from "react";
import { Button, Form, Input, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { Logo2 } from "../header/logo";
import { registerUserReq } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import greyCircle from "../../img/grey_circle.svg";
import orangeCircle from "../../img/orange_circle.svg";
import { validate } from "../../utils/validation";

// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
// Minimum eight characters, at least one uppercase letter,
// one lowercase letter, one number and one special character:

export const SignUp = () => {
  const [terms, setTerms] = useState(false);
  const [errorTerms, setErrorTerms] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    if (!terms) {
      setErrorTerms(true);
      return;
    }
    dispatch(
      registerUserReq({
        values,
        navigate,
      })
    );
  };

  React.useEffect(() => {
    if (terms) {
      setErrorTerms(false);
    }
  }, [terms]);

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
            Register your account
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item
              name="first_name"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <div style={{ textAlign: "left" }}>
                <div className="access-item-wrapper">First Name</div>
                <Input
                  // prefix={<span className="icon-icon-user orange"></span>}
                  placeholder="First name"
                  style={{ width: 300 }}
                />
              </div>
            </Form.Item>

            <Form.Item
              style={{ width: "100%" }}
              name="last_name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <div style={{ textAlign: "left" }}>
                <div className="access-item-wrapper">Last Name</div>
                <Input
                  // prefix={<span className="icon-icon-user orange"></span>}
                  placeholder="Last name"
                  style={{ width: 300 }}
                />
              </div>
            </Form.Item>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item
              name="company"
              colon={false}
              rules={[
                { required: true, message: "Please input your company name!" },
              ]}
            >
              <div style={{ textAlign: "left" }}>
                <div className="access-item-wrapper">Company</div>
                <Input
                  // prefix={<span className="icon-icon-user orange"></span>}
                  placeholder="Company"
                  style={{ width: 300 }}
                />
              </div>
            </Form.Item>

            <Form.Item
              style={{ width: "100%" }}
              name="company_usdot"
              rules={[{ required: true, message: "Please input your usdot!" }]}
            >
              <div style={{ textAlign: "left" }}>
                <div className="access-item-wrapper">USDOT</div>
                <Input
                  // prefix={<span className="icon-icon-user orange"></span>}
                  placeholder="USDOT"
                  style={{ width: 300 }}
                />
              </div>
            </Form.Item>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Should be an email" },
              ]}
            >
              <div style={{ textAlign: "left" }}>
                <div className="access-item-wrapper">Email</div>
                <Input
                  // prefix={<span className="icon-icon-user orange"></span>}
                  placeholder="Email"
                  style={{ width: 300 }}
                />
              </div>
            </Form.Item>

            <Form.Item
              style={{ width: "100%" }}
              name="phone"
              rules={[
                { required: true, message: "Please input your phone!" },
                { min: 1, message: "Minimum 8 characters" },
              ]}
            >
              <div style={{ textAlign: "left" }}>
                <div className="access-item-wrapper">Phone</div>
                <Input
                  // prefix={<span className="icon-icon-lock orange"></span>}
                  placeholder="Phone"
                  style={{ width: 300 }}
                />
              </div>
            </Form.Item>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item
              style={{ width: "100%" }}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 1, message: "Minimum 8 characters" },
                validate("password", "PASSWORD"),
              ]}
            >
              <div style={{ textAlign: "left" }}>
                <div className="access-item-wrapper">Password</div>
                <Input.Password
                  // prefix={<span className="icon-icon-lock orange"></span>}
                  placeholder="Password"
                  style={{ width: 300 }}
                />
              </div>
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
              <div style={{ textAlign: "left" }}>
                <div className="access-item-wrapper">Confirm Password</div>
                <Input.Password
                  // prefix={<span className="icon-icon-lock orange"></span>}
                  placeholder="Confirm password"
                  style={{ width: 300 }}
                />
              </div>
            </Form.Item>
          </div>
          <div
            style={{
              textAlign: "left",
              marginBottom: 36,
              marginTop: 16,
            }}
          >
            <div style={{ display: "flex" }}>
              <Checkbox
                checked={terms}
                onChange={(e) => {
                  setTerms(e.target.checked);
                }}
              />
              <div style={{ marginLeft: 8 }} className="ubuntu">
                Accept Terms & Conditions
              </div>
            </div>
            {errorTerms && (
              <div
                className="ubuntu"
                style={{ fontSize: 12, color: "#403e54" }}
              >
                Please confirm Terms & Conditions
              </div>
            )}
          </div>
          <Form.Item style={{ width: "100%" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="orange"
              style={{ width: "100%" }}
            >
              Register
            </Button>

            <div style={{ marginTop: 18 }}>
              <span style={{ color: "#8C8C8C" }}>Already registered?</span>{" "}
              <span
                className="orange"
                onClick={() => {
                  navigate("/signin");
                }}
                style={{ cursor: "pointer" }}
              >
                Sign in
              </span>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
