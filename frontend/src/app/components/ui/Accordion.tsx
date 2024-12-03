import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function CustomAccordion(props: any) {
  return (
    <div className="w-full p-2">
      <Accordion
        onChange={props.onChange}
        expanded={props.expanded}
        defaultExpanded
        sx={{
          "& .MuiAccordionDetails-root": {
            display: "flex",
            gap: "5px",
            flexWrap: "wrap",
          },
        }}
      >
        <AccordionSummary
          sx={{
            background: "linear-gradient(45deg, #ebd9ff, #a7f1e6)",
            fontWeight: "600",
          }}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {props.title}
        </AccordionSummary>
        <AccordionDetails>{props?.content}</AccordionDetails>
      </Accordion>
    </div>
  );
}
