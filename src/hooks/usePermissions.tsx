import { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePermission } from "../constants/role";
import { getPermissionsListByRole } from "../components/modules/role/constant";

export const usePermissions = () => {
  const permissions: any[] = useSelector((state: any) => {
    return state.auth.user?.role?.permissions || state.auth?.permissions || [];
  });

  const role = useSelector((state: any) => {
    return state.auth.user.role;
  });

  const ALL_PERMISSION_TYPES = useMemo(() => {
    return getPermissionsListByRole(role);
  }, [role]);

  const checkPermission = useCallback(
    (permission: string) => {
      return permissions.includes(permission);
    },
    [permissions]
  );

  const PermissionType = useMemo(() => {
    return generatePermission();
  }, [permissions]);

  return {
    checkPermission,
    PermissionType,
    ALL_PERMISSION_TYPES,
    role,
  };
};
