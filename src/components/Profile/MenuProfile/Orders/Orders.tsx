import React from "react";
import { useAppSelector } from "../../../../redux-store/store";
import "./Orders.scss";
import { HashLink as Anchor } from "react-router-hash-link";

export const Orders = () => {
  const orders = useAppSelector(
    (state) => state.registrationReducer.historyOfOrders
  );
  console.log(orders);
  const totalAmount = useAppSelector(
    (state) => state.registrationReducer.totalAmount
  );

  const total = totalAmount.toString().replace(/(\d+)00(?=\s|$)/g, "$1,00");

  const historyOrders = orders.map((el) => {
    const outputString = el.price
      ?.toString()
      .replace(/(\d+)00(?=\s|$)/g, "$1,00");
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
          Дата приобретения:{" "}
          <span className={"spanOrdersMap"}>
            {el.date.replace(
              /(\d+)-(\d+)-(\d+) (\d+):(\d+):(\d+)/,
              (_, year, month, day, hour, minute, second) =>
                `${day.padStart(2, "0")}-${month.padStart(
                  2,
                  "0"
                )}-${year} ${hour.padStart(2, "0")}:${minute.padStart(
                  2,
                  "0"
                )}:${second.padStart(2, "0")}`
            )}
          </span>
        </span>
        <span
          style={{ backgroundColor: "rgb(222, 176, 161)" }}
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
