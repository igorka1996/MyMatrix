import React, { useState } from "react";
import { Card } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Link } from "react-router-dom";
import "./LearnPay.scss";
import sertificateImage from "../sertificate.png";

export const LearnPay = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageUrl: any) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };
  return (
    <div className={"learnDiv"}>
      <span className={"spanLearn"}>Программы обучения</span>
      <div className={"learnProgram"}>
        <div className={"learnDescription"} data-counter="1">
          <span className={"learnSpanKourse"}>Базовый урок по матрицы</span>
          <p className={"learnP"}>
            -Расчет матрицы судьбы
            <br />
            -Погружение в три семерицы энергии 1-22 аркан
            <br />
            -Карма и виды карм: <br />
            1. Детско-родительская карма
            <br />
            2. Родовые программы
            <br />
            3. Кармический хвост
            <br />
            -Программы в матрице судьбы:
            <br />
            1. троичные ключи
            <br />
            -Предназначение
            <br />
            -Деньги в матрице судьбы
            <br />
            -Таланты
            <br />
            -Отношения в матрице судьбы
            <br />
            -Портрет вашего идеального партнера
            <br />
            -Карта здоровья в матрице
            <br />
            -Методы прогнозирования в матрице судьбы
            <br />
            -Зеркальные каналы в матрице
            <br />
            -Урок по консультациям
          </p>
          <div className={"divBoxPay"}>
            <span className={"price"}>4 590₽</span>
            <Link
              style={{ backgroundColor: "rgb(148, 134, 179)" }}
              className={"batonStandart"}
              to={"/pay"}
              state={{
                name: "Базовый курс матрицы",
                price: 459000,
              }}
            >
              Приобрести
            </Link>
          </div>
        </div>
        <div className={"learnDescription"} data-counter="2">
          <span className={"learnSpanKourse"}>Урок по детской матрице</span>
          <p className={"learnP"}>
            Видео урок: "Особенности разбора Детской матрицы"
            <br />
            Методичка: "Расшифровка Детской матрицы" (Описание 22 энергий,
            адаптированные под детскую матрицу;
            <br />
            Негативные сценарии, навязанные родителями;
            <br />
            Рекомендации для родителей (кружки и секции)
            <br />
            Методичка: "Детско-родительские отношения" (чему пришел научить
            ребенок; какие ошибки по отношению к родителям и детям вы можете
            совершать, к чему важно прийти)
            <br />
            Анкета для родителей
          </p>
          <div className={"divBoxPay"}>
            <span className={"price"}>2 500₽</span>
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
        </div>
        <div className={"learnDescription"} data-counter="3">
          <span className={"learnSpanKourse"}>
            Урок по матрице совместимости
          </span>
          <p className={"learnP"}>
            Видео урок "Расчет матрицы совместимости и анализа матрицы
            совместимости"
            <br />
            Методичка по каналу отношений Методичка "Расшифровка матрицы
            совместимости с рекомендациями для проработки энергий на каждой
            позиции "
          </p>
          <div className={"divBoxPay"}>
            <span className={"price"}>2 500₽</span>
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
        <div>
          <span className={"spanLearn"}>
            Такой сертификат вы получаете после окончания курса
          </span>
          <div className={"imgDiv"}>
            <img
              className={"imgSertificate"}
              src={sertificateImage}
              alt="Сертификат"
              onClick={() => openModal(sertificateImage)}
            />
          </div>
          {modalOpen && (
            <div className="modal-container">
              <div className="modal-overlay" onClick={closeModal}></div>
              <div className="modal-content">
                <img src={selectedImage} alt="Full-screen" />
              </div>
            </div>
          )}
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
              <div className={"divBoxPay"}>
                <span className={"price"}>4 590₽</span>
                <Link
                  style={{
                    backgroundColor: "rgb(228, 228, 206)",
                    textShadow:
                      "-1px -1px 0 rgb(148, 134, 179), 1px -1px 0 rgb(148, 134, 179), -1px 1px 0 rgb(148, 134, 179), 1px 1px 0 rgb(148, 134, 179)",
                  }}
                  className={"batonStandart"}
                  to={"/pay"}
                  state={{ name: "Базовый курс матрицы", price: 459000 }}
                >
                  Оплатить
                </Link>
              </div>
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
              <div className={"divBoxPay"}>
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
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
