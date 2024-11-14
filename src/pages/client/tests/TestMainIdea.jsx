import { useState } from "react";
import { styled } from "@mui/material";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Duration } from "../../../components/UI/duration/Duration";
import { Button } from "../../../components/UI/button/Button";
import { dataMainIdea } from "../../../utils/constants/testVariants";

export const TestMainIdea = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <ContentWrapper>
      <MainBlock>
        <Duration time={120} />
        <Container>
          <StyledTextBlock>
            <StyledPassage>PASSAGE</StyledPassage>
            <StyledText>
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
          <StyledWrapper>
            <StyledTitle>Select the best title for the passage</StyledTitle>
            <StyledWrapperVariants>
              {dataMainIdea.map((item, index) => (
                <ContainerVariant
                  key={index}
                  selected={selectedOption === item.title}
                  onClick={() => handleSelect(item.title)}
                >
                  <Checkbox selected={selectedOption === item.title} />
                  <span>{item.title}</span>
                </ContainerVariant>
              ))}
            </StyledWrapperVariants>
            <StyledBtn variant="text" disabled={!selectedOption}>
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
