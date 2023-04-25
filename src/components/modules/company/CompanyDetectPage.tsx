import React from "react";
import { useSelector } from "react-redux";
import { CompanyList } from "./CompanyList";
import { CompanyPage } from "./Company";
import { usePermissions } from "../../../hooks/usePermissions";
import { ROLES } from "../role/constant";

export const CompanyDetectPage = (props: any) => {
  const { checkPermission, role } = usePermissions();

  if (role === ROLES.SUPER_ADMIN) {
    return <CompanyList />;
  }

  return <CompanyPage />;
};
