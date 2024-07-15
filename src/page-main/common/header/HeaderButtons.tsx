import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const HeaderButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="header-buttons-container">
      <Button
        className="black"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Register
      </Button>
      <Button
        className="orange"
        onClick={() => {
          navigate("/signin");
        }}
      >
        Sign In
      </Button>
    </div>
  );
};
