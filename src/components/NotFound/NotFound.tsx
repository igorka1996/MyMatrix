import React from "react";
import "./NotFound.scss";
import kosmo from "./../../1357402.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className={"notFound"}>
      <img src={kosmo} width={400} alt="Страница не найдена" />
      <span
        className={"spanOferta"}
        style={{ textAlign: "center", color: "#9486b3" }}
      >
        Такой страницы не существует.
        <br /> Для вселенной остается загадкой как вы сюда попали
        <br />
        <Link className={"batonStandart"} style={{ margin: "20px 0" }} to={"/"}>
          На главную
        </Link>
      </span>
    </div>
  );
};
