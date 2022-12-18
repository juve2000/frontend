import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logOut } from "../../actions/auth";

export const LogOut = () => {
  const dispatch = useDispatch();

  const handleLogOut = (values: any) => {
    dispatch(logOut());
  };

  return (
    <>
      <Button className="" onClick={handleLogOut}>
        Log out
      </Button>
    </>
  );
};
