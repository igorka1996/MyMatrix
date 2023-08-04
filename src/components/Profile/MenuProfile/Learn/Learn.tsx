import React, { useState, useEffect } from "react";
import "./Learn.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../redux-store/store";
import { v4 } from "uuid";

const checkSubscription = (subscribe: []) => {
  return subscribe.filter(
    (el: any) =>
      (el.subscribe === "Базовый курс + Вместе и навсегда" ||
        el.subscribe === "Базовый курс матрицы" ||
        el.subscribe === "Курс детской матрицы" ||
        el.subscribe === "Курс матрицы совместимости") &&
      el.access === true
  );
};

export const Learn = () => {
  const subscribe = useAppSelector(
    (state) => state.registrationReducer.subscription
  );
  const [set, setState] = useState(false);

  useEffect(() => {
    setState(checkSubscription(subscribe).length > 0);
  }, [subscribe]);

  const learnSubArr = checkSubscription(subscribe);

  const learnSubFilter = learnSubArr.map((e: any) => {
    if (
      e.subscribe === "Базовый курс + Вместе и навсегда" ||
      e.subscribe === "Базовый курс матрицы"
    ) {
      return {
        subscribe: "Базовый курс матрицы",
        access: true,
      };
    }
    return e;
  });

  const uniqueArray: any[] = [];
  learnSubFilter.forEach((item: any) => {
    const existingItem = uniqueArray.find(
      (uniqueItem) =>
        uniqueItem.subscribe === item.subscribe &&
        uniqueItem.access === item.access
    );
    if (!existingItem) {
      uniqueArray.push(item);
    }
  });

  const learnSub = uniqueArray.map((el: any) => (
    <div className={"subLearn"} key={v4()}>
      {el.subscribe === "Базовый курс матрицы" ? (
        <div className={"subLearnSpan"}>
          <span>{el.subscribe}</span>
          <Link
            style={{
              maxWidth: 220,
              backgroundColor: "rgb(222, 176, 161)",
            }}
            className={"batonStandart"}
            to={
              "https://gradients.app/ru/colorpalette/75a59e-588e7f-3f775f-317c53-2a9d58-2cbe56/"
            }
          >
            Перейти к обучению
          </Link>
        </div>
      ) : el.subscribe === "Курс детской матрицы" ? (
        <div className={"subLearnSpan"}>
          <span>{el.subscribe}</span>
          <Link
            style={{
              maxWidth: 220,
              backgroundColor: "rgb(222, 176, 161)",
            }}
            className={"batonStandart"}
            to={"/"}
          >
            Перейти к обучению
          </Link>
        </div>
      ) : (
        <div className={"subLearnSpan"}>
          <span>{el.subscribe}</span>
          <Link
            style={{
              maxWidth: 220,
              backgroundColor: "rgb(222, 176, 161)",
            }}
            className={"batonStandart"}
            to={"/"}
          >
            Перейти к обучению
          </Link>
        </div>
      )}
    </div>
  ));
  return (
    <div className={"userProfile"}>
      {!set ? (
        <div className={"learnMenu"}>
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
            to={"/learn"}
          >
            Приобрсти обучение
          </Link>
        </div>
      ) : (
        <div className={"learnMenu"}>
          <span className={"spanNoneTarif"}>
            Ваши приобретенные виде-обучения
          </span>
          {learnSub}
        </div>
      )}
    </div>
  );
};
