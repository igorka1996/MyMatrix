import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppSelector } from "../redux-store/store";
import { PropsTypeForecastTheYearChildren } from "../type/personalMatrix-type";
import { ForecastForTheYearChildren } from "./ForecastForTheYearChildren";
import { filterCalcYear } from "../utils/calc";
import { HashLink as Anchor } from "react-router-hash-link";
import LockIcon from "@mui/icons-material/Lock";
export function SimpleAccordionChildren(
  props: PropsTypeForecastTheYearChildren
) {
  const personalMatrixChildren = useAppSelector(
    (state) => state.personalMatrixChildrenReducer
  );
  const yearHandler = filterCalcYear(
    personalMatrixChildren.data.isYear,
    props.gender ? props.gender : "W"
  );
  const accordion = (
    txt: any,
    arr: { paragraph: string; value: { text: string; value: number }[] }[],
    lock: boolean
  ) => {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            {!lock ? (
              <b style={{ display: "flex" }}>{txt}</b>
            ) : (
              <b style={{ display: "flex" }}>
                {arr[0].value?.length === undefined ? (
                  <LockIcon style={{ color: "#ba82a7" }} />
                ) : (
                  ""
                )}{" "}
                {txt}
              </b>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {lock ? (
            arr[0].value?.length === undefined ? (
              <React.Fragment>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  Будет доступно после оформления одного из тарифов
                </p>
                <Anchor smooth to={"/#tarif"} className={"batonStandart"}>
                  ТАРИФЫ
                </Anchor>
              </React.Fragment>
            ) : (
              <Typography>
                {arr.map((el) => {
                  return (
                    <React.Fragment>
                      <b>{el.paragraph}</b>
                      <br />
                      {el.value.map((e, index) => (
                        <React.Fragment key={index}>
                          {e.text.split("\n").map((paragraph, innerIndex) => (
                            <React.Fragment key={innerIndex}>
                              {paragraph}
                              <br key={`br-${index}`} />
                            </React.Fragment>
                          ))}
                          <br />
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  );
                })}
              </Typography>
            )
          ) : (
            <Typography>
              {arr.map((el) => {
                return (
                  <React.Fragment>
                    <b>{el.paragraph}</b>
                    <br />
                    {el.value.map((e, index) => (
                      <React.Fragment key={index}>
                        {e.text.split("\n").map((paragraph, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                        <br />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                );
              })}
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
    );
  };
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      {accordion(
        "Личные качества",
        [
          {
            paragraph: "Характеристика качеств",
            value:
              personalMatrixChildren.data.isPersonalQualitiesChildren
                ?.isCharacteristicsOfQualities,
          },
          {
            paragraph: "Рекомендации для родителей",
            value:
              personalMatrixChildren.data.isPersonalQualitiesChildren
                .isRecommendationsForParents,
          },
          {
            paragraph: "Ребенок в общении",
            value:
              personalMatrixChildren.data.isPersonalQualitiesChildren
                .isChildInCommunication,
          },
        ],
        false
      )}
      {accordion(
        "Таланты ребенка",
        [
          {
            paragraph: "Талант от рождения",
            value: personalMatrixChildren.data.isChildTalents?.isBirthTalents,
          },
          {
            paragraph: "Таланты по мужской линии",
            value:
              personalMatrixChildren.data.isChildTalents
                ?.isTalentsInTheMaleLine,
          },
          {
            paragraph: "Таланты по женской линии",
            value:
              personalMatrixChildren.data.isChildTalents
                ?.isTalentsInTheFemaleLine,
          },
          {
            paragraph: "Направления увлечений, хобби и кружков по интересам",
            value:
              personalMatrixChildren.data.isChildTalents
                ?.isDirectionsOfHobbiesAndHobbyGroups,
          },
        ],
        true
      )}
      {accordion(
        "Отношения с родителями",
        [
          {
            paragraph: "Что нужно учитывать в вопросах воспитания ребенка",
            value:
              personalMatrixChildren.data.isRelationshipWithParents
                ?.isWhatToConsiderWhenRaisingAChild,
          },
          {
            paragraph: "Уроки по роду мужской линии",
            value:
              personalMatrixChildren.data.isRelationshipWithParents
                ?.isLessonsOnTheGenderOfTheMaleLine,
          },
          {
            paragraph: "Уроки по роду женской линии",
            value:
              personalMatrixChildren.data.isRelationshipWithParents
                ?.isLessonsOnTheGenderOfTheFemaleLine,
          },
        ],
        true
      )}
      {accordion(
        "Самореализация ребенка",
        [
          {
            paragraph: "Направление деятельности, варианты будущих профессий",
            value:
              personalMatrixChildren.data.isSelfRrealizationOfTheChild
                ?.isDirectionOfActivityOptionsForFutureProfessions,
          },
          {
            paragraph: "Для достижения успеха важно",
            value:
              personalMatrixChildren.data.isSelfRrealizationOfTheChild
                ?.isForSuccessItIsImportant,
          },
        ],
        true
      )}
      {accordion(
        "Предазначение ребенка",
        [
          {
            paragraph: "Первое, личное предназначение",
            value:
              personalMatrixChildren.data.isPurposeOfTheChild
                ?.isFirstPersonalPurpose,
          },
          {
            paragraph: "Второе, социальное предназначение",
            value:
              personalMatrixChildren.data.isPurposeOfTheChild
                ?.isSecondSocialPurpose,
          },
        ],
        true
      )}
      {accordion(
        "Подсознательный сценарий",
        [
          {
            paragraph: "Подсознательные страхи и блоки",
            value: personalMatrixChildren.data?.isSubconsciousScript,
          },
        ],
        true
      )}
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
              repeat={props.repeat}
              yes={props.yes}
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
