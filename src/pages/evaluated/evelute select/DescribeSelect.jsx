import { styled } from "@mui/material";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Input } from "../../../components/UI/input/Input";
import { Button } from "../../../components/UI/button/Button";
import SelectImage from "../../../assets/images/ImageSelect.png";

export const DescribeSelect = () => {
  return (
    <StyledWrapperAll>
      <ContentWrapper>
        <StyledAllContainer>
          <StyledWrapperTitle>
            <StyledWrapperSecond>
              <StyledTitle>
                User: <span style={{ color: "black" }}>{null}</span>
              </StyledTitle>
              <StyledTitle>
                Test: <span style={{ color: "black" }}>Test number {null}</span>
              </StyledTitle>
            </StyledWrapperSecond>
            <StyledWrapperDes>
              <h3>Test Question</h3>
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

          <StyledContainerAns>
            <StyledContainerDescriptionImage>
              <StyledImageContainer>
                <StyledImage src={SelectImage} alt="Selected" />
                <StyledOverlayButton variant="text">
                  REPLACE
                </StyledOverlayButton>
              </StyledImageContainer>
              <p>
                Correct ansver: “Protecting nature means protecting the
                Motherland”
              </p>
            </StyledContainerDescriptionImage>

            <StyledContainerDescription>
              <h3>User’s Answer</h3>
              <h4>Entered Statement: “I see a white car is burning”</h4>
            </StyledContainerDescription>
          </StyledContainerAns>
        </StyledAllContainer>

        <StyledWrapperTitlePosition>
          <StyledWrapper>
            <h3>Evaluation</h3>
            <StyledTitle>Score: (1-10)</StyledTitle>
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
const StyledContainerDescriptionImage = styled("div")({
  display: "flex",
  gap: "30px",
  alignItems: "center",
});

const StyledImageContainer = styled("div")({
  position: "relative",
  width: "180px",
  height: "178px",
  "&:hover img": {
    opacity: 0.5,
  },
  "&:hover button": {
    opacity: 1,
  },
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  transition: "opacity 0.3s ease",
});

const StyledOverlayButton = styled(Button)({
  width: "100px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 0,
  transition: "opacity 0.3s ease",
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

const StyledContainerDescription = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const StyledContainerAns = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
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
  bottom: "28rem",
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
  color: "#3752B4",
});

const StyledWrapperDes = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});
