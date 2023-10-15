import React from "react";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

export const MoveToEdit = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Button
      onClick={() => {
        navigate(`${location.pathname}?state=EDIT`);
      }}
      className="orange"
      style={{ width: 60 }}
    >
      Edit
    </Button>
  );
};
