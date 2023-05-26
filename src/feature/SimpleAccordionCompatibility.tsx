import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppSelector } from "../redux-store/store";

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
            {MatrixCompatibility.data.isWhyDidYouMeet.length !== 0
              ? MatrixCompatibility.data.isWhyDidYouMeet.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
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
            {MatrixCompatibility.data.isTheSpiritualEssenceOfTheCouple
              ?.length !== undefined
              ? MatrixCompatibility.data.isTheSpiritualEssenceOfTheCouple.map(
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
            <b>Материальная карма</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {MatrixCompatibility.data.isMaterialKarma?.length !== undefined
              ? MatrixCompatibility.data.isMaterialKarma.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
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
            {MatrixCompatibility.data.isCouplesSpiritualKarma?.length !==
            undefined
              ? MatrixCompatibility.data.isCouplesSpiritualKarma.map(
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
            <b>Родовые задачи партнеров</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {MatrixCompatibility.data.isGenericTasksOfPartners?.length !==
            undefined
              ? MatrixCompatibility.data.isGenericTasksOfPartners.map(
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
            <b>Благополучие пары</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {MatrixCompatibility.data.isCouplesWellBeing?.length !== undefined
              ? MatrixCompatibility.data.isCouplesWellBeing.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
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
            {MatrixCompatibility.data.isThePurposeOfTheCouple?.length !==
            undefined
              ? MatrixCompatibility.data.isThePurposeOfTheCouple.map(
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
    </div>
  );
}
