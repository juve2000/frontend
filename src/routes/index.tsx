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
import { CarriersPage } from "../components/modules/carrier/CarriersPage";
import { CarrierPage } from "../components/modules/carrier/Carrier";
import { CarriersList } from "../components/modules/carrier/CarriersList";

export const MainRouter = () => {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route
          element={
            <div
              className="center hw100 access-container bg-main"
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
          <Route path={`/client/carriers`} element={<CarriersPage />}>
            <Route index element={<CarriersList />} />;
            <Route path={`:carrierid`} element={<CarrierPage />} />
          </Route>

          <Route path={`/client/drivers`} element={<div>drivers </div>} />
        </Route>
      </Routes>
    </>
  );
};
