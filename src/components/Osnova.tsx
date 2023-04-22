import React from "react";
import { Payment } from "./Payment/Payment";
import "../App.css";
import { DatePicker } from "../feature/DatePicker";

export const Osnova = () => {
  return (
    <>
      <div className={"backImage"}></div>
      <section className={"AppLow"}>
        <h1 className={"h1"}>
          <p className={"matrixText"}>Матрица</p>
          твоей судьбы
          <button className={"baton"}>ПРОВЕСТИ РАСЧЕТ</button>
        </h1>
      </section>
      <section>
        <DatePicker />
      </section>
      <Payment />
    </>
  );
};
