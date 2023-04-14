import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./Welcome.scss";
import { Link, Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux-store/store";
import { Login } from "../../feature/Login";
import { RegistrationForm } from "../../feature/RegistrationForm";
import { IconHome } from "../../feature/Icon";

export const Welcome = () => {
  const auth = useAppSelector((state) => state.registrationReducer.auth);
  const [value, setValue] = useState(false);

  if (auth) {
    return <Navigate to={"/"} />;
  }

  return (
    <Box className={"login"}>
      <div className={"fonLogin"}>
        <Link className={"linkIcon"} to={"/"}>
          <IconHome />
        </Link>
      </div>
      <div className={"formLogin"}>
        <span className={"spanDobro"}>Добро пожаловать</span>
        <div className={"knopki"}>
          <button
            style={{
              borderRadius: "10px 0px 0px 10px",
              backgroundColor: !value ? "rgb(111, 137, 173)" : "#fff",
              color: !value ? "#fff" : "#000",
            }}
            className={"knopka"}
            onClick={() => setValue(false)}
          >
            Войти
          </button>
          <button
            style={{
              borderRadius: "0px 10px 10px 0px",
              backgroundColor: value ? "rgb(111, 137, 173)" : "#fff",
              color: value ? "#fff" : "#000",
            }}
            className={"knopka"}
            onClick={() => setValue(true)}
          >
            Зарегистрироватся
          </button>
        </div>
        {!value ? <Login /> : <RegistrationForm />}
      </div>
    </Box>
  );
};
