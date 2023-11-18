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

import { DevicesPage } from "../components/modules/device/DevicesPage";
import { DevicePage } from "../components/modules/device/Device";
import { DeviceCreatePage } from "../components/modules/device/CreateDevice";
import { DeviceList } from "../components/modules/device/DeviceList";

import { RolesPage } from "../components/modules/role/RolesPage";
import { RolePage } from "../components/modules/role/Role";
import { RoleCreatePage } from "../components/modules/role/CreateRole";
import { RoleList } from "../components/modules/role/RoleList";

import { UsersPage } from "../components/modules/user/UsersPage";
import { UserPage } from "../components/modules/user/User";
import { UserCreatePage } from "../components/modules/user/CreateUser";
import { UserList } from "../components/modules/user/UserList";

import { CompaniesPage } from "../components/modules/company/CompaniesPage";
import { CompanyPage } from "../components/modules/company/Company";
import { CompanyCreatePage } from "../components/modules/company/CreateCompany";
import { CompanyList } from "../components/modules/company/CompanyList";

import { OfficesMainPage } from "../components/modules/company/OfficeMainPage";
import { OfficePage } from "../components/modules/company/Office";
import { OfficeCreatePage } from "../components/modules/company/CreateOffice";
import { OfficeList } from "../components/modules/company/OfficeList";

import { AlertsList } from "../components/modules/alerts/AlertsList";

import { UnitsPage } from "../components/modules/units/UnitsPage";
import { UnitPage } from "../components/modules/units/Unit";
import { UnitCreatePage } from "../components/modules/units/CreateUnit";
import { UnitList } from "../components/modules/units/UnitList";

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
          {/* DEVICES ROUTES */}
          <Route path={ROUTES.DEVICE} element={<DevicesPage />}>
            <Route index element={<DeviceList />} />;
            <Route path={`create`} element={<DeviceCreatePage />} />
            <Route path={`:deviceId`} element={<DevicePage />} />
          </Route>
          {/* ROLES ROUTES */}
          <Route path={ROUTES.ROLE} element={<RolesPage />}>
            <Route index element={<RoleList />} />;
            <Route path={`create`} element={<RoleCreatePage />} />
            <Route path={`:roleId`} element={<RolePage />} />
          </Route>
          {/* USERS ROUTES */}
          <Route path={ROUTES.USER} element={<UsersPage />}>
            <Route index element={<UserList />} />;
            <Route path={`create`} element={<UserCreatePage />} />
            <Route path={`:userId`} element={<UserPage />} />
          </Route>

          {/* COMPANY ROUTES */}
          <Route path={ROUTES.COMPANY} element={<UsersPage />}>
            <Route index element={<CompanyList />} />;
            <Route path={`create`} element={<CompanyCreatePage />} />
            <Route path={`:companyId`} element={<CompanyPage />} />
          </Route>
          {/* OFFICE ROUTES */}
          <Route path={ROUTES.OFFICE} element={<OfficesMainPage />}>
            <Route index element={<OfficeList />} />;
            <Route path={`create`} element={<OfficeCreatePage />} />
            <Route path={`:officeId`} element={<OfficePage />} />
          </Route>
          {/* ALERTS ROUTES */}
          <Route path={ROUTES.ALERTS} element={<AlertsList />}>
            <Route index element={<AlertsList />} />;
            <Route path={`create`} element={<OfficeCreatePage />} />
            <Route path={`:allertId`} element={<OfficePage />} />
          </Route>
          {/* UNITS ROUTES */}
          <Route path={ROUTES.UNITS} element={<UnitsPage />}>
            <Route index element={<UnitList />} />;
            <Route path={`create`} element={<UnitCreatePage />} />
            <Route path={`:unitid`} element={<UnitPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
