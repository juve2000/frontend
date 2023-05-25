import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logOut } from "../../actions/auth";

export const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = (values: any) => {
    dispatch(
      logOut({
        navigate,
      })
    );
  };

  return (
    <>
      <Button className="white" onClick={handleLogOut}>
        Log out
      </Button>
    </>
  );
};

export const LogOutNoButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = (values: any) => {
    dispatch(
      logOut({
        navigate,
      })
    );
  };

  return (
    <>
      <span onClick={handleLogOut}>Logout</span>
    </>
  );
};
