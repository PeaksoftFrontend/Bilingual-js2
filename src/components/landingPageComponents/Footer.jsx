import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography,
} from "@mui/material";
import Bilingual from "../../assets/icons/icon/billingual.svg";
import Youtube from "../../assets/icons/icon/youtube.svg";
import Insta from "../../assets/icons/icon/instagram.svg";
import Facebook from "../../assets/icons/icon/facebook.svg";
import plus from "../../assets/images/plus.png";
import krest from "../../assets/images/krest.png";
import { FaqData } from "./FaqData";

const AccordionItem = ({ question, answer, isExpanded, onChange }) => (
  <StyledAccordion expanded={isExpanded} onChange={onChange}>
    <StyledAccordionSummary
      expandIcon={<img src={isExpanded ? krest : plus} alt="" />}
    >
      <h2>{question}</h2>
    </StyledAccordionSummary>
    <AccordionDetails>
      <StyledH3>{answer}</StyledH3>
    </AccordionDetails>
  </StyledAccordion>
);

export const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledFooter>
      <WrapperFooter>
        <StyledFAQ>
          <Typography variant={"h1Bold"}>FAQ:</Typography>
        </StyledFAQ>
        <StyledMain>
          <StyledH1>
            <StyledFAQContainer>
              {FaqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isExpanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                  panel={`panel${index + 1}`}
                />
              ))}
            </StyledFAQContainer>
          </StyledH1>
          <StyledDiv>
            <StyledBilli>
              <Bilingual />
            </StyledBilli>
            <StyledIcons>
              <Youtube />
              <Facebook />
              <Insta />
            </StyledIcons>
          </StyledDiv>
          <StyledP>© Copyright PeakSoft. All Rights Reserved</StyledP>
        </StyledMain>
      </WrapperFooter>
    </StyledFooter>
  );
};

const StyledFooter = styled("footer")(({ theme }) => ({
  background: theme.secondary.dark,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  color: theme.primary.white,
}));

const WrapperFooter = styled("div")(() => ({
  maxWidth: "1220.97px",
}));

const StyledMain = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledDiv = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "8rem",
  paddingLeft: "32px",
}));

const StyledP = styled("div")(({ theme }) => ({
  color: theme.secondary.ego,
  paddingTop: "3rem",
  paddingBottom: "1rem",
}));
const StyledH3 = styled("p")(({ theme }) => ({
  color: theme.secondary.garnancho,
  fontWeight: "bold",
  fontSize: "16px",
}));

const StyledH1 = styled("div")(({ theme }) => ({
  background: theme.secondary.dark,
  color: theme.secondary.garnancho,
  cursor: "pointer",
  width: "76rem",
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: theme.secondary.dark,
  color: theme.secondary.garnancho,
  width: "74.16rem",
  paddingTop: "1.8rem",
  borderBottom: " 1px solid grey",
}));

const StyledIcons = styled("div")(() => ({
  display: "flex",
  gap: "2rem",
  width: "7.625 rem",
  paddingLeft: "24rem",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledFAQ = styled("div")(() => ({
  paddingLeft: "32px",
  paddingTop: "7rem",
  paddingBottom: "2rem",
}));

const StyledBilli = styled("div")(() => ({
  width: "14.068rem",
  paddingRight: "23rem",
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignContent: "space-between",
  justifyContent: "space-between",
  color: theme.primary.white,
}));

const StyledFAQContainer = styled("div")(() => ({
  width: "76rem",
  overflow: "hidden",
  padding: "0 2rem",
}));
