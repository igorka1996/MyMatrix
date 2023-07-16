import React from "react";
import "./Success.scss";
import { Link, useLocation } from "react-router-dom";
import mark from "./../../../mark.png";
import { useAppSelector } from "../../../redux-store/store";

export const SuccessDateOnce = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const matrix = queryParams.get("matrix");
  const date = queryParams.get("date");
  const name = queryParams.get("name");
  const gender = queryParams.get("gender");
  const date1 = queryParams.get("date1");
  const date2 = queryParams.get("date2");
  const sub = useAppSelector((state) => state.registrationReducer.subscription);
  const id = useAppSelector((state) => state.registrationReducer.id);
  return (
    <div className={"sectionSuccess"}>
      <div className={"forgotBox"}>
        <span className={"forgotSpan"}>Ваша оплата прошла успешно</span>
        <img width={200} src={mark} alt="Успешно" />
        {matrix === "compatibility" ? (
          <Link
            className={"batonStandart"}
            state={{ date: date1, date1: date2, sub, id }}
            to={"/matrixcompatibility"}
          >
            Перейти к приобретенной дате
          </Link>
        ) : (
          <Link
            aria-disabled
            className={"batonStandart"}
            state={{
              date: date,
              male: gender,
              child: matrix !== "personal",
              sub,
              id,
              name,
            }}
            to={"/matrix"}
          >
            Перейти к приобретенной дате
          </Link>
        )}
      </div>
    </div>
  );
};
