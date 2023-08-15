import React, { useState } from "react";
import { TableUser } from "../feature/TableUser";
import "./AdminTable.scss";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux-store/store";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { MatrixCompatibilityAdmin } from "../feature/MatrixCompatibilityAdmin";
type SelectType =
  | "accounts"
  | "personalMatrix"
  | "childrenMatrix"
  | "compatibilityMatrix"
  | "blog";

export const AdminTable = () => {
  const admin = useAppSelector((state) => state.registrationReducer.admin);
  const [select, setSelect] = useState<SelectType>("accounts");
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as SelectType);
  };
  if (!admin) {
    return <Navigate to={"/"} replace />;
  }
  let tableComponent;
  if (select === "accounts") {
    tableComponent = <TableUser />;
  } else if (select === "compatibilityMatrix") {
    tableComponent = <MatrixCompatibilityAdmin />;
  }
  return (
    <div className={"adminTable"}>
      <FormControl style={{ width: 300, marginBottom: 50 }}>
        <InputLabel id="demo-simple-select">Редактирование</InputLabel>
        <Select
          labelId="demo-simple-select"
          id="demo-simple-select"
          label={"Редактирование"}
          value={select}
          onChange={handleChange}
        >
          <MenuItem value={"accounts"}>Аккаунты</MenuItem>
          <MenuItem value={"personalMatrix"}>Персональная матрица</MenuItem>
          <MenuItem value={"childrenMatrix"}>Детская матрица</MenuItem>
          <MenuItem value={"blog"}>Блог</MenuItem>
          <MenuItem value={"compatibilityMatrix"}>
            Матрица совместимости
          </MenuItem>
        </Select>
      </FormControl>
      {tableComponent}
    </div>
  );
};
