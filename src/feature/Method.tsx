import React from "react";
import "./Method.scss";
import MoneyOffIconTwoToneIcon from "@mui/icons-material/MoneyOff";
import WorkOffTwoToneIcon from "@mui/icons-material/WorkOffTwoTone";
import HeartBrokenTwoToneIcon from "@mui/icons-material/HeartBrokenTwoTone";
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone";
import ContactSupportTwoToneIcon from "@mui/icons-material/ContactSupportTwoTone";

export const Method = () => {
  return (
    <div id={"methodScroll"} className={"methodDiv"}>
      <span className={"methodSpan"}>О методе</span>
      <div className={"methodFlex"}>
        <div className={"methodDescription"}>
          Эта система самопознания помогает определить вашу индивидуальность
          через анализ личности. Она служит инструментом для раскрытия
          внутренних ресурсов и достижения гармонии. Получение знаний о энергиях
          вашей Матрицы Судьбы помогает вам лучше понять себя, улучшить все
          сферы жизни, начать оказывать профессиональную консультацию,
          зарабатывать онлайн и вести свободный образ жизни, работая из любой
          точки мира.
        </div>
        <div className={"methodIconAndDescription"}>
          <div className={"IconAndDescription"}>
            <MoneyOffIconTwoToneIcon
              style={{ fontSize: 50, color: "#3f775f" }}
            />
            <span>Отсутствие финансовой стабильности</span>
          </div>
          <div className={"IconAndDescription"}>
            <WorkOffTwoToneIcon style={{ fontSize: 50, color: "#3f775f" }} />
            <span>Сложности в самореализации</span>
          </div>
          <div className={"IconAndDescription"}>
            <HeartBrokenTwoToneIcon
              style={{ fontSize: 50, color: "#3f775f" }}
            />
            <span>Неудачу в личной жизни</span>
          </div>
          <div className={"IconAndDescription"}>
            <HealingTwoToneIcon style={{ fontSize: 50, color: "#3f775f" }} />
            <span>Проблем со здоровьем</span>
          </div>
          <div className={"IconAndDescription"}>
            <ContactSupportTwoToneIcon
              style={{ fontSize: 50, color: "#3f775f" }}
            />
            <span>Отсутствие понимание куда двигаться дальше</span>
          </div>
        </div>
      </div>
    </div>
  );
};
