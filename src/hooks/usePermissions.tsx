import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePermission } from "../constants/role";

export const usePermissions = () => {
  const permissions: any[] = useSelector((state: any) => {
    return state.auth.user?.role?.permissions || state.auth?.permissions || [];
  });

  const checkPermission = (permission: string) => {
    return permissions.includes(permission);
  };

  const PermitionType = generatePermission();

  return {
    checkPermission,
    PermitionType,
  };
};
