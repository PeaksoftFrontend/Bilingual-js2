import { styled } from "@mui/material";
import { Input } from "../../components/UI/input/Input";
import { Button } from "../../components/UI/button/Button";
import { dataEight } from "../../utils/constants/general";

export const EvaluteRespond = () => {
  return (
    <>
      <StyledAllContainer>
        {" "}
        <StyledWrapperTitle>
          <StyledWrapperDes>
            <h3>{dataEight.testQuestions} </h3>
            <StyledWrapperDesSecond>
              <StyledTitle>
                Question Title:{" "}
                <span style={{ color: "black" }}>
                  {dataEight.questionTitle}
                </span>
              </StyledTitle>
              <StyledTitle>
                Duration (in minutes):{" "}
                <span style={{ color: "black" }}>{dataEight.duration}</span>
              </StyledTitle>
              <StyledTitle>
                Question Type:{" "}
                <span style={{ color: "black" }}>{dataEight.questionType}</span>
              </StyledTitle>
              <StyledTitle>
                Mimimum number of words:{" "}
                <span style={{ color: "black" }}>{dataEight.minNum}</span>
              </StyledTitle>
              <StyledTitle>
                Question Statement:{" "}
                <span style={{ color: "black" }}>
                  {dataEight.questionStatement}
                </span>
              </StyledTitle>
            </StyledWrapperDesSecond>
          </StyledWrapperDes>
          <StyledWrapper>
            <h3>Evaluation</h3>
            <StyledTitle>Score:(1-10)</StyledTitle>
            <StyledInput type="number" />
          </StyledWrapper>
        </StyledWrapperTitle>
        <StyledContainerAns>
          <h3>{dataEight.answer} </h3>
          <h4>
            Respond:
            <StyledTitleRespond>{dataEight.respond}</StyledTitleRespond>
          </h4>
          <h4>Number of words: {dataEight.numofwords}</h4>
        </StyledContainerAns>
      </StyledAllContainer>

      <StyledWrapperBtn>
        <Button variant="outlined">GO BACK</Button>
        <Button variant="sucsses">SAVE</Button>
      </StyledWrapperBtn>
    </>
  );
};
const StyledTitleRespond = styled("h4")({
  fontSize: "15px",
  fontWeight: "900",
  color: " #3752B4",
  width: "800px",
  height: "54px",
  position: "relative",
  left: "4.5rem",
  bottom: "1.3rem",
});
const StyledAllContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});
const StyledWrapperBtn = styled("div")({
  display: "flex",
  gap: "15px",
  position: "relative",
  left: "40.2rem",
});

const StyledContainerAns = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const StyledWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});
const StyledInput = styled(Input)({
  width: "94px",
  height: "35px",
});
const StyledWrapperDesSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});
const StyledWrapperTitle = styled("div")({
  marginTop: "50px",
  display: "flex",
  justifyContent: "space-between",
});
const StyledTitle = styled("h4")({
  fontSize: "17px",
  fontWeight: "900",
  color: " #3752B4",
});
const StyledWrapperDes = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});
