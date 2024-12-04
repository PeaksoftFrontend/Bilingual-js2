import { useRef } from "react";
import { useState } from "react";
import { dataTests } from "../../../utils/constants/userTest";
import { Icons } from "../../../assets/icons";
import { Duration } from "../../../components/UI/duration/Duration";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { styled, TextareaAutosize } from "@mui/material";
import { Button } from "../../../components/UI/button/Button";

export const TypeHearTest = ({ onNext, duration }) => {
  const [audioDataList, setAudioDataList] = useState(
    dataTests.map((data) => ({
      ...data,
      isPlaying: false,
      remainingPlays: data.numOfWords,
      response: "",
    }))
  );

  const audioRefs = useRef([]);

  const handlePlayAudio = (index) => {
    setAudioDataList((prevData) =>
      prevData.map((item, i) => {
        if (i === index && audioRefs.current[index]) {
          const audioRef = audioRefs.current[index];
          if (item.isPlaying) {
            audioRef.pause();
            audioRef.currentTime = 0;
            return { ...item, isPlaying: false };
          } else if (item.remainingPlays > 0) {
            audioRef.currentTime = 0;
            audioRef.play();
            return {
              ...item,
              isPlaying: true,
              remainingPlays: item.remainingPlays - 1,
            };
          }
        }
        return item;
      })
    );
  };

  const handleAudioEnd = (index) => {
    setAudioDataList((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, isPlaying: false } : item
      )
    );
  };

  const handleInputChange = (index, value) => {
    setAudioDataList((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, response: value } : item
      )
    );
  };

  const isButtonDisabled = audioDataList.some((item) => !item.response.trim());

  return (
    <StyledBackdrop>
      <ContentWrapper>
        <StyledContentWrapper>
          <Duration time={duration} onComplete={onNext} />
          <StyledTitle>Type the statement you hear</StyledTitle>
          {audioDataList.map((item, index) => (
            <StyledMain key={index}>
              <StyledIconWrapper
                className={item.isPlaying ? "playing" : ""}
                onClick={() => handlePlayAudio(index)}
              >
                {item.isPlaying ? (
                  <Icons.SoundOfHover />
                ) : (
                  <Icons.SoundOnHover />
                )}
              </StyledIconWrapper>
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                src={item.audioData}
                onEnded={() => handleAudioEnd(index)}
              />
              <StyledSecondContainer>
                <StyledTextArea
                  aria-label="minimum height"
                  placeholder="Your response"
                  value={item.response}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                <StyledSecondTitle>
                  Number of replays left: {item.remainingPlays}
                </StyledSecondTitle>
              </StyledSecondContainer>
            </StyledMain>
          ))}
          <StyledWrapperContent>
            <hr />
            <StyledBtn
              variant="text"
              disabled={isButtonDisabled}
              onClick={onNext}
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
  fontАamily: "DINNextRoundedLTW01-Regular",
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
