import React from "react";
import "./Success.scss";
import mark from "./../../../mark.png";
import { HashLink as Anchor } from "react-router-hash-link";

export const Success = () => {
  return (
    <div className={"sectionSuccess"}>
      <div className={"forgotBox"}>
        <span className={"forgotSpan"}>Ваша оплата прошла успешно</span>
        <img width={200} src={mark} alt="Успешно" />
        <Anchor smooth to={"/#sectionDateScroll"} className={"baton"}>
          Перейти к рассчету матрицы
        </Anchor>
      </div>
    </div>
  );
};
