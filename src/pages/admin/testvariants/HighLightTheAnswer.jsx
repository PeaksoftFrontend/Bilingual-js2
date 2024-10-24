import { styled, TextareaAutosize } from "@mui/material";
import { Input } from "../../../components/UI/input/Input";
import { useState } from "react";
import { Button } from "../../../components/UI/button/Button";

export const HighLightTheAnswer = () => {
  const [text, setText] = useState("");
  const [highlightedText, setHighlightedText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedText, setSelectedText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleHighlight = () => {
    const selection = window.getSelection();
    const selectedHighLighText = selection.toString();
    setSelectedText(selectedHighLighText);

    if (selectedHighLighText) {
      const newText = text.replace(
        selectedHighLighText,
        `<span style="color: blue; text-decoration: underline;">${selectedHighLighText}</span>`
      );
      setHighlightedText(newText);
    }
  };

  const handleSave = () => {
    console.log("Выделенный текст:", selectedText);
    console.log("Инпут:", inputValue);
    console.log("Text:", text);
  };

  return (
    <ContainerHighligh>
      <WrapperInput>
        <StyledLabel htmlFor="text">Question to the Passage</StyledLabel>
        <StyledInput
          placeholder={"write the text"}
          id={"text"}
          value={inputValue}
          onChange={handleInputChange}
        />
      </WrapperInput>
      <WrapperInput>
        <StyledLabel>Passage</StyledLabel>
        <StyledTextArea
          placeholder="write answer"
          value={text}
          onChange={handleTextChange}
        />
      </WrapperInput>

      <WrapperInput>
        <StyledLabel>Highlight correct answer:</StyledLabel>
        <TextAnswer
          onMouseUp={handleHighlight}
          dangerouslySetInnerHTML={{ __html: highlightedText || text }}
        />
      </WrapperInput>

      <WrapperButtons>
        <StyledButton variant="outlined">Go Back</StyledButton>
        <Button variant="sucsses" onClick={handleSave}>
          Save
        </Button>{" "}
      </WrapperButtons>
    </ContainerHighligh>
  );
};

const WrapperButtons = styled("section")({
  display: "flex",
  justifyContent: "end",
  gap: "16px",
  marginTop: "32px",
});

const StyledButton = styled(Button)(() => ({
  textWrap: "nowrap",
}));

const StyledLabel = styled("label")({
  fontSize: "16px",
  fontWeight: "500",
  fontFamily: "DIN Next Rounded LT Pro Medium",
  color: "#4B4759",
  marginTop: "24px",
});

const WrapperInput = styled("section")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const ContainerHighligh = styled("div")({});

const StyledInput = styled(Input)({
  "& .MuiOutlinedInput-root": {
    padding: "0",
  },
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

const TextAnswer = styled("div")({
  width: "820px",
  fontWeight: "500",
  lineHeight: "23.04px",
  textWrap: "wrap",
  color: "#4C4859",
});
