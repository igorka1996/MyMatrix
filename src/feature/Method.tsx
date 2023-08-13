import React from "react";
import "./Method.scss";
import BlindTwoToneIcon from "@mui/icons-material/Blind";
import TransferWithinAStationTwoToneIcon from "@mui/icons-material/TransferWithinAStation";
import Diversity1TwoToneIcon from "@mui/icons-material/Diversity1TwoTone";
import HailTwoToneIcon from "@mui/icons-material/HailTwoTone";
import AccessibilityNewTwoToneIcon from "@mui/icons-material/AccessibilityNewTwoTone";

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
          сферы жизни.
        </div>
        <div className={"methodIconAndDescription"}>
          <div className={"IconAndDescription"}>
            <AccessibilityNewTwoToneIcon
              style={{ fontSize: 45, color: "#3f775f" }}
            />
            <span>Освободитесь от негативных эмоций и опыта прошлого</span>
          </div>
          <div className={"IconAndDescription"}>
            <HailTwoToneIcon style={{ fontSize: 45, color: "#3f775f" }} />
            <span>Направьте ваши ресурсы в нужное русло</span>
          </div>
          <div className={"IconAndDescription"}>
            <Diversity1TwoToneIcon style={{ fontSize: 45, color: "#3f775f" }} />
            <span>Узнайте особенности вашего характера</span>
          </div>
          <div className={"IconAndDescription"}>
            <BlindTwoToneIcon style={{ fontSize: 45, color: "#3f775f" }} />
            <span>Разберитесь в причинах проблем со здоровьем</span>
          </div>
          <div className={"IconAndDescription"}>
            <TransferWithinAStationTwoToneIcon
              style={{ fontSize: 45, color: "#3f775f" }}
            />
            <span>Поймите свое истинное предназначение</span>
          </div>
        </div>
      </div>
    </div>
  );
};
