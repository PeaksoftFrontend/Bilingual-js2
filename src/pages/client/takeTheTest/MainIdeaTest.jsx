import { useState } from "react";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Duration } from "../../../components/UI/duration/Duration";
import { Button } from "../../../components/UI/button/Button";
import { styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { userAnswerHandler } from "../../../store/userTest/userTestSlice";

export const MainIdeaTest = ({ currentQuestion, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  const handleRespondNWords = () => {
    const data = {
      optionsId: [selectedOption],
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
            <StyledText>{currentQuestion?.passage}</StyledText>
          </StyledTextBlock>
          <StyledWrapper>
            <StyledTitle>Select the best title for the passage</StyledTitle>
            <StyledWrapperVariants>
              {currentQuestion?.optionList?.map((item, index) => (
                <ContainerVariant
                  key={index}
                  selected={selectedOption === item.title}
                  onClick={() => handleSelect(item.id)}
                >
                  <Checkbox selected={selectedOption === item.id} />
                  <span>{item.title}</span>
                </ContainerVariant>
              ))}
            </StyledWrapperVariants>
            <StyledBtn
              variant="text"
              disabled={!selectedOption}
              onClick={handleRespondNWords}
            >
              Next
            </StyledBtn>
          </StyledWrapper>
        </Container>
      </MainBlock>
    </ContentWrapper>
  );
};

const StyledBtn = styled(Button)({
  position: "relative",
  left: "15.5rem",
});
const StyledWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});
const StyledWrapperVariants = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
const StyledTitle = styled("h2")({
  fontWeight: "400",
  textAlign: "center",
  fontSize: "26px",
  color: "#4C4859",
});

const ContainerVariant = styled("div")(({ selected }) => ({
  border: `1px solid ${selected ? "#3A10E5" : "#D4D0D0"}`,
  borderRadius: "8px",
  color: "#4C4859",
  width: "411px",
  height: "57px",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  padding: "0 10px",
  cursor: "pointer",
  backgroundColor: selected ? "#e8eaf6" : "transparent",
  transition: "border 0.3s, background-color 0.3s",
}));

const Checkbox = styled("div")(({ selected }) => ({
  width: "27px",
  height: "20px",
  borderRadius: "50%",
  border: `2px solid ${selected ? "#3A10E5" : "#D4D0D0"}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: selected ? "#3A10E5" : "transparent",
  transition: "background-color 0.3s, border 0.3s",

  "::before": {
    content: selected ? '""' : "none",
    width: "12px",
    height: "12px",
    backgroundColor: "white",
    borderRadius: "50%",
  },
}));

const Container = styled("div")(() => ({
  display: "flex",
  gap: "45px",
  justifyContent: "center",
  alignItems: "center",
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
  backgroundColor: "#faf7f7",
}));

const StyledPassage = styled("p")(() => ({
  padding: "16px 18px",
  borderBottom: "1px solid #D4D0D0",
  color: "#4C4859",
  fontWeight: "500",
}));

const MainBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
}));
