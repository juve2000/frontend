import React from "react";
import { Routes, Route, NavLink, Outlet, useNavigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { AccessRoute } from "./Access";
import UserRoute from "./ClientRoute";
import { ClientLayout } from "../components/layout/ClientLayout";
import { SignIn } from "../components/access/SignIn";
import { Recovery } from "../components/access/Recovery";
import { SignUp } from "../components/access/SignUp";
import { NewPassword } from "../components/access/NewPassword";
import { LogOut } from "../components/access/LogOut";

export const MainRouter = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <NavLink to="/client">/ user </NavLink>
      <NavLink to="/signin">/ login </NavLink>
      <NavLink to="/signup">/ signup </NavLink>

      <NavLink to="/">/ home </NavLink>
      <div>
        ACCESS LAYOUT <LogOut />
      </div> */}
      <Routes>
        <Route
          element={
            <div
              className="center hw100 access-container"
              style={{ minHeight: "100vh" }}
            >
              <Outlet />
            </div>
          }
        >
          <Route path="/signin" element={<SignIn />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/new_password" element={<NewPassword />} />
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
