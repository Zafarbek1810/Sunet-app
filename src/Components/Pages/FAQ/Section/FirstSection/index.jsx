import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { StyledContainer } from "../../../../Common/Container/Container.style";
import { FirstFAQWrapper } from "./FirstFAQ.style";

const FirstFAQ = () => {
  return (
    <FirstFAQWrapper>
      <StyledContainer>
        <div className="top">
          <h4>FAQ</h4>
          <h2>
            Read Most <br /> Frequent Questions
          </h2>
        </div>
        <section>
          <div className="accardion-wr" >
            <Accordion className="accordion" elevation={0}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                className="accordion__summary"
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="typography">How To Choose A Good QA Consultant?</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="typography__p">
                Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion" elevation={0}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                className="accordion__summary"
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="typography">How to Create a Chatbot to Fit Your Needs?</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="typography__p">
                We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion" elevation={0}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                className="accordion__summary"
                aria-controls="panel3a-content"
                id="panel2a-header"
              >
                <Typography className="typography">What is off page SEO link building?</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="typography__p">
                Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion" elevation={0}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                className="accordion__summary"
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography className="typography">How can I order web design for my website?</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="typography__p">
                Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion" elevation={0}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                className="accordion__summary"
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <Typography className="typography">Best SEO Practices for Page Layouts</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="typography__p">
                Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="accardion-wr">
            <Accordion className="accordion" elevation={0}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                className="accordion__summary"
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="typography">How To Choose A Good QA Consultant?</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="typography__p">
                Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion" elevation={0}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                className="accordion__summary"
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="typography">Why is SEO Link Building Important?</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="typography__p">
                We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion" elevation={0}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                className="accordion__summary"
                aria-controls="panel3a-content"
                id="panel2a-header"
              >
                <Typography className="typography">Why is Researching Keywords Important?</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="typography__p">
                Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion" elevation={0}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                className="accordion__summary"
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography className="typography">Best SEO Practices for Page Layouts</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="typography__p">
                Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion" elevation={0}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                className="accordion__summary"
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <Typography className="typography">Best SEO Practices for High Quality Content</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="typography__p">
                Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </section>
      </StyledContainer>
    </FirstFAQWrapper>
  );
};

export default FirstFAQ;
