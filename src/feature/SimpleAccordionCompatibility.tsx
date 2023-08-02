import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppSelector } from "../redux-store/store";
import { HashLink as Anchor } from "react-router-hash-link";
import LockIcon from "@mui/icons-material/Lock";
export function SimpleAccordionCompatibility() {
  const MatrixCompatibility = useAppSelector(
    (state) => state.MatrixCompatibilityReducer
  );
  const accordion = (
    txt: any,
    value: { text: string; value: number }[],
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
                {value?.length === undefined ? (
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
            value?.length === undefined ? (
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
                {value.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            )
          ) : (
            <Typography>
              {value.map((e, index) => (
                <React.Fragment key={index}>
                  {e.text.split("\n").map((paragraph: string, innerIndex) => (
                    <React.Fragment key={innerIndex}>
                      {paragraph}
                      <br key={`br-${index}`} />
                    </React.Fragment>
                  ))}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <div
      className={"simpAccordion"}
      style={{ width: "100%", margin: "0 auto" }}
    >
      {accordion(
        "Для чего встретились",
        MatrixCompatibility.data.isWhyDidYouMeet,
        false
      )}
      {accordion(
        "Духовная суть пары",
        MatrixCompatibility.data.isTheSpiritualEssenceOfTheCouple,
        true
      )}
      {accordion(
        "Материальная карма",
        MatrixCompatibility.data.isMaterialKarma,
        true
      )}
      {accordion(
        "Духовная карма пары",
        MatrixCompatibility.data.isCouplesSpiritualKarma,
        true
      )}
      {accordion(
        "Родовые задачи партнеров",
        MatrixCompatibility.data.isGenericTasksOfPartners,
        true
      )}
      {accordion(
        "Благополучие пары",
        MatrixCompatibility.data.isCouplesWellBeing,
        true
      )}
      {accordion(
        "Предназначение пары",
        MatrixCompatibility.data.isThePurposeOfTheCouple,
        true
      )}
    </div>
  );
}
