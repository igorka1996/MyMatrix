import React, { useState } from "react";
import { TableUser } from "../feature/TableUser";
import "./AdminTable.scss";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux-store/store";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { MatrixCompatibilityAdmin } from "../feature/MatrixCompatibilityAdmin";
import { MatrixChildrenAdmin } from "../feature/MatrixChildrenAdmin";
import { MatrixPersonalAdmin } from "../feature/MatrixPersonalAdmin";
import { BlogAdmin } from "../feature/BlogAdmin";
type SelectType =
  | "accounts"
  | "personalMatrix"
  | "childrenMatrix"
  | "compatibilityMatrix"
  | "blog";

export const AdminTable = () => {
  const loc = useLocation();
  const admin = useAppSelector((state) => state.registrationReducer.admin);
  const [select, setSelect] = useState<SelectType>("accounts");
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as SelectType);
  };
  if (!admin) {
    return <Navigate to={"/"} state={loc} />;
  }
  let tableComponent;
  if (select === "accounts") {
    tableComponent = <TableUser />;
  } else if (select === "compatibilityMatrix") {
    tableComponent = <MatrixCompatibilityAdmin />;
  } else if (select === "childrenMatrix") {
    tableComponent = <MatrixChildrenAdmin />;
  } else if (select === "personalMatrix") {
    tableComponent = <MatrixPersonalAdmin />;
  } else if (select === "blog") {
    tableComponent = <BlogAdmin />;
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
