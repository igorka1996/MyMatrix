import React from "react";
import { useAppSelector } from "../../../../redux-store/store";
import "./Orders.scss";
import { HashLink as Anchor } from "react-router-hash-link";

export const Orders = () => {
  const orders = useAppSelector(
    (state) => state.registrationReducer.historyOfOrders
  );
  const totalAmount = useAppSelector(
    (state) => state.registrationReducer.totalAmount
  );

  const total = totalAmount.toString().replace(/(\d+)00(?=\s|$)/g, "$1,00");

  const historyOrders = orders.map((el) => {
    const outputString = el.price.replace(/(\d+)00(?=\s|$)/g, "$1,00");
    return (
      <div className={"divOrders"}>
        <span
          style={{ backgroundColor: "rgb(111, 137, 173)" }}
          className={"spanOrders"}
        >
          Тариф: <span className={"spanOrdersMap"}>{el.name}</span>
        </span>
        <span
          style={{ backgroundColor: "rgb(148, 134, 179)" }}
          className={"spanOrders"}
        >
          Дата приобретения: <span className={"spanOrdersMap"}>{el.date}</span>
        </span>
        <span
          style={{ backgroundColor: "rgb(228, 228, 206)" }}
          className={"spanOrders"}
        >
          Стоимость:{" "}
          <span className={"spanOrdersMap"}>{`${outputString} руб.`}</span>{" "}
        </span>
      </div>
    );
  });

  return (
    <div className={"userProfile"}>
      {orders.length ? (
        <div>
          <span className={"spanTarifActive"}>
            Ваша история приобретения тарифов
          </span>
          <div className={"divOrdersHistory"}>{historyOrders}</div>
          <div style={{ fontSize: 25 }}>
            Общая затраченная сумма:
            <span
              style={{ marginLeft: 10, fontWeight: "bold" }}
            >{`${total} руб.`}</span>
          </div>
        </div>
      ) : (
        <div>
          <span className={"spanNoneTarif"}>Ваша история заказов пуста</span>
          <Anchor
            className={"batonStandart"}
            smooth
            to={"/#tarif"}
            style={{ marginTop: 30, maxWidth: 185 }}
          >
            Выбрать тариф
          </Anchor>
        </div>
      )}
    </div>
  );
};
