import React from "react";
import { Card } from "@mui/material";
import "./Payment.scss";
import { Link } from "react-router-dom";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

export const Payment = () => {
  return (
    <div id={"tarif"} className={"backColor"}>
      <div className={"allPay"}>
        <span className={"tarifText"}>
          Измени свою жизнь к лучшему уже сейчас
        </span>
        <div className={"listPay"}>
          <Card className={"card box1"}>
            <span className={"spanPay"}>Матрица на месяц</span>
            <ul>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} /> Расшифровка детской матрицы
              </li>
              <li className={"ulPay"}>
                {" "}
                <DoneOutlineIcon className={"ic"} />
                Расшифровка совместимости
              </li>
              <li className={"ulPay"}>
                {" "}
                <DoneOutlineIcon className={"ic"} />
                Полная расшифровка Матрицы
              </li>
              <li className={"ulPay"}>
                {" "}
                <DoneOutlineIcon className={"ic"} />
                Количество дат к проверке не ограничено
              </li>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />
                Доступ НА 1 МЕСЯЦ
              </li>
            </ul>
            <span className={"price"}>2 490₽</span>
            <Link
              style={{ backgroundColor: "rgb(186, 130, 167)" }}
              className={"batonStandart"}
              to={"/pay"}
              state={{ name: "Матрица на месяц", price: 249000 }}
            >
              Оплатить
            </Link>
          </Card>
          <Card className={"card box2"}>
            <span className={"spanPay"}>Раз и навсегда</span>
            <ul>
              <li className={"ulPay fiol"}>
                <DoneOutlineIcon className={"ic"} />
                Расшифровка детской матрицы
              </li>
              <li className={"ulPay fiol"}>
                <DoneOutlineIcon className={"ic"} />
                Расшифровка совместимости
              </li>
              <li className={"ulPay fiol"}>
                <DoneOutlineIcon className={"ic"} />
                Полная расшифровка Матрицы
              </li>
              <li className={"ulPay fiol"}>
                <DoneOutlineIcon className={"ic"} />
                Количество дат к проверке не ограничено
              </li>
              <li className={"ulPay fiol"}>
                <DoneOutlineIcon className={"ic"} />
                Доступ НАВСЕГДА
              </li>
            </ul>
            <span className={"price"}>7 490₽</span>
            <Link
              style={{ backgroundColor: "rgb(111, 137, 173)" }}
              className={"batonStandart"}
              to={"/pay"}
              state={{ name: "Вместе и навсегда", price: 749000 }}
            >
              Оплатить
            </Link>
          </Card>
          <Card className={"card box3"}>
            <span className={"spanPay"}>Пробный</span>
            <ul>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />1 Расшифровка Матрицы судьбы
              </li>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />1 Расшифровка совместимости
              </li>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />1 Расшифровка Детской
                Матрицы
              </li>
            </ul>
            <span className={"price"}>790₽</span>
            <Link
              style={{ backgroundColor: "rgb(222, 176, 161)" }}
              className={"batonStandart"}
              to={"/pay"}
              state={{ name: "Пробный", price: 79000 }}
            >
              Оплатить
            </Link>
          </Card>
          <Card className={"card box4"}>
            <span className={"spanPay"}>Видео-курс</span>
            <ul>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />
                Вы получаете обучающий курс
              </li>
            </ul>
            <span className={"price"}>5 000₽</span>
            <Link
              style={{
                backgroundColor: "rgb(228, 228, 206)",
                textShadow:
                  "-1px -1px 0 rgb(148, 134, 179), 1px -1px 0 rgb(148, 134, 179), -1px 1px 0 rgb(148, 134, 179), 1px 1px 0 rgb(148, 134, 179)",
              }}
              className={"batonStandart"}
              to={"/pay"}
              state={{ name: "Видео-курс", price: 500000 }}
            >
              Оплатить
            </Link>
          </Card>
          <Card className={"card box5"}>
            <span className={"spanPay"}>Видео-курс + Раз и навсегда</span>
            <ul>
              <li className={"ulPay"}>
                <DoneOutlineIcon />
                Вы получаете обучающий курс
              </li>
              <li className={"ulPay"}>
                <DoneOutlineIcon />
                Доступ к калькулятору навсегда
              </li>
            </ul>
            <span className={"price"}>10 000₽</span>
            <Link
              style={{ backgroundColor: "rgb(148, 134, 179)" }}
              className={"batonStandart"}
              to={"/pay"}
              state={{
                name: "Видео-курс + Вместе и навсегда",
                price: 1000000,
              }}
            >
              Оплатить
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};