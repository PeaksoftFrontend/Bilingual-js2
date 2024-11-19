import { styled, TextareaAutosize } from "@mui/material";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Duration } from "../../../components/UI/duration/Duration";
import Img from "../../../assets/images/user5.png";
import { Button } from "../../../components/UI/button/Button";
import { useState } from "react";

export const DescribeImage = ({ onNext }) => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  return (
    <ContentWrapper>
      <MainContent>
        <Duration time={5} onComplete={onNext} />

        <WrapperContent>
          <h1>Write one or more sentences that describe the image</h1>
          <ContainerImg>
            <StyledImage src={Img} alt="" />
            <StyledTextArea
              placeholder="Your response"
              value={text}
              onChange={handleTextChange}
            />
          </ContainerImg>
        </WrapperContent>
        <StyledButton disabled={!text} onClick={onNext}>
          next
        </StyledButton>
      </MainContent>
    </ContentWrapper>
  );
};

const WrapperContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "50px",
  width: "100%",
  paddingBottom: "60px",
  borderBottom: "3px solid #D4D0D0",
  h1: {
    marginTop: "50px",
  },
});

const StyledTextArea = styled(TextareaAutosize)({
  padding: "14.5px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "1.53px solid #d4d0d0",
  width: "382px",
  minHeight: "153px",
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

const StyledImage = styled("img")({
  width: "182px",
  height: "183px",
});
const ContainerImg = styled("div")({
  display: "flex",
  gap: "30px",
});
const StyledButton = styled(Button)({
  marginTop: "32px",
  "&:disabled": {
    backgroundColor: "#C4C4C4",
    color: "#ffffff",
    cursor: "not-allowed",
    border: "none",
  },
});
const MainContent = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
});
