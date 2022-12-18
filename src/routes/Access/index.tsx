import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { SignIn } from "../../components/access/SignIn";
import { SignUp } from "../../components/access/SignUp";
import { routes } from "../utils";

export const AccessRoute = () => {
  return (
    <>
      <SignIn />
      {/* <Route path="/signin" element={<SignIn />} /> */}
      {/* <Route path="/signup" element={<SignUp />} /> */}
      {/* <Outlet /> */}
    </>
  );
};

export const UserRouteDetails = () => {
  return (
    <>
      <Route
        path={`${routes.toUser}/:id`}
        element={<div> user route id</div>}
      />
    </>
  );
};
