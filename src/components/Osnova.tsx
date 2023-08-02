import React from "react";
import { Payment } from "./Payment/Payment";
import "../App.scss";
import { DatePickers } from "../feature/DatePickers";
import { HashLink as Anchor } from "react-router-hash-link";

export const Osnova = () => {
  return (
    <>
      <div className={"backImage"}></div>
      <section className={"AppLow"}>
        <h1 className={"h1"}>
          <p className={"matrixText"}>Матрица</p>
          твоей судьбы
          <Anchor smooth to={"/#tarif"} className={"baton"}>
            РАССЧИТАТЬ
          </Anchor>
        </h1>
      </section>
      <section>
        <DatePickers />
      </section>
      <Payment />
    </>
  );
};
