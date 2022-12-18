import React from "react";
import { Routes, Route, NavLink, Outlet, useNavigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { AccessRoute } from "./Access";
import UserRoute from "./ClientRoute";
import { ClientLayout } from "../components/layout/ClientLayout";
import { SignIn } from "../components/access/SignIn";
import { SignUp } from "../components/access/SignUp";
import { LogOut } from "../components/access/LogOut";

export const MainRouter = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavLink to="/client">/ user </NavLink>
      <NavLink to="/signin">/ login </NavLink>
      <NavLink to="/">/ home </NavLink>

      <Routes>
        <Route
          element={
            <div>
              <div>
                ACCESS LAYOUT <LogOut />
              </div>
              <div>
                <Outlet />
              </div>
            </div>
          }
        >
          <Route path="/" element={<h3>page /</h3>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signin" element={<SignUp />} />
        </Route>
        <Route
          path="/client"
          element={<ProtectedRoute>{<ClientLayout />}</ProtectedRoute>}
        >
          <Route
            path={`:id`}
            element={
              <div>
                <div>
                  <h1>id page</h1>
                </div>
                <Outlet />
              </div>
            }
          >
            <Route path={`comments`} element={<div> user comment id</div>} />
            <Route index element={<div> user index</div>} />;
          </Route>
        </Route>
      </Routes>
    </>
  );
};
