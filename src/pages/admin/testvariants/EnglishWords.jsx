import { useState } from "react";
import { Button } from "../../../components/UI/button/Button";
import { UiModal } from "../../../components/UI/modal/UiModal";
import { Input } from "../../../components/UI/input/Input";
import { IconButton, styled } from "@mui/material";
import { Icons } from "../../../assets/icons";

export const EnglishWords = ({ onReset }) => {
  const [openModal, setOpenModal] = useState(false);
  const [words, setWords] = useState([]);
  const [wordsValue, setWordsValue] = useState("");
  const [isTrueValue, setIsTrueValue] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleInputChange = (e) => {
    setWordsValue(e.target.value);
  };

  const handleOpenCloseModal = () => {
    setOpenModal((state) => !state);
  };
  const isTrueHandler = () => {
    setIsTrueValue(!isTrueValue);
  };

  const saveWordsHandler = () => {
    const data = {
      word: wordsValue,
      isTrue: isTrueValue,
      id: Date.now().toString(),
    };
    setWords([...words, data]);

    setWordsValue("");
    setIsTrueValue(false);
    handleOpenCloseModal();
    setShowButton(true);
  };

  const deleteWordHandler = (wordId) => {
    const updatedWords = words.filter((word) => word.id !== wordId);
    setWords(updatedWords);
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

  const resetValues = () => {
    setWords([]);
    setWordsValue("");
    setIsTrueValue(false);
    setShowButton(false);
    if (onReset) {
      onReset();
    }
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
            <Button variant="sucsses">save</Button>
          </StyledShowButton>
        )}
      </StyledMap>

      <StyledModalBox
        open={openModal}
        onClose={handleOpenCloseModal}
        role={"ADMIN"}
      >
        <StyledContainer>
          <StyledText>
            <p>Title</p>
            <StyledInput
              type="text"
              placeholder="Select real English words"
              value={wordsValue}
              onChange={handleInputChange}
            />
            <span>
              Is true opetion?
              {isTrueValue ? (
                <IconButton onClick={isTrueHandler}>
                  <Icons.TickGreen />
                </IconButton>
              ) : (
                <IconButton onClick={isTrueHandler}>
                  <Icons.EmptyTick />
                </IconButton>
              )}
            </span>
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
      </StyledModalBox>
    </>
  );
};

export const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "81px",
  padding: "40px 30px 26px 30px",
}));

export const StyledModalBox = styled(UiModal)(() => ({
  "& .css-1lmjhxc": {
    width: "39.813rem",
    height: "23.5rem",
    background: "linear-gradient(to bottom, #FEFEFE 75%, #F0F1F1 75%)",
  },
}));

export const WrapperButtons = styled("section")(() => ({
  display: "flex",
  justifyContent: "end",
  gap: "16px",
}));

const DivContainer = styled("div")(() => ({
  maxWidth: "16.313rem",
  height: "2.875rem",
  border: "1px solid #D4D0D0",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "14px 16px",
  overflow: "hidden",
}));

const TitleContent = styled("div")(() => ({
  display: "flex",
  gap: "16px",

  "& p": {
    width: "120px",
    overflow: "hidden",
  },
}));

export const IconContent = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2px",
}));

export const StyledText = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "18px",

  "& p": {
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "DIN Next Rounded LT Pro Medium",
    color: "#4B4759",
  },
  "& span": {
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "DIN Next Rounded LT Pro Light",
    color: "#4C4859",
  },
}));

export const StyledInput = styled(Input)(() => ({
  "& .MuiOutlinedInput-root": {
    paddingLeft: "0",
  },
}));

export const StyledButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  marginTop: "32px",
}));

export const StyledMap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  marginTop: "22px",
}));

export const StyledShowButton = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  gap: "16px",
}));

export const BlockMap = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "18.5px",
}));
