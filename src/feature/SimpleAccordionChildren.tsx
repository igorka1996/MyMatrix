import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppSelector } from "../redux-store/store";
import {
  PropsTypeForecastTheYear,
  PropsTypeForecastTheYearChildren,
} from "../type/personalMatrix-type";
import { ForecastForTheYearChildren } from "./ForecastForTheYearChildren";

const filterCalcYear = (arr: [], gender: string) => {
  return arr.map((e: any) => {
    if (e.w && e.m) {
      if (gender === "M") {
        return e.m;
      } else if (gender === "W") {
        return e.w;
      }
    }
    return e;
  });
};

export function SimpleAccordionChildren(
  props: PropsTypeForecastTheYearChildren
) {
  const personalMatrixChildren = useAppSelector(
    (state) => state.personalMatrixChildrenReducer
  );
  const yearHandler = filterCalcYear(
    personalMatrixChildren.isYear,
    props.gender ? props.gender : "W"
  );
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>Личные качества</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Характеристика качеств</b>
            <br />
            {personalMatrixChildren.isPersonalQualitiesChildren
              .isCharacteristicsOfQualities.length !== 0
              ? personalMatrixChildren.isPersonalQualitiesChildren?.isCharacteristicsOfQualities.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
            <br />
            <b>Рекомендации для родителей</b>
            <br />
            {personalMatrixChildren.isPersonalQualitiesChildren
              .isRecommendationsForParents.length !== 0
              ? personalMatrixChildren.isPersonalQualitiesChildren?.isRecommendationsForParents.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
            <br />
            <b>Ребенок в общении</b>
            <br />
            {personalMatrixChildren.isPersonalQualitiesChildren
              .isChildInCommunication !== undefined
              ? personalMatrixChildren.isPersonalQualitiesChildren.isChildInCommunication.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Таланты ребенка</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Талант от рождения</b>
            <br />
            {personalMatrixChildren.isChildTalents.isBirthTalents.length !== 0
              ? personalMatrixChildren.isChildTalents.isBirthTalents.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
            <br />
            <b>Таланты по мужской линии</b>
            <br />
            {personalMatrixChildren.isChildTalents.isTalentsInTheMaleLine !==
            undefined
              ? personalMatrixChildren.isChildTalents.isTalentsInTheMaleLine.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
            <br />
            <b>Таланты по женской линии</b>
            <br />
            {personalMatrixChildren.isChildTalents.isTalentsInTheFemaleLine !==
            undefined
              ? personalMatrixChildren.isChildTalents.isTalentsInTheFemaleLine.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Отношения с родителями</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <br />
            <b>Что нужно учитывать в вопросах воспитания ребенка</b>
            <br />
            {personalMatrixChildren.isRelationshipWithParents
              .isWhatToConsiderWhenRaisingAChild.length !== 0
              ? personalMatrixChildren.isRelationshipWithParents.isWhatToConsiderWhenRaisingAChild.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
            <br />
            <b>Уроки по роду мужской линии</b>
            <br />
            {personalMatrixChildren.isRelationshipWithParents
              .isLessonsOnTheGenderOfTheMaleLine.length !== 0
              ? personalMatrixChildren.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
            <br />
            <b>Уроки по роду женской линии</b>
            <br />
            {personalMatrixChildren.isRelationshipWithParents
              .isLessonsOnTheGenderOfTheFemaleLine.length !== 0
              ? personalMatrixChildren.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Самореализация ребенка</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Направление деятельности, варианты будущих профессий</b>
            <br />
            {personalMatrixChildren.isSelfRrealizationOfTheChild
              .isDirectionOfActivityOptionsForFutureProfessions.length !== 0
              ? personalMatrixChildren.isSelfRrealizationOfTheChild.isDirectionOfActivityOptionsForFutureProfessions.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
            <br />
            <b>Для достижения успеха важно</b>
            <br />
            {personalMatrixChildren.isSelfRrealizationOfTheChild
              .isForSuccessItIsImportant.length !== 0
              ? personalMatrixChildren.isSelfRrealizationOfTheChild.isForSuccessItIsImportant.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Предазначение ребенка</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <br />
            <b>Первое, личное предназначение</b>
            <br />
            {personalMatrixChildren.isPurposeOfTheChild.isFirstPersonalPurpose
              .length !== 0
              ? personalMatrixChildren.isPurposeOfTheChild.isFirstPersonalPurpose.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
            <br />
            <b>Второе, социальное предназначение</b>
            <br />
            {personalMatrixChildren.isPurposeOfTheChild.isSecondSocialPurpose
              .length !== 0
              ? personalMatrixChildren.isPurposeOfTheChild.isSecondSocialPurpose.map(
                  (e) => (
                    <div>
                      {e.text.split("\n").map((paragraph: string) => (
                        <p>
                          {paragraph}
                          <br />
                        </p>
                      ))}
                      <br />
                    </div>
                  )
                )
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Подсознательный сценарий</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Подсознательные страхи и блоки</b>
            <br />
            {personalMatrixChildren.isSubconsciousScript.length !== 0
              ? personalMatrixChildren.isSubconsciousScript.map((e) => (
                  <div>
                    {e.text.split("\n").map((paragraph: string) => (
                      <p>
                        {paragraph}
                        <br />
                      </p>
                    ))}
                    <br />
                  </div>
                ))
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Прогнозы по годам</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ForecastForTheYearChildren
              yaer={yearHandler}
              age={props.age}
              C={props.C}
              A={props.A}
              CGCC={props.CGCC}
              AEAA={props.AEAA}
              CGC={props.CGC}
              AEA={props.AEA}
              CGCCG={props.CGCCG}
              AEAAE={props.AEAAE}
              CG={props.CG}
              AE={props.AE}
              CGGCG={props.CGGCG}
              AEEAE={props.AEEAE}
              CGGG={props.CGGG}
              AEEE={props.AEEE}
              G={props.G}
              E={props.E}
              GDGG={props.GDGG}
              EBEE={props.EBEE}
              GDG={props.GDG}
              EBE={props.EBE}
              GDGGD={props.GDGGD}
              EBEEB={props.EBEEB}
              GD={props.GD}
              EB={props.EB}
              AEE={props.AEE}
              CGG={props.CGG}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
