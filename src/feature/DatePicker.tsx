import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useAppDispatch } from "../redux-store/store";
import { getPersonalMatrix } from "../redux-store/personalMatrix-reducer";

type PropsType = {
  setBirthday: (value: string) => void;
  isPersonalQualities: number[];
  talentsOfDad: number[];
  talentsOfMother: number[];
  talentsOfGod: number[];
  isPastLife: string;
  IsHealthSaxasrara: number[];
  IsHealthAdjna: number[];
  IsHealthVishydha: number[];
  IsHealthAnaxata: number[];
  IsHealthManipura: number[];
  IsHealthMuladxara: number[];
  isHealthSvadxistana: number[];
  IsPurpose: number[];
  IsTests: number;
  isLove: number[];
  isMoney: number[];
  parentMenLine: number[];
  parentWomenLine: number[];
  parentResentment: number[];
  isChildren: number[];
  isManagement: number[];
};

export function DatePicker(props: PropsType) {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getPersonalMatrix({
        isPersonalQualities: props.isPersonalQualities,
        talentsOfDad: props.talentsOfDad,
        talentsOfMother: props.talentsOfMother,
        talentsOfGod: props.talentsOfGod,
        isPastLife: props.isPastLife,
        IsHealthSaxasrara: props.IsHealthSaxasrara,
        IsHealthAdjna: props.IsHealthAdjna,
        IsHealthVishydha: props.IsHealthVishydha,
        IsHealthAnaxata: props.IsHealthAnaxata,
        IsHealthManipura: props.IsHealthManipura,
        IsHealthMuladxara: props.IsHealthMuladxara,
        isHealthSvadxistana: props.isHealthSvadxistana,
        IsPurpose: props.IsPurpose,
        IsTests: props.IsTests,
        Gender: "M",
        isLove: props.isLove,
        isMoney: props.isMoney,
        parentMenLine: props.parentMenLine,
        parentWomenLine: props.parentWomenLine,
        parentResentment: props.parentResentment,
        isChildren: props.isChildren,
        isManagement: props.isManagement,
        IsYear: [1, 2],
      })
    );
  }, [
    props.isPersonalQualities,
    props.talentsOfDad,
    props.talentsOfMother,
    props.talentsOfGod,
    props.isPastLife,
    props.IsHealthSaxasrara,
    props.IsHealthAdjna,
    props.IsHealthVishydha,
    props.IsHealthAnaxata,
    props.IsHealthManipura,
    props.IsHealthMuladxara,
    props.isHealthSvadxistana,
    props.IsPurpose,
    props.IsTests,
    props.isLove,
    props.isMoney,
    props.parentMenLine,
    props.parentWomenLine,
    props.parentResentment,
    props.isChildren,
    props.isManagement,
  ]);
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.currentTarget.value);
  };

  const onClickHandler = () => {
    props.setBirthday(value);
  };

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
      <Button
        onClick={onClickHandler}
        variant={"contained"}
        style={{ width: "150px" }}
      >
        Рассчитать
      </Button>
    </Stack>
  );
}
