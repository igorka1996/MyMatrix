import React from "react";
import { Payment } from "./Payment/Payment";
import "../App.scss";
import { DatePickers } from "../feature/DatePickers";

export const Osnova = () => {
  return (
    <>
      <div className={"backImage"}></div>
      <section className={"AppLow"}>
        <h1 className={"h1"}>
          <p className={"matrixText"}>Матрица</p>
          твоей судьбы
          <button className={"baton"}>РАССЧИТАТЬ</button>
        </h1>
      </section>
      <section>
        <DatePickers />
      </section>
      <Payment />
    </>
  );
};
