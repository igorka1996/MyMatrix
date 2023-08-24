import React, { ChangeEvent, useState } from "react";
import { Button, TextareaAutosize } from "@mui/material";
import "./NewProgram.scss";
import TextField from "@mui/material/TextField";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import { newPersonalPastLifeMatrix } from "../../redux-store/get-matrix-personal";

export const NewPastLife = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const [text, setText] = useState<string>("");
  const id = useAppSelector((state) => state.getMatrixPersonal.id);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const onClickHandler = (value: string, text: string) => {
    dispatch(newPersonalPastLifeMatrix({ id, value, description: text }));
    setText("");
    setValue("");
  };
  return (
    <div className={"divNewProgram"}>
      <span style={{ fontSize: 30, marginBottom: 20, fontWeight: "bold" }}>
        Добавление новой программы
      </span>
      <div className={"divProgram"}>
        <span className={"spanProgram"}>Энергии</span>
        <TextField
          className={"inputProgram"}
          value={value}
          onChange={onChangeValue}
          type={"text"}
          label={"X-X-X"}
        ></TextField>
      </div>
      <div className={"divProgram"}>
        <span className={"spanProgram"}>Описание</span>
        <TextareaAutosize
          style={{ width: "100% !important", height: "auto" }}
          cols={150}
          value={text}
          onChange={onChangeText}
        ></TextareaAutosize>
      </div>
      <Button
        disabled={value.length < 5}
        onClick={() => onClickHandler(value, text)}
        variant={"contained"}
      >
        Создать
      </Button>
    </div>
  );
};
