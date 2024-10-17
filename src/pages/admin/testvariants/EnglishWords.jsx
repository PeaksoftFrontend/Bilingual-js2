import { useState } from "react";
import { Button } from "../../../components/UI/button/Button";
import { UiModal } from "../../../components/UI/modal/UiModal";
import { Input } from "../../../components/UI/input/Input";
import { IconButton, styled } from "@mui/material";
import { Icons } from "../../../assets/icons";

export const EnglishWords = () => {
  const [openModal, setOpenModal] = useState(false);
  const [words, setWords] = useState([]);
  const [wordsValue, setWordsValue] = useState("");
  const [isTrueValue, setIsTrueValue] = useState(false);

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

  console.log(words);

  return (
    <div>
      <div>
        <Button onClick={handleOpenCloseModal}>+ add options</Button>
      </div>

      {words.map((word, index) => (
        <DivContainer key={word.id}>
          <TitleContent>
            <p>{index + 1}</p>
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

      <UiModal open={openModal} onClose={handleOpenCloseModal} role={"ADMIN"}>
        <StyledContainer>
          <div>
            <p>Title:</p>
            <Input
              type="text"
              placeholder="Select real English words"
              value={wordsValue}
              onChange={handleInputChange}
            />
            <span>is true opetion ? </span>
            {isTrueValue ? (
              <IconButton onClick={isTrueHandler}>
                <Icons.TickGreen />
              </IconButton>
            ) : (
              <IconButton onClick={isTrueHandler}>
                <Icons.EmptyTick />
              </IconButton>
            )}
          </div>

          <WrapperButtons>
            <Button variant="outlined" onClick={handleOpenCloseModal}>
              go back
            </Button>
            <Button variant="sucsses" onClick={saveWordsHandler}>
              save
            </Button>
          </WrapperButtons>
        </StyledContainer>
      </UiModal>
    </div>
  );
};

const StyledContainer = styled("div")(() => ({
  width: "500px",
  height: "300px",
  background: "white",
  display: "flex",
  flexDirection: "column",
}));

const WrapperButtons = styled("section")(() => ({
  background: "red",
  height: "100px",
  display: "flex",
  justifyContent: "end",
}));

const DivContainer = styled("div")(() => ({
  width: "16.313rem",
  height: "2.875rem",
  border: "1px solid #D4D0D0",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "78px",
  padding: "14px 16px",
}));

const TitleContent = styled("div")(() => ({
  display: "flex",
  gap: "16px",
}));

const IconContent = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
}));
