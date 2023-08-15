import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import { getUser, updateUser } from "../../redux-store/admin-one-user";
import { useLocation } from "react-router-dom";
import "./UserInfo.scss";
import { CircularProgress, Switch } from "@mui/material";
import { v4 } from "uuid";

export const UserInfo = () => {
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const userSub = useAppSelector((state) => state.adminUser.subscription);
  const userAdminWait = useAppSelector((state) => state.errorReducer.userAdmin);
  const name = useAppSelector((state) => state.adminUser.name);
  const surname = useAppSelector((state) => state.adminUser.surname);
  const phone = useAppSelector((state) => state.adminUser.phone);
  const email = useAppSelector((state) => state.adminUser.email);
  const orders = useAppSelector((state) => state.adminUser.historyOfOrders);
  const avatar = useAppSelector((state) => state.adminUser.avatarURL);
  const switchWait = useAppSelector((state) => state.errorReducer.switchWait);

  const sub = userSub.map((e: any, index) => {
    return (
      <div key={index} className={"subNameChange"}>
        <span>{e.subscribe}</span>
        <Switch
          disabled={switchWait}
          checked={e.access}
          onChange={(event) =>
            dispatch(
              updateUser({
                id: state.id,
                subscribe: e.subscribe,
                access: event.currentTarget.checked,
              })
            )
          }
          color="secondary"
        />
      </div>
    );
  });

  const historyOrders = orders.map((el) => {
    const outputString = el.price
      ?.toString()
      .replace(/(\d+)00(?=\s|$)/g, "$1,00");
    return (
      <div key={v4()} className={"divOrders"}>
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

  useEffect(() => {
    dispatch(getUser({ id: state.id }));
  }, [dispatch, state.id]);

  if (userAdminWait) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          top: "50%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className={"userInfo"}>
      <div className={"personalInfo"}>
        <span className={"spanUserInfoSub"}>Личная информация</span>
        <img
          className={"avatarAdmin"}
          src={
            avatar
              ? avatar
              : "https://www.eltis.org/sites/default/files/styles/adaptive/public/default_images/default_user_0.jpg?itok=oxLSK7Nx"
          }
          width={100}
          alt="аватар"
        />
        <span>
          <b>Имя</b>: {name}
        </span>
        <span>
          <b>Фамилия</b>: {surname}
        </span>
        <span>
          <b>Телефон</b>: {phone}
        </span>
        <span>
          <b>Почта</b>: {email}
        </span>
      </div>

      <div className={"divSub"}>
        <span className={"spanUserInfoSub"}>Подписки</span>
        <div>{sub}</div>
      </div>
      <div className={"personalInfo"}>
        <span className={"spanUserInfoSub"}>История приобретения тарифов</span>
        <div className={"divOrdersHistory"}>{historyOrders}</div>
      </div>
    </div>
  );
};
