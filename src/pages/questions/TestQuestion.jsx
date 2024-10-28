/* eslint-disable no-unused-vars */
import { styled } from "@mui/material";
import { ContentWrapper } from "../../components/UI/content_wrapper/ContentWrapper";
import { useState } from "react";
import { EvaluteSubRes } from "../../pages/evaluated/EvaluteSubRes";
import { EnglishWordsSelect } from "../evaluated/EnglishWordsSelect";
import { ListenSelect } from "../evaluated/ListenSelect";
import { TypeYouHear } from "../evaluated/TypeYouHear";
import { EveluatedDescrib } from "../evaluated/EveluatedDescrib";
import { RecordSelect } from "../evaluated/RecordSelect";
import { EvaluteRespond } from "../evaluated/EvaluteRespond";
import { HighlightSelect } from "../evaluated/HighlightSelect";
import { EvaluteMain } from "../evaluated/EvaluteMain";

export const TestQuestion = () => {
  const [value, setValue] = useState(7);
  return (
    <StyledAllContainer>
      <StyledWrappe>
        <ContentWrapper>
          <StyledWrapperSecond>
            <StyledTitle>
              User: <span style={{ color: "black" }}>Askarov Marat</span>
            </StyledTitle>
            <StyledTitle>
              Test: <span style={{ color: "black" }}>Test number 1</span>
            </StyledTitle>
            {value === 2 && <EvaluteSubRes />}
            {value === 3 && <EnglishWordsSelect />}
            {value === 4 && <ListenSelect />}
            {value === 5 && <TypeYouHear />}
            {value === 6 && <EveluatedDescrib />}
            {value === 7 && <RecordSelect />}
            {value === 8 && <EvaluteRespond />}
            {value === 9 && <HighlightSelect />}
            {value === 10 && <EvaluteMain />}
          </StyledWrapperSecond>
        </ContentWrapper>
      </StyledWrappe>
    </StyledAllContainer>
  );
};
const StyledWrappe = styled("div")({
  padding: "40px",
});

const StyledWrapperSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

const StyledTitle = styled("h4")({
  fontSize: "17px",
  fontWeight: "900",
  color: " #3752B4",
});

const StyledAllContainer = styled("div")({
  width: "100%",
  height: "180vh",
  backgroundColor: "#D7E1F8",
});
