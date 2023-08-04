import React from "react";
import { Card } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Link } from "react-router-dom";
import "./LearnPay.scss";

export const LearnPay = () => {
  return (
    <div className={"learnDiv"}>
      <span className={"spanLearn"}>Программы обучения</span>
      <div className={"learnProgram"}>
        <div className={"learnDescription"} data-counter="1">
          <span className={"learnSpanKourse"}>Базовый курс матрицы</span>
          <p className={"learnP"}>
            Вторая ступень для мастеров, которые хотят усилить результаты
            клиентов. Обучение работе с Метафорическими Ассоциативными Картами.
            Интенсив о том, как доводить клиентов до результата через смену
            негативных сценариев. Работа с подсознанием, психологические
            сценарии, МАК-техники и онлайн МАК-колоды для работы.
          </p>
          <Link
            style={{ backgroundColor: "rgb(148, 134, 179)" }}
            className={"batonStandart"}
            to={"/pay"}
            state={{
              name: "Базовый курс матрицы",
              price: 399000,
            }}
          >
            Приобрести
          </Link>
        </div>
        <div className={"learnDescription"} data-counter="2">
          <span className={"learnSpanKourse"}>Курс детской матрицы</span>
          <p className={"learnP"}>
            Вторая ступень для мастеров, которые хотят усилить результаты
            клиентов. Обучение работе с Метафорическими Ассоциативными Картами.
            Интенсив о том, как доводить клиентов до результата через смену
            негативных сценариев. Работа с подсознанием, психологические
            сценарии, МАК-техники и онлайн МАК-колоды для работы.
          </p>
          <Link
            style={{ backgroundColor: "rgb(148, 134, 179)" }}
            className={"batonStandart"}
            to={"/pay"}
            state={{
              name: "Курс детской матрицы",
              price: 250000,
            }}
          >
            Приобрести
          </Link>
        </div>
        <div className={"learnDescription"} data-counter="3">
          <span className={"learnSpanKourse"}>Курс матрицы совместимости</span>
          <p className={"learnP"}>
            Вторая ступень для мастеров, которые хотят усилить результаты
            клиентов. Обучение работе с Метафорическими Ассоциативными Картами.
            Интенсив о том, как доводить клиентов до результата через смену
            негативных сценариев. Работа с подсознанием, психологические
            сценарии, МАК-техники и онлайн МАК-колоды для работы.
          </p>
          <Link
            style={{ backgroundColor: "rgb(148, 134, 179)" }}
            className={"batonStandart"}
            to={"/pay"}
            state={{
              name: "Курс матрицы совместимости",
              price: 250000,
            }}
          >
            Приобрести
          </Link>
        </div>
      </div>

      <div className={"backColor otstup"}>
        <div className={"allPay"}>
          <div className={"listPay"}>
            <Card className={"card box4"}>
              <span className={"spanPay"}>Базовый курс матрицы</span>
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
                state={{ name: "Базовый курс матрицы", price: 500000 }}
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
                  name: "Базовый курс + Вместе и навсегда",
                  price: 1000000,
                }}
              >
                Оплатить
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
