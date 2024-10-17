import { styled } from "@mui/material";
import { ContentWrapper } from "../../UI/content_wrapper/ContentWrapper";
import { Input } from "../../UI/input/Input";
import { Button } from "../../UI/button/Button";

export const RecordSelect = () => {
  return (
    <StyledWrapperAll>
      <ContentWrapper>
        <StyledAllContainer>
          {" "}
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
                <StyledTitle>
                  Mimimum number of words:{" "}
                  <span style={{ color: "black" }}>{null}</span>
                </StyledTitle>
                <StyledTitle>
                  Question Statement:{" "}
                  <span style={{ color: "black" }}>{null}</span>
                </StyledTitle>
              </StyledWrapperDesSecond>
            </StyledWrapperDes>
          </StyledWrapperTitle>
          <StyledContainerAns>
            <h3>User’s Answer </h3>
            <h4>
              Respond:
              <StyledTitleRespond>{null}</StyledTitleRespond>
            </h4>
            <h4>Number of words: {null}</h4>
          </StyledContainerAns>
        </StyledAllContainer>

        <StyledWrapperTitlePosition>
          <StyledWrapper>
            <h3>Evaluation</h3>
            <StyledTitle>Score:(1-10)</StyledTitle>
            <StyledInput type="number" />
          </StyledWrapper>
        </StyledWrapperTitlePosition>
        <StyledWrapperBtn>
          <Button variant="outlined">GO BACK</Button>
          <Button variant="sucsses">SAVE</Button>
        </StyledWrapperBtn>
      </ContentWrapper>
    </StyledWrapperAll>
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
  bottom: "2rem",
});

const StyledContainerAns = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "13px",
});

const StyledWrapperAll = styled("div")({
  padding: "40px",
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
const StyledWrapperTitlePosition = styled("div")({
  position: "relative",
  left: "46rem",
  bottom: "25rem",
});
const StyledWrapperDesSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});
const StyledWrapperTitle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
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
const StyledWrapperDes = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});
