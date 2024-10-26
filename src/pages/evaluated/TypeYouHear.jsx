import { useState } from "react";
import { styled } from "@mui/material";
import { Icons } from "../../assets/icons";
import { Button } from "../../components/UI/button/Button";
import { Input } from "../../components/UI/input/Input";
import { dataFife } from "../../utils/constants/general";

export const TypeYouHear = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <>
      <StyledAllContainer>
        <StyledWrappersecond>
          <StyledWrapperDes>
            <h3>{dataFife.testQuestions}</h3>
            <StyledWrapperDesSecond>
              <StyledTitle>
                Question Title:{" "}
                <span style={{ color: "black" }}>{dataFife.questionTitle}</span>
              </StyledTitle>
              <StyledTitle>
                Duration (in minutes):{" "}
                <span style={{ color: "black" }}>{dataFife.duration}</span>
              </StyledTitle>
              <StyledTitle>
                Question Type:{" "}
                <span style={{ color: "black" }}>{dataFife.questionType}</span>
              </StyledTitle>
              <StyledTitle>
                Mimimum number of words:{" "}
                <span style={{ color: "black" }}>{dataFife.Mimimumnumber}</span>
              </StyledTitle>
            </StyledWrapperDesSecond>
          </StyledWrapperDes>
          <StyledWrapper>
            <h3>{dataFife.evaluation}</h3>
            <StyledTitle>Score:(1-10)</StyledTitle>
            <StyledInput type="number" />
          </StyledWrapper>
        </StyledWrappersecond>
        <StyledContainerAns>
          <StyledContainer>
            <StyledButton
              variant="contained"
              onClick={handleButtonClick}
              isPlaying={isPlaying}
            >
              {isPlaying ? <Icons.PauseIcon /> : <Icons.PlayCircle />}
              <StyledBtnContent>
                {isPlaying ? "STOP RECORDED AUDIO" : "PLAY AUDIO"}
              </StyledBtnContent>
            </StyledButton>
            <p>{dataFife.correctAnswer}</p>
          </StyledContainer>
        </StyledContainerAns>

        <StyledContainerDescription>
          <h3>{dataFife.answer}</h3>
          <h4>Entered Statement: {dataFife.enteredStatmen}</h4>
          <h4>Number of plays: {dataFife.Numberofplays}</h4>
        </StyledContainerDescription>
        <StyledContainerBtn>
          <Button variant="outlined">GO BACK</Button>
          <Button variant="sucsses">SAVE</Button>
        </StyledContainerBtn>
      </StyledAllContainer>
    </>
  );
};

const StyledButton = styled(Button)(({ isPlaying }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  width: isPlaying ? "250px" : "200px",
  height: isPlaying ? "50px" : "50px",
}));

const StyledContainerBtn = styled("div")({
  display: "flex",
  gap: "20px",
  position: "relative",
  left: "40rem",
});

const StyledAllContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});

const StyledWrappersecond = styled("div")({
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

const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "15px",
});

const StyledBtnContent = styled("p")({
  fontSize: "14px",
  fontWeight: "900",
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
  color: " #3752B4",
});

const StyledWrapperDes = styled("div")({
  marginTop: "25px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});
