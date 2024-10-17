import { styled } from "@mui/material";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import {
  dataQuestion,
  usersAnswerData,
} from "../../../utils/constants/general";
import { Icons } from "../../../assets/icons";
import { Button } from "../../../components/UI/button/Button";

export const EvaluteSelect = () => {
  return (
    <StyledWrapper>
      <ContentWrapper>
        <StyledWrapperTitle>
          <StyledWrapperSecond>
            {" "}
            <StyledTitle>
              User: <span style={{ color: "black" }}>{null}</span>
            </StyledTitle>
            <StyledTitle>
              Test: <span style={{ color: "black" }}>Test number {null}</span>
            </StyledTitle>
          </StyledWrapperSecond>
          <StyledWrapperDes>
            <h3>Test Question </h3>
            <StyledWrapperDesSecond>
              <StyledTitle>
                Question Title: <span style={{ color: "black" }}>{null}</span>
              </StyledTitle>
              <StyledTitle>
                Duration (in minutes):{" "}
                <span style={{ color: "black" }}>{null}</span>
              </StyledTitle>
              <StyledTitle>
                Question Type: <span style={{ color: "black" }}>{null}</span>
              </StyledTitle>
            </StyledWrapperDesSecond>
          </StyledWrapperDes>
        </StyledWrapperTitle>
        <StyledWrapperTitlePosition>
          <h3>Evaluation</h3>
          <StyledTitle>
            Score: <span style={{ color: "black" }}>{null}</span>
          </StyledTitle>
        </StyledWrapperTitlePosition>
        <StyledWrapperQuestionAll>
          <StyledWrapperQuestion>
            {dataQuestion.map((item) => (
              <StyledQuestion key={item.id}>
                <StyledWrapperQuestionss>
                  <span>{item.id}</span>
                  {item.question}
                </StyledWrapperQuestionss>
                {item.question === "champion" ||
                item.question === "listen" ||
                item.id === 6 ? (
                  <Icons.TickGreen />
                ) : (
                  <Icons.EmptyTick />
                )}
              </StyledQuestion>
            ))}
          </StyledWrapperQuestion>
          <StyledWrapperQuestions>
            <h3>User’s Answer </h3>
            <StyledWrapperQuestion>
              {usersAnswerData.map((item) => (
                <StyledQuestionSecond key={item.id}>
                  <span>{item.id}</span>
                  {item.question}
                </StyledQuestionSecond>
              ))}
            </StyledWrapperQuestion>
          </StyledWrapperQuestions>
        </StyledWrapperQuestionAll>
        <StyledWrapperBtn>
          <Button variant="outlined">GO BACK</Button>
          <Button variant="sucsses">SAVE</Button>
        </StyledWrapperBtn>
      </ContentWrapper>
    </StyledWrapper>
  );
};
const StyledWrapperQuestionss = styled("div")({
  display: "flex",
  gap: "10px",
});
const StyledWrapperBtn = styled("div")({
  display: "flex",
  gap: "15px",
  position: "relative",
  left: "40.2rem",
  top: "2rem",
});
const StyledWrapperQuestions = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});
const StyledWrapperQuestionAll = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "37px",
});
const StyledQuestionSecond = styled("div")({
  width: "171px",
  height: "46px",
  border: "1px solid #D4D0D0",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "15px",

  padding: "12px ",
});
const StyledWrapperQuestion = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
});
const StyledQuestion = styled("div")({
  width: "234px",
  height: "46px",
  border: "1px solid #D4D0D0",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
});
const StyledWrapper = styled("div")({
  padding: "40px",
});

const StyledWrapperTitlePosition = styled("div")({
  position: "relative",
  left: "46rem",
  bottom: "11rem",
});
const StyledWrapperTitle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});
const StyledWrapperDes = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});
const StyledWrapperDesSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
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
