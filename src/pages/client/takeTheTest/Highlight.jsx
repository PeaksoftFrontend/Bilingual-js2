import { styled, TextareaAutosize } from "@mui/material";
import { Button } from "../../../components/UI/button/Button";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Duration } from "../../../components/UI/duration/Duration";
import { useState } from "react";
import { userAnswerHandler } from "../../../store/userTest/userTestSlice";
import { useDispatch } from "react-redux";

export const Highlight = ({ onNext, currentQuestion }) => {
  const [highlightedText, setHighlightedText] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleTextHighlight = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      setHighlightedText(selectedText);
      setIsInputDisabled(false);
      setIsButtonDisabled(false);
    }
  };
  const handleRespondNWords = () => {
    const data = {
      statement: highlightedText,
      questionId: currentQuestion.id,
    };
    console.log(data);

    dispatch(userAnswerHandler(data));
    onNext();
  };

  return (
    <ContentWrapper>
      <MainBlock>
        <Duration time={currentQuestion?.duration} onComplete={onNext} />
        <Container>
          <StyledTextBlock>
            <StyledPassage>PASSAGE</StyledPassage>
            <StyledText onMouseUp={handleTextHighlight}>
              {currentQuestion?.passage}
            </StyledText>
          </StyledTextBlock>
          <StyledBlock>
            <h1>
              Click and drad text to highlight the answer to the question below
            </h1>
            <p>{currentQuestion?.statement}</p>
            <StyledInput
              placeholder={"Highlight text in the passage to set an answer"}
              value={highlightedText}
              disabled={isInputDisabled}
            />
            <StyledButton>
              <Button disabled={isButtonDisabled} onClick={handleRespondNWords}>
                NEXT
              </Button>
            </StyledButton>
          </StyledBlock>
        </Container>
      </MainBlock>
    </ContentWrapper>
  );
};

const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "start",
  gap: "40px",
}));

const StyledText = styled("p")(() => ({
  width: "400px",
  padding: "16px 50px 35px 18px",
  color: "#4C4859",
  fontWeight: "400",

  "::selection": {
    background: "#3A10E52E",
  },
}));

const StyledTextBlock = styled("div")(() => ({
  border: "1px solid #D4D0D0",
  borderRadius: "8px",
}));

const StyledPassage = styled("p")(() => ({
  padding: "16px 18px",
  borderBottom: "1px solid #D4D0D0",
  color: "#4C4859",
  fontWeight: "500",
}));

const StyledBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "26px",

  "& h1": {
    fontSize: "26px",
    width: "390px",
    color: "#4C4859",
    fontWeight: "400",
  },

  "& p": {
    fontSize: "18px",
    width: "376px",
    color: "#4C4859",
    fontWeight: "400",
  },
}));

const MainBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
}));

const StyledInput = styled(TextareaAutosize)(() => ({
  width: "100%",
  padding: "14px 16px",
  fontSize: "16px",
  color: "#4C4859",
  borderRadius: "8px",
  border: "1px solid #D4D0D0",
  resize: "none",

  "::placeholder": {
    color: "#979797",
    fontWeight: "400",
  },

  "&:focus": {
    outline: "none",
    borderColor: "#3A10E5",
  },
}));

const StyledButton = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  marginTop: "10px",
}));
