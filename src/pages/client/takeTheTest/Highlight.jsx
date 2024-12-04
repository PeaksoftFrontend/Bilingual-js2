import { styled, TextareaAutosize } from "@mui/material";
import { Button } from "../../../components/UI/button/Button";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Duration } from "../../../components/UI/duration/Duration";
import { useState } from "react";

export const Highlight = ({ onNext, duration }) => {
  const [highlightedText, setHighlightedText] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleTextHighlight = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      setHighlightedText(selectedText);
      setIsInputDisabled(false);
      setIsButtonDisabled(false);
    }
  };

  return (
    <ContentWrapper>
      <MainBlock>
        <Duration time={duration} onComplete={onNext} />
        <Container>
          <StyledTextBlock>
            <StyledPassage>PASSAGE</StyledPassage>
            <StyledText onMouseUp={handleTextHighlight}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </StyledText>
          </StyledTextBlock>
          <StyledBlock>
            <h1>
              Click and drad text to highlight the answer to the question below
            </h1>
            <p>What did residents think couild happen with new bridge?</p>
            <StyledInput
              placeholder={"Highlight text in the passage to set an answer"}
              value={highlightedText}
              disabled={isInputDisabled}
            />
            <StyledButton>
              <Button disabled={isButtonDisabled} onClick={onNext}>
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
