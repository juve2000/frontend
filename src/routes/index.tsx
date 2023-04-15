import React from "react";
import { Routes, Route, NavLink, Outlet, useNavigate } from "react-router-dom";
import { ROUTES } from "./constants";

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
import { CarrierCreatePage } from "../components/modules/carrier/CarrierCreate";
import { CarriersList } from "../components/modules/carrier/CarriersList";
import { DriversPage } from "../components/modules/driver/DriversPage";
import { DriverPage } from "../components/modules/driver/Driver";
import { DriverCreatePage } from "../components/modules/driver/CreateDriver";
import { DriversList } from "../components/modules/driver/DriverList";

import { UsersPage } from "../components/modules/user/UsersPage";
import { UserPage } from "../components/modules/user/User";
import { UsersList } from "../components/modules/user/UsersList";

import { DriverGroupsPage } from "../components/modules/driver_group/DriverGroupPage";
import { DriverGroupPage } from "../components/modules/driver_group/DriverGroup";
import { DriverGroupCreatePage } from "../components/modules/driver_group/CreateDriverGroup";
import { DriverGroupList } from "../components/modules/driver_group/DriverGroupList";

import { MechanicsPage } from "../components/modules/mechanic/MechanicsPage";
import { MechanicPage } from "../components/modules/mechanic/Mechanic";
import { MechanicCreatePage } from "../components/modules/mechanic/CreateMechanic";
import { MechanicsList } from "../components/modules/mechanic/MechanicList";

import { VehiclesPage } from "../components/modules/vehicle/VehiclesPage";
import { VehiclePage } from "../components/modules/vehicle/Vehicle";
import { VehicleCreatePage } from "../components/modules/vehicle/CreateVehicle";
import { VehicleList } from "../components/modules/vehicle/VehicleList";

import { TrailersPage } from "../components/modules/trailer/TrailersPage";
import { TrailerPage } from "../components/modules/trailer/Trailer";
import { TrailerCreatePage } from "../components/modules/trailer/CreateTrailer";
import { TrailerList } from "../components/modules/trailer/TrailerList";

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
          <Route path={ROUTES.CARRIERS} element={<CarriersPage />}>
            <Route index element={<CarriersList />} />;
            <Route path={`create`} element={<CarrierCreatePage />} />
            <Route path={`:carrierid`} element={<CarrierPage />} />
          </Route>
          {/* DRIVERS ROUTES */}
          <Route path={ROUTES.DRIVERS} element={<DriversPage />}>
            <Route index element={<DriversList />} />;
            <Route path={`create`} element={<DriverCreatePage />} />
            <Route path={`:driverid`} element={<DriverPage />} />
          </Route>
          {/* DRIVER GROUP ROUTES */}
          <Route path={ROUTES.DRIVER_GROUP} element={<DriverGroupsPage />}>
            <Route index element={<DriverGroupList />} />;
            <Route path={`create`} element={<DriverGroupCreatePage />} />
            <Route path={`:driverGroupId`} element={<DriverGroupPage />} />
          </Route>
          {/* MECHANIC ROUTES */}
          <Route path={ROUTES.MECHANIC} element={<MechanicsPage />}>
            <Route index element={<MechanicsList />} />;
            <Route path={`create`} element={<MechanicCreatePage />} />
            <Route path={`:mechanicId`} element={<MechanicPage />} />
          </Route>
          {/* VEHICLES ROUTES */}
          <Route path={ROUTES.VEHICLE} element={<VehiclesPage />}>
            <Route index element={<VehicleList />} />;
            <Route path={`create`} element={<VehicleCreatePage />} />
            <Route path={`:vehicleId`} element={<VehiclePage />} />
          </Route>
          {/* TRAILERS ROUTES */}
          <Route path={ROUTES.TRAILER} element={<TrailersPage />}>
            <Route index element={<TrailerList />} />;
            <Route path={`create`} element={<TrailerCreatePage />} />
            <Route path={`:trailerId`} element={<TrailerPage />} />
          </Route>
          {/* USERS ROUTE */}
          <Route path={`/client/users`} element={<UsersPage />}>
            <Route index element={<UsersList />} />;
            <Route path={`:userid`} element={<UserPage />} />
          </Route>

          <Route path={`/client/drivers`} element={<div>drivers </div>} />
        </Route>
      </Routes>
    </>
  );
};
