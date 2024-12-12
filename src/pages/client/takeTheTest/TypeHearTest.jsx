import { useRef, useState } from "react";
import { Icons } from "../../../assets/icons";
import { Duration } from "../../../components/UI/duration/Duration";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { styled, TextareaAutosize } from "@mui/material";
import { Button } from "../../../components/UI/button/Button";
import { userAnswerHandler } from "../../../store/userTest/userTestSlice";
import { useDispatch } from "react-redux";

export const TypeHearTest = ({ currentQuestion, onNext }) => {
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingPlays, setRemainingPlays] = useState(
    currentQuestion?.attempts
  );
  const [response, setResponse] = useState("");
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      } else if (remainingPlays > 0) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setIsPlaying(true);
        setRemainingPlays((prev) => prev - 1);
      }
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  const handleInputChange = (value) => {
    setResponse(value);
  };

  const handleSubmit = () => {
    const data = {
      statement: response.trim(),
      questionId: currentQuestion?.id,
    };
    console.log(data);

    dispatch(userAnswerHandler(data));
    onNext();
  };

  return (
    <StyledBackdrop>
      <ContentWrapper>
        <StyledContentWrapper>
          <Duration time={currentQuestion?.duration} />
          <StyledTitle>Type the statement you hear</StyledTitle>
          <StyledMain>
            <StyledIconWrapper
              className={isPlaying ? "playing" : ""}
              onClick={handlePlayAudio}
            >
              {isPlaying ? <Icons.SoundOfHover /> : <Icons.SoundOnHover />}
            </StyledIconWrapper>
            <audio
              ref={audioRef}
              src={currentQuestion?.fileUrl}
              onEnded={handleAudioEnd}
            />
            <StyledSecondContainer>
              <StyledTextArea
                aria-label="minimum height"
                placeholder="Your response"
                value={response}
                onChange={(e) => handleInputChange(e.target.value)}
              />
              <StyledSecondTitle>
                Number of replays left: {remainingPlays}
              </StyledSecondTitle>
            </StyledSecondContainer>
          </StyledMain>
          <StyledWrapperContent>
            <hr />
            <StyledBtn
              variant="text"
              disabled={!response.trim()}
              onClick={handleSubmit}
            >
              Next
            </StyledBtn>
          </StyledWrapperContent>
        </StyledContentWrapper>
      </ContentWrapper>
    </StyledBackdrop>
  );
};

const StyledWrapperContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  marginTop: "25px",
});

const StyledBtn = styled(Button)({
  position: "relative",
  left: "41rem",
});

const StyledSecondTitle = styled("p")({
  fontWeight: "400",
  color: "#AFAFAF",
});

const StyledTitle = styled("h2")({
  fontSize: "28px",
  fontWeight: "400",
  textAlign: "center",
});

const StyledSecondContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const StyledMain = styled("div")({
  display: "flex",
  gap: "100px",
  alignItems: "center",
  justifyContent: "center",
});

const StyledContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "55px",
});

const StyledBackdrop = styled("div")({
  width: "100%",
  height: "100vh",
  backgroundColor: "#D7E1F8",
});

const StyledTextArea = styled(TextareaAutosize)({
  fontFamily: "DINNextRoundedLTW01-Regular",
  width: "439px",
  padding: "14.5px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "1.53px solid #d4d0d0",
  borderRadius: "8px",
  background: "none",
  resize: "none",
  color: "black",
  "&::placeholder": {
    color: "#9e9e9e",
    fontWeight: "bold",
    fontSize: "16px",
  },
  "&:focus": {
    border: "1.53px solid #3a10e5",
    outline: "none",
  },
});

const StyledIconWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "&.playing": {
    animation: "pulse 1s infinite",
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.2)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
});
