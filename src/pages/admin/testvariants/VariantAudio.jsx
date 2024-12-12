import { useState, useRef } from "react";
import { styled } from "@mui/material";
import { Input } from "../../../components/UI/input/Input";
import { useDropzone } from "react-dropzone";
import { Button } from "../../../components/UI/button/Button";
import play from "../../../assets/images/play.png";
import pause from "../../../assets/images/pause.png";
import { useDispatch, useSelector } from "react-redux";
import {
  questionsPostRequest,
  s3AudioDeleteRequest,
  s3AudioPostRequest,
} from "../../../store/adminQuestion/adminQuestionThunk";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../../components/UI/loading/Loading";

export const VariantAudio = ({
  title,
  duration,
  selectedValue,
  setTitle,
  setDuration,
  setSelectedType,
}) => {
  const [file, setFile] = useState(null);
  const [audioURL, setAudioURL] = useState("");
  const [answer, setAnswer] = useState("");
  const [replays, setReplays] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const { audioLink, isLoading } = useSelector((state) => state.questions);
  const { testInfoId } = useParams();
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      dispatch(s3AudioPostRequest(uploadedFile));

      setAudioURL(URL.createObjectURL(uploadedFile));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "audio/*",
  });

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleReplays = (e) => {
    const value = e.target.value;
    if (value === "" || (/^\d+$/.test(value) && parseInt(value, 10) <= 10)) {
      setReplays(value === "" ? "" : parseInt(value, 10));
    }
  };
  const handleDeleteAudio = () => {
    if (file) {
      dispatch(s3AudioDeleteRequest(audioLink));
      setFile(null);
      setAudioURL("");
    }
  };
  const addOptionHandler = () => {
    const [minutes, seconds] = duration.split(":").map(Number);
    const totalDurationInSeconds = minutes * 60 + (seconds || 0);

    // const wordsWithoutAudioFileName = words.map(
    //   ({ audioFileName, ...rest }) => rest
    // );
    // const wordsWithoutId = wordsWithoutAudioFileName.map(
    //   ({ id, ...rest }) => rest
    // );

    const data = {
      title,
      duration: totalDurationInSeconds,
      fileUrl: audioLink,
      correctAnswer: answer,
      attempts: replays,
    };
    console.log(data);

    dispatch(
      questionsPostRequest({ data, selectedValue, testInfoId, navigate })
    );
    setTitle("");
    setDuration("15:00");
    setSelectedType("");
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <audio ref={audioRef} src={audioURL} />
          <StyledDiv>
            <StyledReplays>
              <StyledH4>Number of Replays</StyledH4>
              <StyledInputNumber
                type="number"
                value={replays >= 0 ? replays : 0}
                onChange={handleReplays}
              />
            </StyledReplays>
            <StyledPlayButton>
              <DropzoneStyle {...getRootProps()}>
                <Button variant="contained" onClick={handleDeleteAudio}>
                  {file ? "Replace" : "Upload"}
                </Button>
              </DropzoneStyle>
              {audioURL && (
                <>
                  {!isPlaying ? (
                    <StyledButton2 onClick={handlePlayAudio} variant="text">
                      <img src={play} alt="play" />
                    </StyledButton2>
                  ) : (
                    <StyledButton2 onClick={handlePauseAudio} variant="text">
                      <img src={pause} alt="pause" />
                    </StyledButton2>
                  )}
                </>
              )}
              {file && <p>{file.name}</p>}
              <input {...getInputProps()} />
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
              <StyledButton
                variant="sucsses"
                disabled={!answer}
                onClick={addOptionHandler}
              >
                Save
              </StyledButton>
            </StyledDev>
          </StyledAnsver>
        </>
      )}
    </div>
  );
};

const DropzoneStyle = styled("div")({
  textAlign: "start",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
});

const StyledInputNumber = styled(Input)({
  width: "87.5px",
  "& .MuiOutlinedInput-input": {
    padding: "12px 20px",
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      display: "none",
      margin: 0,
    },
    "-moz-appearance": "textfield",
  },
  "& .MuiOutlinedInput-root": {
    paddingLeft: "0px",
  },
});

const StyledTextField2 = styled(Input)({
  width: "820px",
  marginBottom: "2.5rem",
});

const StyledH4 = styled("h4")({
  width: "80px",
  height: "36px",
  fontSize: "1rem",
  marginLeft: "1rem",
  marginBottom: "18px",
  color: "#4C4859",
  fontWeight: "700",
});
const StyledCorrectAnswer = styled("h4")({
  width: "109px",
  height: "16px",
  fontSize: "1rem",
  marginRight: "86%",
  marginBottom: "16px",
  color: "#4C4859",
  fontWeight: "700",
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
