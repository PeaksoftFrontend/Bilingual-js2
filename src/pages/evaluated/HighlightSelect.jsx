import { styled } from "@mui/material";
import { Button } from "../../components/UI/button/Button";
import { StyledInput, StyledTitle } from "./RecordSelect";
import { dataNine } from "../../utils/constants/general";

export const HighlightSelect = () => {
  return (
    <>
      <StyledWrapperAllContent>
        <StyledWrapperTitle>
          <StyledContentTitle>
            <StyledContentTitleSecond>
              <h3>Test Question </h3>
              <StyledContent>
                <StyledTitle>
                  Question Title:{" "}
                  <span style={{ color: "black" }}>
                    {dataNine.questionTitle}
                  </span>
                </StyledTitle>
                <StyledTitle>
                  Duration (in minutes):{" "}
                  <span style={{ color: "black" }}>{dataNine.duration}</span>
                </StyledTitle>
                <StyledTitle>
                  Question Type:{" "}
                  <span style={{ color: "black" }}>
                    {dataNine.questionType}
                  </span>
                </StyledTitle>
              </StyledContent>
            </StyledContentTitleSecond>
          </StyledContentTitle>
          <div>
            <h3>Evaluation</h3>
            <StyledTitle>Score: (1-10)</StyledTitle>
            <StyledInput type="number" />
          </div>
        </StyledWrapperTitle>
        <StyledWrapperAll>
          <StyledWrapperDescription>
            <StyledPassage>
              <StyleTitle>Passage: </StyleTitle>
              <div>{dataNine.passage}</div>
            </StyledPassage>

            <StyledWrapperDescriptionSecond>
              <h4> Question Statement:{dataNine.questionStatement}</h4>
              <StyledPassage>
                <h4>Correct_answer:</h4>
                <StyledTitle>{dataNine.correctAnswer}</StyledTitle>
              </StyledPassage>
            </StyledWrapperDescriptionSecond>

            <StyledDescriptionSecond>
              <h3>User’s Answer </h3>
              <StyledPassage>
                <StyleTitle>Respond: </StyleTitle>
                <div>{dataNine.respond}</div>
              </StyledPassage>
            </StyledDescriptionSecond>
          </StyledWrapperDescription>
          <StyledWrapperBtn>
            <Button variant="outlined">GO BACK</Button>
            <Button variant="sucsses">SAVE</Button>
          </StyledWrapperBtn>
        </StyledWrapperAll>
      </StyledWrapperAllContent>
    </>
  );
};
const StyledWrapperBtn = styled("div")({
  display: "flex",
  gap: "20px",
});
const StyleTitle = styled("h4")({
  fontWeight: "900",
  fontSize: "17px",
});
const StyledWrapperAll = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  alignItems: "self-end",
});
const StyledWrapperAllContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});
const StyledWrapperDescriptionSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});
const StyledDescriptionSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const StyledWrapperDescription = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "37px",
});
const StyledPassage = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "3px",
});
const StyledWrapperTitle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const StyledContentTitle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  gap: "40px",
});
const StyledContentTitleSecond = styled("div")({
  marginTop: "50px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  gap: "20px",
});
const StyledContent = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  gap: "7px",
});
