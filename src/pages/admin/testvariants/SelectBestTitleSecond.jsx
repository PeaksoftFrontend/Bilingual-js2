import { useState } from "react";
import { Button } from "../../../components/UI/button/Button";
import { Icons } from "../../../assets/icons";
import { IconButton, styled, TextareaAutosize } from "@mui/material";
import { UiModal } from "../../../components/UI/modal/UiModal";
import { Input } from "../../../components/UI/input/Input";

export const SelectBestTitleSecond = ({ onReset }) => {
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
    <div>
      <StyledLabe>
        Passage
        <StyledTextArea />
      </StyledLabe>

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
                        <Icons.RadioOn />
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => updateWordHandler(word.id)}>
                        <Icons.RadioOff />
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
                Is true option?
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
    </div>
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
  width: "820px",
  height: "72px",
  border: "1px solid #D4D0D0",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "14px 16px",
  overflow: "hidden",
  justifyContent: "space-between",
}));

const TitleContent = styled("div")(() => ({
  display: "flex",
  gap: "16px",
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
const StyledLabe = styled("labe")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "40px",
});
const StyledTextArea = styled(TextareaAutosize)({
  padding: "14.5px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "1.53px solid #d4d0d0",
  borderRadius: "8px",
  background: "none",
  lineHeight: "23.04px",
  resize: "none",
  overflow: "hidden",
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
