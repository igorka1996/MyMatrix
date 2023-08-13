import React from "react";
import { TableUser } from "../feature/TableUser";
import "./AdminTable.scss";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux-store/store";

export const AdminTable = () => {
  const admin = useAppSelector((state) => state.registrationReducer.admin);
  if (!admin) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className={"adminTable"}>
      <TableUser />
    </div>
  );
};
