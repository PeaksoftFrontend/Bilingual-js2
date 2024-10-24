import { styled } from "@mui/material";
import { Button } from "../../components/UI/button/Button";
import {
  AnswerCard,
  QuestionCards,
} from "../../components/UI/select-table/SelectTable";
import { StyledInput } from "./RecordSelect";
import { dataTen } from "../../utils/constants/general";

export const EvaluteMain = () => {
  return (
    <>
      <StyledWrapperAllContent>
        <StyledWrapperTitle>
          <StyledContentTitle>
            <StyledContentTitleSecond>
              <h3>{dataTen.testQuestions} </h3>
              <StyledContent>
                <h4>Question Title: {dataTen.questionTitle}</h4>
                <h4>Duration (in minutes):{dataTen.duration}</h4>
                <h4>Question Type: {dataTen.questionType}</h4>
              </StyledContent>
            </StyledContentTitleSecond>
          </StyledContentTitle>
          <div>
            <h3>Evaluation</h3>
            <h4>Score: (1-10)</h4>
            <StyledInput type="number" />
          </div>
        </StyledWrapperTitle>
        <StyledWrapperAll>
          <StyledWrapperDescription>
            <StyledPassage>
              <h4>Passage: </h4>
              <div>{dataTen.passage}</div>
            </StyledPassage>
            <QuestionCards />
            <StyledDescriptionSecond>
              <h3>User’s Answer </h3>
              <AnswerCard
                value={3}
                number={3}
                text="Table content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
              />
            </StyledDescriptionSecond>
          </StyledWrapperDescription>
          <StyledBtnWrapper>
            <Button variant="outlined">GO BACK</Button>
            <Button variant="sucsses">SAVE</Button>
          </StyledBtnWrapper>
        </StyledWrapperAll>
      </StyledWrapperAllContent>
    </>
  );
};
const StyledBtnWrapper = styled("div")({
  display: "flex",
  gap: "30px",
});
const StyledDescriptionSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});
const StyledPassage = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "5px",
});
const StyledWrapperDescription = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "37px",
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
  gap: "65px",
});

const StyledWrapperTitle = styled("div")({
  marginTop: "30px",
  display: "flex",
  justifyContent: "space-between",
});
const StyledContentTitle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  gap: "40px",
});
const StyledContentTitleSecond = styled("div")({
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
