import React from "react";
import "./Success.scss";
import { Link } from "react-router-dom";
import mark from "./../../../mark.png";

export const SuccessLesson = () => {
  return (
    <div className={"sectionSuccess"}>
      <div className={"forgotBox"}>
        <span className={"forgotSpan"}>Ваша оплата прошла успешно</span>
        <img width={200} src={mark} alt="Успешно" />
        <Link className={"batonStandart"} to={"/profile/learn"}>
          Перейти к обучению
        </Link>
      </div>
    </div>
  );
};
