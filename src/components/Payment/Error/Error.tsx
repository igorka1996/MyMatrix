import React from "react";
import { Link } from "react-router-dom";
import mark from "./../../../error.png";

export const Error = () => {
  return (
    <div className={"sectionSuccess"}>
      <div className={"forgotBox"}>
        <span className={"forgotSpan"}>Ваша оплата не прошла</span>
        <img width={200} src={mark} alt="Ошибка" />
        <Link className={"batonStandart"} to={"/"}>
          Попробовать снова
        </Link>
      </div>
    </div>
  );
};
