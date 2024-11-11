import { styled } from "@mui/material";
import { Button } from "../../../components/UI/button/Button";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Duration } from "../../../components/UI/duration/Duration";
import { Input } from "../../../components/UI/input/Input";
import { useEffect, useState } from "react";

export const Words = () => {
  const wordN = { n: 8 };
  const [response, setResponse] = useState("");
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    setWordCount(response.trim().split(/\s+/).filter(Boolean).length);
  }, [response]);

  const handleInputChange = (e) => {
    setResponse(e.target.value);
  };

  return (
    <ContentWrapper>
      <StyledDiv>
        <Duration time={120} />
        <Text>Respond to the question in at least {wordN.n} words</Text>
        <InputBlock>
          <StyledTextQuestion>
            “Describe a time you were surprised. what happened?”
          </StyledTextQuestion>
          <ContainerInput>
            <StyledInput
              placeholder={"Your response"}
              value={response}
              onChange={handleInputChange}
              multiline={true}
              rows={5}
            />
            <p>Word: {wordCount}</p>
          </ContainerInput>
        </InputBlock>
        <ButtonBlock>
          <Button disabled={wordCount < wordN.n}>NEXT</Button>
        </ButtonBlock>
      </StyledDiv>
    </ContentWrapper>
  );
};

const StyledDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
}));

const Text = styled("h1")(() => ({
  fontSize: "28px",
  color: "#4C4859",
  textAlign: "center",
}));

const InputBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const StyledTextQuestion = styled("p")(() => ({
  fontSize: "18px",
  color: "#4C4859",
  width: "329px",
  fontWeight: "600",
}));

const StyledInput = styled(Input)(() => ({
  width: "382px",
  height: "180px",

  "& .MuiOutlinedInput-root": {
    paddingLeft: "0px",
  },
}));

const ContainerInput = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",

  "& p": {
    color: "#AFAFAF",
    fontWeight: "600",
  },
}));

const ButtonBlock = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  borderTop: "2px solid #D4D0D0",
  paddingTop: "32px",
}));
