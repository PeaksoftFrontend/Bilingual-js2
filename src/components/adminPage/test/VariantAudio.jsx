import { useState, useRef } from "react";
import { styled } from "@mui/material";
import { Input } from "../../UI/input/Input";
import { useDropzone } from "react-dropzone";
import { Button } from "../../UI/button/Button";
import play from "../../../assets/images/play.png";
import pause from "../../../assets/images/pause.png";
import { ContentWrapper } from "../../UI/content_wrapper/ContentWrapper";

export const VariantAudio = () => {
  const [file, setFile] = useState(null);
  const [audioURL, setAudioURL] = useState("");
  const [answer, setAnswer] = useState("");
  const [replays, setReplays] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setAudioURL(URL.createObjectURL(uploadedFile));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "audio/*",
  });

  const handlePlayAudio = () => {
    if (audioURL && !isPlaying) {
      audioRef.current = new Audio(audioURL);
      audioRef.current.play();
      setIsPlaying(true);

      audioRef.current.onended = () => {
        setIsPlaying(false);
      };
    }
  };

  const handleStopAudio = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  // const handleGoBack = () => {
  //   console.log("Go back");
  // };

  // const handleSave = () => {
  //   console.log("Saved answer:", answer);
  // };

  const handleReplays = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0) {
      setReplays(value);
    }
  };

  return (
    <ContentWrapper>
      <StyledDiv>
        <StyledReplays>
          <StyledH4>Number off Replays</StyledH4>
          <StyledInput
            type={Number}
            value={replays >= 0 ? replays : 0}
            onChange={handleReplays}
          />
        </StyledReplays>
        <StyledPlayButton>
          <DropzoneStyle {...getRootProps({ className: "  " })}>
            <Button variant="contained">{file ? "Replace" : "Upload"}</Button>
          </DropzoneStyle>
          {audioURL && (
            <>
              {!isPlaying ? (
                <StyledButton2 onClick={handlePlayAudio} variant={"text"}>
                  <img src={play} alt="play" />
                </StyledButton2>
              ) : (
                <StyledButton2 onClick={handleStopAudio} variant={"text"}>
                  <img src={pause} alt="pause" />
                </StyledButton2>
              )}
            </>
          )}
          {file && <p>{file.name}</p>} <input {...getInputProps()} />
        </StyledPlayButton>
      </StyledDiv>
      <StyledAnsver>
        <StyledCorrectAnswer>Correct answer</StyledCorrectAnswer>
        <div>
          <StyledTextField2 value={answer} onChange={handleAnswerChange} />
        </div>

        <StyledDev>
          <StyledBorder>
            <StyledButtonOutlined variant="outlined">
              Go Back
            </StyledButtonOutlined>
          </StyledBorder>
          <StyledButton variant="sucsses">Save</StyledButton>
        </StyledDev>
      </StyledAnsver>
    </ContentWrapper>
  );
};

const DropzoneStyle = styled("div")({
  textAlign: "start",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
});

const StyledInput = styled(Input)({
  width: "3.063rem",
  height: "2.625rem",
  borderRadius: "8px",
});

const StyledTextField2 = styled(Input)({
  width: "820px",
  marginBottom: "2.5rem",
});

const StyledH4 = styled("h4")({
  width: "80px",
  height: "36px",
  fontSize: "1rem",
  marginLeft: "1.rem",
  marginBottom: "18px   ",
});
const StyledCorrectAnswer = styled("h4")({
  width: "109px",
  height: "16px",
  fontSize: "1rem",
  marginRight: "86%",
  marginBottom: "16px",
});

const StyledDiv = styled("div")({
  display: "flex",
  alignItems: "end",
  gap: "1rem",
  marginBottom: "1rem",
});

const StyledButton = styled(Button)({
  marginLeft: "2.5rem",
});
const StyledReplays = styled("div")({
  marginBottom: "0.5rem",
});
const StyledAnsver = styled("div")({
  marginTop: "3rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
const StyledDev = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
});

const StyledPlayButton = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

const StyledButton2 = styled(Button)({
  width: "46px",
  height: "42px",
});
const StyledButtonOutlined = styled(Button)({
  border: "none",
  "&:hover": {
    border: "none",
  },
});

const StyledBorder = styled("div")({
  border: "2px solid #3A10E5",
  borderRadius: "9.9px",
  fontSize: "14px",
});
