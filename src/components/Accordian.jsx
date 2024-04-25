import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordions({AccordianData}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  return (
    <div>
      {AccordianData.map((e, index) => (
        <Accordion
          key={index}
          square
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            marginBottom: "15px",
            borderRadius: "10px",
            '&.MuiPaper-root.MuiAccordion-root::before': {
              background: 'none',
            },
          }}
        >
          <AccordionSummary
             key={index}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
              background: expanded === `panel${index}` ? "#D5E7E5" : "",
              padding: "28px 35px 38px 35px",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              "& .MuiAccordionSummary-content": {
                margin: 0,
              }
            }}
          >
            <Typography
              sx={{
                color: "#0D0D0D",
                margin: "0 !important",
                fontSize: "22px",
                fontFamily: "Arial",
                fontWeight: "Medium",
              }}
              className="Quicksand"
            >
              {e.heading}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: "14px", lineHeight: "28px", padding: "15px" }}
            >
              {e.contents}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
