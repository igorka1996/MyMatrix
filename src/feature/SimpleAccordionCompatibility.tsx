import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppSelector } from "../redux-store/store";
import { PropsTypeForecastTheYearChildren } from "../type/personalMatrix-type";

export function SimpleAccordionCompatibility() {
  const MatrixCompatibility = useAppSelector(
    (state) => state.MatrixCompatibilityReducer
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
            <b>Для чего встретились</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {MatrixCompatibility.isWhyDidYouMeet.length !== 0
              ? MatrixCompatibility.isWhyDidYouMeet.map((e) => (
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
            <br />
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
            <b>Духовная суть пары</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {MatrixCompatibility.isTheSpiritualEssenceOfTheCouple.length !== 0
              ? MatrixCompatibility.isTheSpiritualEssenceOfTheCouple.map(
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
            <b>Материальная карма</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {MatrixCompatibility.isMaterialKarma.length !== 0
              ? MatrixCompatibility.isMaterialKarma.map((e) => (
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
            <b>Духовная карма пары</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {MatrixCompatibility.isCouplesSpiritualKarma.length !== 0
              ? MatrixCompatibility.isCouplesSpiritualKarma.map((e) => (
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
            <b>Родовые задачи партнеров</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {MatrixCompatibility.isGenericTasksOfPartners.length !== 0
              ? MatrixCompatibility.isGenericTasksOfPartners.map((e) => (
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
            <b>Благополучие пары</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {MatrixCompatibility.isCouplesWellBeing.length !== 0
              ? MatrixCompatibility.isCouplesWellBeing.map((e) => (
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
            <b>Предназначение пары</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {MatrixCompatibility.isThePurposeOfTheCouple.length !== 0
              ? MatrixCompatibility.isThePurposeOfTheCouple.map((e) => (
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
    </div>
  );
}
