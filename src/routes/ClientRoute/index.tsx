import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { routes } from "../utils";

export const User = () => (
  <Route path={`:id`} element={<div>User ID Page</div>} />
);

export const UserComments = () => (
  <Route path={`comments`} element={<div> user route id</div>} />
);

export const UserIndex = () => <Route index element={<div> user index</div>} />;

export default {
  User,
  UserComments,
  UserIndex,
};
