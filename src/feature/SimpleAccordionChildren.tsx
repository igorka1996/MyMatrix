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
            {personalMatrixChildren.data.isPersonalQualitiesChildren
              .isCharacteristicsOfQualities.length !== 0
              ? personalMatrixChildren.data.isPersonalQualitiesChildren?.isCharacteristicsOfQualities.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>Рекомендации для родителей</b>
            <br />
            {personalMatrixChildren.data.isPersonalQualitiesChildren
              .isRecommendationsForParents.length !== 0
              ? personalMatrixChildren.data.isPersonalQualitiesChildren?.isRecommendationsForParents.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>Ребенок в общении</b>
            <br />
            {personalMatrixChildren.data.isPersonalQualitiesChildren
              .isChildInCommunication !== undefined
              ? personalMatrixChildren.data.isPersonalQualitiesChildren.isChildInCommunication.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
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
            {personalMatrixChildren.data.isChildTalents?.isBirthTalents
              .length !== undefined
              ? personalMatrixChildren.data.isChildTalents.isBirthTalents.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>Таланты по мужской линии</b>
            <br />
            {personalMatrixChildren.data.isChildTalents
              ?.isTalentsInTheMaleLine !== undefined
              ? personalMatrixChildren.data.isChildTalents.isTalentsInTheMaleLine.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>Таланты по женской линии</b>
            <br />
            {personalMatrixChildren.data.isChildTalents
              ?.isTalentsInTheFemaleLine !== undefined
              ? personalMatrixChildren.data.isChildTalents.isTalentsInTheFemaleLine.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>Направления увлечений, хобби и кружков по интересам</b>
            <br />
            {personalMatrixChildren.data.isChildTalents
              ?.isDirectionsOfHobbiesAndHobbyGroups !== undefined
              ? personalMatrixChildren.data.isChildTalents.isDirectionsOfHobbiesAndHobbyGroups.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
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
            {personalMatrixChildren.data.isRelationshipWithParents
              ?.isWhatToConsiderWhenRaisingAChild.length !== undefined
              ? personalMatrixChildren.data.isRelationshipWithParents.isWhatToConsiderWhenRaisingAChild.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>Уроки по роду мужской линии</b>
            <br />
            {personalMatrixChildren.data.isRelationshipWithParents
              ?.isLessonsOnTheGenderOfTheMaleLine.length !== undefined
              ? personalMatrixChildren.data.isRelationshipWithParents.isLessonsOnTheGenderOfTheMaleLine.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>Уроки по роду женской линии</b>
            <br />
            {personalMatrixChildren.data.isRelationshipWithParents
              ?.isLessonsOnTheGenderOfTheFemaleLine.length !== undefined
              ? personalMatrixChildren.data.isRelationshipWithParents.isLessonsOnTheGenderOfTheFemaleLine.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
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
            {personalMatrixChildren.data.isSelfRrealizationOfTheChild
              ?.isDirectionOfActivityOptionsForFutureProfessions.length !==
            undefined
              ? personalMatrixChildren.data.isSelfRrealizationOfTheChild.isDirectionOfActivityOptionsForFutureProfessions.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>Для достижения успеха важно</b>
            <br />
            {personalMatrixChildren.data.isSelfRrealizationOfTheChild
              ?.isForSuccessItIsImportant.length !== undefined
              ? personalMatrixChildren.data.isSelfRrealizationOfTheChild.isForSuccessItIsImportant.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
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
            {personalMatrixChildren.data.isPurposeOfTheChild
              ?.isFirstPersonalPurpose.length !== undefined
              ? personalMatrixChildren.data.isPurposeOfTheChild.isFirstPersonalPurpose.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>Второе, социальное предназначение</b>
            <br />
            {personalMatrixChildren.data.isPurposeOfTheChild
              ?.isSecondSocialPurpose.length !== undefined
              ? personalMatrixChildren.data.isPurposeOfTheChild.isSecondSocialPurpose.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
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
            {personalMatrixChildren.data.isSubconsciousScript !== undefined
              ? personalMatrixChildren.data.isSubconsciousScript.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
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
