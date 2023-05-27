import React from "react";
import "./HistoryMatrix.scss";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { TablePersonal } from "./TablePersonal";
import { TableCompatibility } from "./TableCompatibility";

export const HistoryMatrix = () => {
  const [matrix, setMatrix] = React.useState("personal");

  const handleChange = (event: SelectChangeEvent) => {
    setMatrix(event.target.value as string);
  };

  return (
    <div className={"userProfile"}>
      <h3 className={"spanNoneTarif"}>История поиска матрицы</h3>
      <Box sx={{ maxWidth: 300, margin: "20px 0" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">История матриц</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={matrix}
            label="История матриц"
            onChange={handleChange}
          >
            <MenuItem value={"personal"}>Персональные</MenuItem>
            <MenuItem value={"children"}>Детские</MenuItem>
            <MenuItem value={"compatibility"}>Совместимости</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div>
        {matrix === "personal" ? (
          <TablePersonal matrix={"personal"} />
        ) : matrix === "children" ? (
          <TablePersonal matrix={"children"} />
        ) : (
          <TableCompatibility />
        )}
      </div>
    </div>
  );
};
