import { styled } from "@mui/material";
import { Button } from "../../components/UI/button/Button";
import selectImage from "../../assets/images/ImageSelect.png";
import { Input } from "../../components/UI/input/Input";
import { dataSix } from "../../utils/constants/general";

export const EveluatedDescrib = () => {
  return (
    <StyledAll>
      <StyledAllContainer>
        <StyledWrapperDes>
          <h3>Test Question</h3>
          <StyledWrapperDesSecond>
            <StyledTitle>
              Question Title:{" "}
              <span style={{ color: "black" }}>{dataSix.questionTitle}</span>
            </StyledTitle>
            <StyledTitle>
              Duration (in minutes):{" "}
              <span style={{ color: "black" }}>{dataSix.duration}</span>
            </StyledTitle>
            <StyledTitle>
              Question Type:{" "}
              <span style={{ color: "black" }}>{dataSix.questionType}</span>
            </StyledTitle>
          </StyledWrapperDesSecond>
        </StyledWrapperDes>
        <StyledWrapper>
          <h3>{dataSix.evaluation}</h3>
          <StyledTitle>Score: (1-10)</StyledTitle>
          <StyledInput type="number" />
        </StyledWrapper>
      </StyledAllContainer>

      <StyledContainerAns>
        <StyledContainerDescriptionImage>
          <StyledImageContainer>
            <StyledImage src={selectImage} alt="Selected" />
            <StyledOverlayButton variant="text">REPLACE</StyledOverlayButton>
          </StyledImageContainer>
          <p>{dataSix.correctAnswer}</p>
        </StyledContainerDescriptionImage>
      </StyledContainerAns>

      <StyledContainerDescription>
        <h3>{dataSix.answer}</h3>
        <h4>{dataSix.enteredStatmen}</h4>
      </StyledContainerDescription>

      <StyledBtn>
        <Button variant="outlined">GO BACK</Button>
        <Button variant="sucsses">SAVE</Button>
      </StyledBtn>
    </StyledAll>
  );
};
const StyledBtn = styled("div")({
  display: "flex",
  gap: "20px",
  position: "relative",
  left: "39rem",
});
const StyledAll = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "25px",
});
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
  marginTop: "30px",
  display: "flex",
  justifyContent: "space-between",
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
