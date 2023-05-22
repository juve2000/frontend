import React from "react";
import { useSelector } from "react-redux";

export const UserInitials = (props: any) => {
  const user = useSelector((state: any) => state.auth.user);
  const [firstName] = user.first_name.split("");
  const [lastName] = user.last_name.split("");

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="user-initials ubuntu" style={{ marginRight: 10 }}>
        {firstName.toUpperCase()} {lastName.toUpperCase()}
      </div>
      <div style={{ color: "#2B3D4DB2" }}>
        <div>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
        <div>
          <span style={{ marginRight: 4 }}>{user.first_name}</span>
          <span>{user.last_name}</span>
        </div>
      </div>
    </div>
  );
};
