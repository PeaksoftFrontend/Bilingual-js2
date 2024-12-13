import { useState, useRef } from "react";
import { styled } from "@mui/material";
import { Button } from "../../components/UI/button/Button";
import { Icons } from "../../assets/icons";
import { Input } from "../../components/UI/input/Input";
import { dataSeven } from "../../utils/constants/general";
import { useSelector } from "react-redux";

export const RecordSelect = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { resultQuestion } = useSelector((state) => state.result);

  const audioRef = useRef(null); // Создаем реф для аудио

  const handleButtonClick = () => {
    if (!audioRef.current) {
      // Создаем аудио-объект, если его еще нет
      audioRef.current = new Audio(resultQuestion?.audioFile);
      audioRef.current.onended = () => setIsPlaying(false); // Останавливаем состояние при завершении
    }

    if (isPlaying) {
      audioRef.current.pause(); // Ставим на паузу
    } else {
      audioRef.current.play(); // Воспроизводим
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <StyledAll>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <StyledTitle>
          User:
          <span style={{ color: "black", marginLeft: "5px" }}>
            {resultQuestion?.fullName}
          </span>
        </StyledTitle>
        <StyledTitle>
          Test:
          <span style={{ color: "black", marginLeft: "5px" }}>
            {resultQuestion?.testTitle}
          </span>
        </StyledTitle>
      </div>
      <StyledAllContainer>
        <StyledWrapperDes>
          <h3>{dataSeven.testQuestions}</h3>
          <StyledWrapperDesSecond>
            <StyledTitle>
              Question Title:{" "}
              <span style={{ color: "black" }}>{dataSeven.questionTitle}</span>
            </StyledTitle>
            <StyledTitle>
              Duration (in minutes):{" "}
              <span style={{ color: "black" }}>{dataSeven.duration}</span>
            </StyledTitle>
            <StyledTitle>
              Question Type:{" "}
              <span style={{ color: "black" }}>{dataSeven.questionType}</span>
            </StyledTitle>
            <StyledTitle>
              Statement:{" "}
              <span style={{ color: "black" }}>{dataSeven.statement}</span>
            </StyledTitle>
          </StyledWrapperDesSecond>
        </StyledWrapperDes>
        <StyledWrapper>
          <h3>Evaluation</h3>
          <StyledTitle>Score:(1-10)</StyledTitle>
          <StyledInput type="number" />
        </StyledWrapper>
      </StyledAllContainer>
      <StyledContainerAns>
        <StyledContainer>
          <StyledButton
            variant="contained"
            onClick={handleButtonClick}
            isPlaying={isPlaying}
          >
            {isPlaying ? <Icons.PauseIcon /> : <Icons.PlayCircle />}
            <>{isPlaying ? "STOP RECORDED AUDIO" : "PLAY AUDIO"}</>
          </StyledButton>
          <p>Correct answer: "{resultQuestion?.statement}"</p>
        </StyledContainer>
      </StyledContainerAns>
      <StyledWrapperBtn>
        <Button variant="outlined">GO BACK</Button>
        <Button variant="success">SAVE</Button>
      </StyledWrapperBtn>
    </StyledAll>
  );
};

// Стили остаются такими же
const StyledAll = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});

const StyledAllContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const StyledWrapperBtn = styled("div")({
  display: "flex",
  gap: "15px",
  position: "relative",
  left: "40rem",
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

const StyledButton = styled(Button)(({ isPlaying }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  gap: "7px",
  width: isPlaying ? "250px" : "180px",
  height: "50px",
}));

const StyledWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const StyledInput = styled(Input)({
  width: "94px",
  height: "35px",
});

const StyledWrapperDesSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const StyledTitle = styled("h4")({
  fontSize: "17px",
  fontWeight: "900",
  color: " #3752B4",
});

const StyledWrapperDes = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});
