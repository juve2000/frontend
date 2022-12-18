import React from "react";
import { createUserReq } from "../../actions/auth";
import { useDispatch } from "react-redux";

export const SignUp = () => {
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(createUserReq({ username: "a@a.a", password: "123456" }));
  };

  return <div onClick={handleSignUp}>sign up</div>;
};
