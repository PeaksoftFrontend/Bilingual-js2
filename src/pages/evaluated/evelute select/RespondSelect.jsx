import { styled } from "@mui/material";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Input } from "../../../components/UI/input/Input";
import { Button } from "../../../components/UI/button/Button";
import { Icons } from "../../../assets/icons";

export const RespondSelect = () => {
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
                  Statement: <span style={{ color: "black" }}>{null}</span>
                </StyledTitle>
              </StyledWrapperDesSecond>
            </StyledWrapperDes>
          </StyledWrapperTitle>
          <StyledContainerAns>
            <StyledContainer>
              <StyledButton variant="contained">
                <Icons.PlayCircle />
                <StyledBtnContent>PLAY AUDIO</StyledBtnContent>
              </StyledButton>
              <p>Correct ansver: “Hello, how is it going?”</p>
            </StyledContainer>
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
  gap: "40px",
});
const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "15px",
});
const StyledBtnContent = styled("p")({
  fontSize: "14px",
  fontWeight: "900",
});
const StyledButton = styled(Button)({
  display: "flex",
  justifyContent: "space-evenly",
  gap: "10px",
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
  bottom: "15rem",
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
