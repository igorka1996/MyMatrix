import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { ChangeEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./DatePickers.scss";
import { FormControlLabel, styled, Switch } from "@mui/material";
import { FormGroup } from "@material-ui/core";
import { useAppSelector } from "../redux-store/store";

export function DatePickers() {
  const [value, setValue] = useState<string>("");
  const [value1, setValue1] = useState<string>("");
  const [matrix, setMatrix] = useState<string>("personal");
  const [name, setName] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  const auth = useAppSelector((state) => state.registrationReducer.auth);
  const sub = useAppSelector((state) => state.registrationReducer.subscription);
  const id = useAppSelector((state) => state.registrationReducer.id);
  const onChangeHandlerName = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(e.currentTarget.value);
  };
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 124,
    height: 60,
    padding: 19,
    "& .MuiSwitch-switchBase": {
      margin: 3,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(54px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 65 65"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M62.242,47.758l0.014-0.014c-5.847-4.753-12.84-8.137-20.491-9.722C44.374,35.479,46,31.932,46,28 c1.657,0,3-1.343,3-3v-2c0-0.886-0.391-1.673-1-2.222V12c0-6.627-5.373-12-12-12h-8c-6.627,0-12,5.373-12,12v8.778 c-0.609,0.549-1,1.336-1,2.222v2c0,1.657,1.343,3,3,3c0,3.932,1.626,7.479,4.236,10.022c-7.652,1.586-14.646,4.969-20.492,9.722 l0.014,0.014C0.672,48.844,0,50.344,0,52v8c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4v-8C64,50.344,63.328,48.844,62.242,47.758z M20,28v-1c0-0.553-0.447-1-1-1h-1c-0.553,0-1-0.447-1-1v-2c0-0.553,0.447-1,1-1h1c0.553,0,1-0.447,1-1v-1v-1c0-2.209,1.791-4,4-4 c2.088,0,3.926-1.068,5-2.687C30.074,13.932,31.912,15,34,15h6c2.209,0,4,1.791,4,4v1v1c0,0.553,0.447,1,1,1h1c0.553,0,1,0.447,1,1 v2c0,0.553-0.447,1-1,1h-1c-0.553,0-1,0.447-1,1v1c0,6.627-5.373,12-12,12S20,34.627,20,28z M24.285,39.678 C26.498,41.143,29.147,42,32,42s5.502-0.857,7.715-2.322c1.66,0.281,3.297,0.63,4.892,1.084C41.355,43.983,36.911,46,31.973,46 c-4.932,0-9.371-2.011-12.621-5.226C20.96,40.315,22.61,39.961,24.285,39.678z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: check ? "rgb(111, 137, 173)" : "rgb(186, 130, 167)",
      width: 50,
      height: 50,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 32 30"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M26.7,27.2c-0.3-1.3-0.9-2.5-1.7-3.4c1.3-3.1,2.1-6.6,2.1-9.9c0-7.5-4.1-12-11-12S5,6.5,5,14c0,3.2,0.8,6.8,2.1,9.9 c-0.9,0.9-1.5,2.1-1.7,3.4l-0.2,0.9c-0.1,0.5,0,0.9,0.3,1.3C5.8,29.8,6.2,30,6.7,30h18.7c0.5,0,0.9-0.2,1.2-0.6 c0.3-0.4,0.4-0.8,0.3-1.3L26.7,27.2z M7.2,28l0.1-0.4c0.4-1.8,1.6-3.2,3.4-3.8c2-0.7,3.4-2.5,3.4-4.7c0-0.4-0.2-0.7-0.5-0.9 C12,17.4,11,15.6,11,13.8v-2.3c2.3,2.2,5.7,3.8,9.7,4.3c-0.4,1.1-1.2,2-2.2,2.6c-0.3,0.2-0.5,0.5-0.5,0.9c0,2.1,1.3,4,3.4,4.7 c1.7,0.6,3,2,3.4,3.8l0.1,0.4H7.2z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
    let checked = e.currentTarget.checked;
    setTimeout(() => {
      setCheck(checked);
    }, 100);
  };
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let inputDate = e.currentTarget.value.replace(/\D/g, "");
    if (inputDate.length > 8) {
      inputDate = inputDate.slice(0, 8);
    }
    if (inputDate.length >= 5) {
      inputDate = `${inputDate.slice(0, 2)}-${inputDate.slice(
        2,
        4
      )}-${inputDate.slice(4)}`;
    } else if (inputDate.length >= 3) {
      inputDate = `${inputDate.slice(0, 2)}-${inputDate.slice(2)}`;
    }
    setValue(inputDate);
  };
  const onChangeHandler1 = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let inputDate = e.currentTarget.value.replace(/\D/g, "");
    if (inputDate.length > 8) {
      inputDate = inputDate.slice(0, 8);
    }
    if (inputDate.length >= 5) {
      inputDate = `${inputDate.slice(0, 2)}-${inputDate.slice(
        2,
        4
      )}-${inputDate.slice(4)}`;
    } else if (inputDate.length >= 3) {
      inputDate = `${inputDate.slice(0, 2)}-${inputDate.slice(2)}`;
    }
    setValue1(inputDate);
  };
  const onClickHandlerMatrix = (value: string) => {
    setMatrix(value);
  };

  const subscribe = useMemo(
    () =>
      sub.filter((e: any) =>
        e.subscribe === "Пробный" && e.access ? e : null
      )[0],
    [sub]
  );
  const subscribeAll = useMemo(
    () =>
      sub.filter((e: any) =>
        (e.subscribe === "Вместе и навсегда" && e.access) ||
        (e.subscribe === "Видео-курс + Вместе и навсегда" && e.access)
          ? e
          : null
      )[0],
    [sub]
  );
  const subscribeMonth = useMemo(
    () =>
      sub.filter((e: any) =>
        e.subscribe === "Матрица на месяц" && e.access ? e : null
      )[0],
    [sub]
  );
  let day;
  let month;
  let year;
  const timestamp = subscribeMonth?.expiresSub
    ? new Date(subscribeMonth.expiresSub)
    : undefined;
  if (timestamp) {
    day = timestamp.getDate();
    month = timestamp.getMonth() + 1;
    year = timestamp.getFullYear();
  }
  return (
    <React.Fragment>
      <div className={"backImageDate"}></div>
      <section className={"sectionDate"} id={"sectionDateScroll"}>
        {subscribeAll ? (
          <p className={"pom"}>Безлимитные расшифровки навсегда</p>
        ) : undefined}
        {timestamp ? (
          <p className={"pom"}>{`Безлимитные расшифровки до ${
            day ? (day > 9 ? day : "0" + day) : undefined
          }-${month ? (month > 9 ? month : "0" + month) : undefined}-${
            year ? year : undefined
          }`}</p>
        ) : undefined}
        {matrix === "personal" && !subscribeAll ? (
          subscribe?.quantity !== undefined && subscribe.quantity > 0 ? (
            <p className={"pom"}>
              Вам доступно:{" "}
              {subscribe.quantity > 1
                ? `${subscribe.quantity} любые расшифровки`
                : `${subscribe.quantity} любая расшифровка`}
            </p>
          ) : undefined
        ) : matrix === "children" && !subscribeAll ? (
          subscribe?.quantity !== undefined && subscribe.quantity > 0 ? (
            <p className={"pom"}>
              Вам доступно:{" "}
              {subscribe.quantity > 1
                ? `${subscribe.quantity} любые расшифровки`
                : `${subscribe.quantity} любая расшифровка`}
            </p>
          ) : undefined
        ) : subscribe?.quantity !== undefined &&
          subscribe.quantity > 0 &&
          !subscribeAll ? (
          <p className={"pom"}>
            Вам доступно:{" "}
            {subscribe.quantity > 1
              ? `${subscribe.quantity} любые расшифровки`
              : `${subscribe.quantity} любая расшифровка`}
          </p>
        ) : undefined}
        <div className={"matrixSearch"}>
          <span
            onClick={() => onClickHandlerMatrix("personal")}
            className={`matrixSpanSearch ${
              matrix === "personal" ? "activeMatrix" : ""
            }`}
          >
            Персональная матрица
          </span>
          <span
            onClick={() => onClickHandlerMatrix("children")}
            className={`matrixSpanSearch ${
              matrix === "children" ? "activeMatrix" : ""
            }`}
          >
            Детская матрица
          </span>
          <span
            onClick={() => onClickHandlerMatrix("compatibility")}
            className={`matrixSpanSearch ${
              matrix === "compatibility" ? "activeMatrix" : ""
            }`}
          >
            Матрица совместимости
          </span>
        </div>
        <FormGroup>
          {matrix === "personal" || matrix === "children" ? (
            <TextField
              className={"textMatrix"}
              label={"Имя"}
              onChange={onChangeHandlerName}
            />
          ) : undefined}
        </FormGroup>
        {matrix === "personal" ? (
          <Stack
            className={"matrixStack"}
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
              className={"textMatrix"}
              onChange={onChangeHandler}
              label="Дата рождения"
              value={value}
              placeholder={"дд/мм/гггг"}
              sx={{ width: 400, bottom: "20px" }}
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    onChange={onCheck}
                    sx={{ m: 1 }}
                    defaultChecked={check}
                  />
                }
                label="Выберите пол"
              />
            </FormGroup>
            <Link
              aria-disabled
              className={`batonStandartSearch ${
                value.length !== 10 || name.length === 0 ? "disabled-link" : ""
              }`}
              state={{
                date: value.split("-").reverse().join("-"),
                male: check ? "M" : "W",
                child: false,
                sub,
                id,
                name,
              }}
              to={"/matrix"}
            >
              Рассчитать
            </Link>
          </Stack>
        ) : matrix === "children" ? (
          <Stack
            className={"matrixStack"}
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
              className={"textMatrix"}
              onChange={onChangeHandler}
              label="Дата рождения ребенка"
              placeholder={"дд/мм/гггг"}
              value={value}
              sx={{ width: 400, bottom: "20px" }}
            />
            <FormControlLabel
              control={
                <MaterialUISwitch
                  onChange={onCheck}
                  sx={{ m: 1 }}
                  defaultChecked={check}
                />
              }
              label="Выберите пол ребенка"
            />
            <Link
              className={`batonStandartSearch ${
                value.length !== 10 || name.length === 0 ? "disabled-link" : ""
              }`}
              state={{
                date: value.split("-").reverse().join("-"),
                male: check ? "M" : "W",
                child: true,
                auth,
                sub,
                id,
                name,
              }}
              to={"/matrix"}
            >
              Рассчитать
            </Link>
          </Stack>
        ) : (
          <Stack
            className={"matrixStack"}
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
              className={"textMatrix"}
              onChange={onChangeHandler}
              label="Дата рождения партнера 1"
              placeholder={"дд/мм/гггг"}
              value={value}
              sx={{ width: 400, bottom: "20px !important" }}
            />
            <TextField
              className={"textMatrix"}
              onChange={onChangeHandler1}
              label="Дата рождения партнера 2"
              placeholder={"дд/мм/гггг"}
              value={value1}
              sx={{ width: 400, bottom: "20px !important" }}
            />
            <Link
              className={`batonStandartSearch ${
                value.length !== 10 || value1.length !== 10
                  ? "disabled-link"
                  : ""
              }`}
              state={{
                date: value.split("-").reverse().join("-"),
                date1: value1.split("-").reverse().join("-"),
                sub,
                id,
              }}
              to={"/matrixcompatibility"}
            >
              Рассчитать
            </Link>
          </Stack>
        )}
      </section>
    </React.Fragment>
  );
}
