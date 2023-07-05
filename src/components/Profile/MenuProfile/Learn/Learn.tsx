import React, { useState, useEffect } from "react";
import "./Learn.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../redux-store/store";

const checkSubscription = (subscribe: []) => {
  return subscribe.filter((el: any) => {
    if (
      el.subscribe === "Видео-курс + Вместе и навсегда" ||
      el.subscribe === "Видео-курс"
    ) {
      if (el.access === true) {
        return el;
      }
    }
  });
};

export const Learn = () => {
  const subscribe = useAppSelector(
    (state) => state.registrationReducer.subscription
  );
  const [set, setState] = useState(false);

  useEffect(() => {
    setState(checkSubscription(subscribe).length > 0);
  }, [subscribe]);

  return (
    <div className={"userProfile"}>
      {!set ? (
        <div>
          <span className={"spanNoneTarif"}>
            Вы можете приобрести курс по обучению расшифровки матрицы судьбы
          </span>
          <Link
            style={{
              marginTop: 30,
              maxWidth: 120,
              backgroundColor: "rgb(222, 176, 161)",
            }}
            className={"batonStandart"}
            to={"/pay"}
            state={{ name: "Видео-курс", price: 500000 }}
          >
            Оплатить
          </Link>
        </div>
      ) : (
        <div>
          <span className={"spanNoneTarif"}>
            Вам открыт доступ на виде-обучение
          </span>
          <Link
            style={{
              marginTop: 30,
              maxWidth: 186,
              backgroundColor: "rgb(228, 228, 206)",
              textShadow:
                "-1px -1px 0 rgb(148, 134, 179), 1px -1px 0 rgb(148, 134, 179), -1px 1px 0 rgb(148, 134, 179), 1px 1px 0 rgb(148, 134, 179)",
            }}
            className={"batonStandart"}
            to={
              "https://gradients.app/ru/colorpalette/6f89ad-9486b3-ba82a7-deb0a1-e4e4ce/"
            }
          >
            Видео-обучение
          </Link>
        </div>
      )}
    </div>
  );
};
