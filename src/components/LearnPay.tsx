import React from "react";
import { Card } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Link } from "react-router-dom";

export const LearnPay = () => {
  return (
    <div className={"backColor otstup"}>
      <div className={"allPay"}>
        <div className={"listPay"}>
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
