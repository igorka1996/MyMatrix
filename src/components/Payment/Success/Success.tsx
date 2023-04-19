import React from "react";
import "./Success.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

export const Success = () => {
  return (
    <div className={"sectionSuccess"}>
      <div className={"forgotBox"}>
        <span className={"forgotSpan"}>Ваша оплата прошла успешно</span>
        <CheckCircleIcon
          style={{
            fontSize: 100,
            color: "green",
            marginBottom: 40,
          }}
        />
        <Link className={"batonStandart"} to={"/"}>
          Перейти к рассчету матрицы
        </Link>
      </div>
    </div>
  );
};
