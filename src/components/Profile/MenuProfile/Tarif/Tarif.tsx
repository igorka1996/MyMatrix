import React from "react";
import "./Tarif.scss";
import { useAppSelector } from "../../../../redux-store/store";
import { HashLink as Anchor } from "react-router-hash-link";

export const Tarif = () => {
  const subscribe = useAppSelector(
    (state) => state.registrationReducer.subscription
  );

  const tarif = subscribe.map((el: any) => {
    return !!el?.access || !!el?.access || !!el?.access ? (
      <span className={"spanTarif"}>
        {`Тариф: ${el.subscribe}` ||
          `Тариф: ${el.subscribe}` ||
          `Тариф: ${el.subscribe}`}
      </span>
    ) : undefined;
  });
  return (
    <div className={"userProfile"}>
      {!subscribe.filter((e: any) => e.access).length ? (
        <div>
          <span className={"spanNoneTarif"}>
            На данный момент у Вас нет активных тарифов
          </span>
          <Anchor
            className={"batonStandart"}
            smooth
            to={"/#tarif"}
            style={{ marginTop: 30, maxWidth: 185 }}
          >
            Выбрать тариф
          </Anchor>
        </div>
      ) : (
        <div>
          <span className={"spanTarifActive"}>Действующие тарифы</span>
          <div>{tarif}</div>
          <Anchor
            className={"batonStandart"}
            smooth
            to={"/#tarif"}
            style={{ marginTop: 30, minWidth: 150, maxWidth: 265 }}
          >
            Тарифы и их описание
          </Anchor>
        </div>
      )}
    </div>
  );
};
