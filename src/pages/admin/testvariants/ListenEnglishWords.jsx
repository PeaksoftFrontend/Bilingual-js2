/* eslint-disable no-shadow */
import { useRef, useState } from "react";
import { Button } from "../../../components/UI/button/Button";
import { IconButton, styled } from "@mui/material";
import { Icons } from "../../../assets/icons";
import {
  BlockMap,
  IconContent,
  StyledButtonContainer,
  StyledInput,
  StyledMap,
  StyledModalBox,
  StyledShowButton,
  StyledText,
  WrapperButtons,
} from "./EnglishWords";
import { useDispatch, useSelector } from "react-redux";
import {
  questionsPostRequest,
  s3AudioDeleteRequest,
  s3AudioPostRequest,
} from "../../../store/adminQuestion/adminQuestionThunk";
import { useNavigate, useParams } from "react-router-dom";

export const ListenEnglishWords = ({
  onReset,
  setTitle,
  setDuration,
  title,
  duration,
  selectedValue,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [words, setWords] = useState([]);
  const [wordsValue, setWordsValue] = useState("");
  const [isTrueValue, setIsTrueValue] = useState(false);
  const [audioFileName, setAudioFileName] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [playingWordId, setPlayingWordId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { audioLink, isLoading } = useSelector((state) => state.questions);
  const { testInfoId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const audioRef = useRef(null);

  const handleInputChange = (e) => {
    setWordsValue(e.target.value);
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFileName(file.name);
      dispatch(s3AudioPostRequest(file));
    }
  };

  const handleOpenCloseModal = () => {
    setOpenModal((state) => !state);
  };

  const deleteWordHandler = (wordId) => {
    const wordToDelete = words.find((word) => word.id === wordId);

    if (wordToDelete && wordToDelete.audioUrl) {
      dispatch(s3AudioDeleteRequest(wordToDelete.audioUrl));

      const updatedWords = words.filter((word) => word.id !== wordId);
      setWords(updatedWords);
    } else {
      console.error("Word not found or audioUrl is missing");
    }
  };

  const updateWordHandler = (wordId) => {
    const updatedWords = words.map((word) => {
      if (word.id === wordId) {
        return { ...word, isTrue: !word.isTrue };
      }
      return word;
    });
    setWords(updatedWords);
  };

  const handlePlayAudio = (audioUrl, wordId) => {
    if (playingWordId === wordId) {
      if (audioRef.current) {
        if (!audioRef.current.paused) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.play();
      setPlayingWordId(wordId);
      setIsPlaying(true);

      audio.onended = () => {
        setPlayingWordId(null);
        setIsPlaying(false);
      };
    }
  };

  const resetValues = () => {
    setWords([]);
    setWordsValue("");
    setIsTrueValue(false);
    setShowButton(false);
    if (onReset) {
      onReset();
    }
  };

  const addOptionHandler = () => {
    const [minutes, seconds] = duration.split(":").map(Number);
    const totalDurationInSeconds = minutes * 60 + (seconds || 0);

    const wordsWithoutAudioFileName = words.map(
      ({ audioFileName, ...rest }) => rest
    );
    const wordsWithoutId = wordsWithoutAudioFileName.map(
      ({ id, ...rest }) => rest
    );

    const data = {
      title,
      duration: totalDurationInSeconds,
      options: wordsWithoutId,
    };

    dispatch(
      questionsPostRequest({ data, selectedValue, testInfoId, navigate })
    );
    setTitle("");
    setDuration("15:00");
    onReset();
  };
  const saveWordsHandler = () => {
    const data = {
      word: wordsValue,
      isTrue: isTrueValue,
      audioUrl: audioLink,
      audioFileName: audioFileName,
      id: Date.now().toString(),
    };
    setWords([...words, data]);

    setWordsValue("");
    setIsTrueValue(false);
    setAudioFileName("");
    handleOpenCloseModal();
    setShowButton(true);
  };

  return (
    <>
      <StyledButtonContainer>
        <Button onClick={handleOpenCloseModal}>
          <Icons.Plus /> add options
        </Button>
      </StyledButtonContainer>
      <StyledMap>
        <BlockMap>
          {words.map((word, index) => (
            <DivContainer key={word.id}>
              <TitleContent>
                <span>{index + 1}</span>
                {word?.audioUrl && (
                  <IconButton
                    onClick={() => handlePlayAudio(word?.audioUrl, word.id)}
                  >
                    {playingWordId === word.id && isPlaying ? (
                      <Icons.SoundBlue />
                    ) : (
                      <Icons.SoundSmall />
                    )}
                  </IconButton>
                )}
                <p>{word.word}</p>
              </TitleContent>
              <IconContent>
                <div>
                  {word.isTrue ? (
                    <IconButton onClick={() => updateWordHandler(word.id)}>
                      <Icons.TickGreen />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => updateWordHandler(word.id)}>
                      <Icons.EmptyTick />
                    </IconButton>
                  )}
                </div>
                <div>
                  <IconButton onClick={() => deleteWordHandler(word.id)}>
                    <Icons.Trash />
                  </IconButton>
                </div>
              </IconContent>
            </DivContainer>
          ))}
        </BlockMap>

        {showButton && (
          <StyledShowButton>
            <Button variant="outlined" onClick={resetValues}>
              go back
            </Button>
            <Button variant="sucsses" onClick={addOptionHandler}>
              saved
            </Button>
          </StyledShowButton>
        )}
      </StyledMap>

      <StyledModalBox
        open={openModal}
        onClose={handleOpenCloseModal}
        role={"ADMIN"}
      >
        {isLoading ? (
          <h1>loading...</h1>
        ) : (
          <StyledContainer>
            <StyledText>
              <p>Title</p>
              <StyledInput
                type="text"
                placeholder="Select real English words"
                value={wordsValue}
                onChange={handleInputChange}
              />
              <StyledFileInputWrapper>
                <StyledButton as="label" htmlFor="fileInput">
                  Upload audio file
                </StyledButton>
                <HiddenFileInput
                  id="fileInput"
                  type="file"
                  accept="audio/*"
                  onChange={handleAudioChange}
                />
                {audioFileName && <p>{audioFileName}</p>}
              </StyledFileInputWrapper>
            </StyledText>

            <WrapperButtons>
              <Button variant="outlined" onClick={handleOpenCloseModal}>
                go back
              </Button>
              <Button
                variant="sucsses"
                onClick={saveWordsHandler}
                disabled={!wordsValue}
              >
                save
              </Button>
            </WrapperButtons>
          </StyledContainer>
        )}
      </StyledModalBox>
    </>
  );
};

const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "70px",
  padding: "30px 30px 26px 30px",
}));

const DivContainer = styled("div")(() => ({
  maxWidth: "16.313rem",
  height: "2.875rem",
  border: "1px solid #D4D0D0",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "14px 16px",
  overflow: "hidden",
}));

const TitleContent = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& p": {
    width: "100px",
    overflow: "hidden",
  },
}));

const StyledFileInputWrapper = styled("div")(() => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "18px",
}));

const HiddenFileInput = styled("input")(() => ({
  opacity: 0,
  position: "absolute",
  top: 0,
  left: 0,
  width: "10%",
  cursor: "pointer",
}));

const StyledButton = styled(Button)(() => ({
  padding: "14px 16px",
  borderRadius: "8px",
  border: "2px solid #3A10E5",
  color: "#3A10E5",
  fontWeight: "500",
  fontFamily: "DIN Next Rounded LT Pro Medium",
  cursor: "pointer",
  marginTop: "6px",
  textWrap: "nowrap",
}));
