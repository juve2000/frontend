import { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePermission } from "../constants/role";

export const usePermissions = () => {
  const permissions: any[] = useSelector((state: any) => {
    return state.auth.user?.role?.permissions || state.auth?.permissions || [];
  });

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
  };
};
