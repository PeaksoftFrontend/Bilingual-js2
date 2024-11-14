import { useRef, useState } from "react";
import { styled, TextareaAutosize } from "@mui/material";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Duration } from "../../../components/UI/duration/Duration";
import { Icons } from "../../../assets/icons";
import { Button } from "../../../components/UI/button/Button";
import { dataTests } from "../../../utils/constants/testVariants";

export const TypeWhatYouHear = () => {
  const [audioDataList, setAudioDataList] = useState(
    dataTests.map((data) => ({
      ...data,
      isPlaying: false,
      remainingPlays: data.numOfWords,
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
            return { ...item, isPlaying: false };
          } else if (item.remainingPlays > 0) {
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

  const anyRemainingPlays = audioDataList.some(
    (item) => item.remainingPlays > 0
  );

  return (
    <StyledBackdrop>
      <ContentWrapper>
        <StyledContentWrapper>
          <Duration time={120} />
          <StyledTitle>Type the statement you hear</StyledTitle>
          {audioDataList.map((item, index) => (
            <StyledMain key={index}>
              <Icons.Sound onClick={() => handlePlayAudio(index)} />
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                src={item.audioData}
                onEnded={() => handleAudioEnd(index)}
              />
              <StyledSecondContainer>
                <StyledTextArea
                  aria-label="minimum height"
                  placeholder="Your response"
                />
                <StyledSecondTitle>
                  Number of replays left: {item.remainingPlays}
                </StyledSecondTitle>
              </StyledSecondContainer>
            </StyledMain>
          ))}
          <StyledWrapperContent>
            <hr />
            <StyledBtn variant="text" disabled={anyRemainingPlays}>
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
