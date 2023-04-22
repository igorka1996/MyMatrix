import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useAppDispatch } from "../redux-store/store";
import { getPersonalMatrix } from "../redux-store/personalMatrix-reducer";
import { Link } from "react-router-dom";

// type PropsType = {
//   setBirthday: (value: string) => void;
//   isPersonalQualities: number[];
//   talentsOfDad: number[];
//   talentsOfMother: number[];
//   talentsOfGod: number[];
//   isPastLife: string;
//   IsHealthSaxasrara: number[];
//   IsHealthAdjna: number[];
//   IsHealthVishydha: number[];
//   IsHealthAnaxata: number[];
//   IsHealthManipura: number[];
//   IsHealthMuladxara: number[];
//   isHealthSvadxistana: number[];
//   IsPurpose: number[];
//   IsTests: number;
//   isLove: number[];
//   isMoney: number[];
//   parentMenLine: number[];
//   parentWomenLine: number[];
//   parentResentment: number[];
//   isChildren: number[];
//   isManagement: number[];
// };

export function DatePicker() {
  const [value, setValue] = useState<string>("");
  // const dispatch = useAppDispatch();

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  // const onClickHandler = () => {
  //   props.setBirthday(value);
  // };

  return (
    <Stack
      component="form"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      noValidate
      spacing={3}
    >
      <TextField
        onChange={onChangeHandler}
        id="date"
        label="Дата рождения"
        type="date"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Link state={{ date: value }} to={"/matrix"}>
        Рассчитать
      </Link>
    </Stack>
  );
}
