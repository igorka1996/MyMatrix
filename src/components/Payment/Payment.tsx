import React from "react";
import { Card } from "@mui/material";
import "./Payment.scss";
import { Link } from "react-router-dom";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

export const Payment = () => {
  return (
    <div id={"tarif"} className={"backColor"}>
      <div className={"allPay"}>
        <p className={"tarifText"}>Измени свою жизнь к лучшему уже сейчас</p>
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
            <div className={"divBoxPay"}>
              <span className={"price"}>1 990₽</span>
              <Link
                className={"batonStandartSearch"}
                to={"/pay"}
                state={{ name: "Матрица на месяц", price: 1990 }}
              >
                Оплатить
              </Link>
            </div>
          </Card>
          <Card className={"card box2"}>
            <span className={"spanPay"}>Раз и навсегда</span>
            <ul>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />
                Расшифровка детской матрицы
              </li>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />
                Расшифровка совместимости
              </li>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />
                Полная расшифровка Матрицы
              </li>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />
                Количество дат к проверке не ограничено
              </li>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />
                Доступ НАВСЕГДА
              </li>
            </ul>
            <div className={"divBoxPay"}>
              <span className={"price"}>4 990₽</span>
              <Link
                className={"batonStandartSearch"}
                to={"/pay"}
                state={{ name: "Вместе и навсегда", price: 4990 }}
              >
                Оплатить
              </Link>
            </div>
          </Card>
          <Card className={"card box3"}>
            <span className={"spanPay"}>Пробный</span>
            <ul>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />1 Расшифровка Матрицы судьбы
                <br />
                или
              </li>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />1 Расшифровка совместимости
                <br />
                или
              </li>
              <li className={"ulPay"}>
                <DoneOutlineIcon className={"ic"} />1 Расшифровка Детской
                Матрицы
              </li>
            </ul>
            <div className={"divBoxPay"}>
              <span className={"price"}>390₽</span>
              <Link
                className={"batonStandartSearch"}
                to={"/pay"}
                state={{ name: "Пробный", price: 1 }}
              >
                Оплатить
              </Link>
            </div>
          </Card>
        </div>
        <p
          className={"pVajno"}
          style={{
            textAlign: "center",
            color: "red",
            fontSize: 25,
            marginBottom: 50,
          }}
        >
          <span className={"spanVajno"}>Важно!!!</span> <br /> 1. Все
          приобретенные даты по подписке будут доступны Вам навсегда в разделе
          "История поиска матриц".
          <br />
          2. При приобретении тарифа "Пробный" повторно, количество расшифровок
          прибавляется к уже ранее приобретенным.
          <br />
          3. При приобретении тарифа "Матрица на месяц" повторно, месяц
          прибавляется к ранее приобретенному месяцу.
        </p>
      </div>
    </div>
  );
};
