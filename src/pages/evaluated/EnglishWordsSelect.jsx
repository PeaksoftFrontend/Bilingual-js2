import { useState } from "react";
import { styled } from "@mui/material";
import { Icons } from "../../assets/icons";
import { Button } from "../../components/UI/button/Button";
import { dataThree } from "../../utils/constants/general";

export const EnglishWordsSelect = () => {
  const [selectedIcons, setSelectedIcons] = useState(
    dataThree.question.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {})
  );

  const handleIconClick = (id) => {
    setSelectedIcons((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <StyledWrapperTitle>
        <StyledWrapperDes>
          <h3>{dataThree.testQuestions} </h3>
          <StyledWrapperDesSecond>
            <StyledTitle>
              Question Title:{" "}
              <span style={{ color: "black" }}>{dataThree.questionTitle}</span>
            </StyledTitle>
            <StyledTitle>
              Duration (in minutes):
              <span style={{ color: "black" }}>{dataThree.duration}</span>
            </StyledTitle>
            <StyledTitle>
              Question Type:{" "}
              <span style={{ color: "black" }}>{dataThree.questionType}</span>
            </StyledTitle>
          </StyledWrapperDesSecond>
        </StyledWrapperDes>
      </StyledWrapperTitle>
      <StyledWrapperTitlePosition>
        <h3>Evaluation</h3>
        <StyledTitle>
          Score:{" "}
          <span style={{ color: dataThree.score > 5 && "green" }}>
            {dataThree.score}
          </span>
        </StyledTitle>
      </StyledWrapperTitlePosition>
      <StyledWrapperQuestionAll>
        <StyledWrapperQuestion>
          {dataThree.question.map((item) => (
            <StyledQuestion key={item.id}>
              <StyledWrapperQuestionss>
                <span>{item.id}</span>
                {item.question}
              </StyledWrapperQuestionss>
              <div onClick={() => handleIconClick(item.id)}>
                {selectedIcons[item.id] ? (
                  <Icons.TickGreen />
                ) : (
                  <Icons.EmptyTick />
                )}
              </div>
            </StyledQuestion>
          ))}
        </StyledWrapperQuestion>
        <StyledWrapperQuestions>
          <h3>{dataThree.answer} </h3>
          <StyledWrapperQuestion>
            {dataThree.usersAnswer.map((item) => (
              <StyledQuestionSecond key={item.id}>
                <span>{item.id}</span>
                {item.question}
              </StyledQuestionSecond>
            ))}
          </StyledWrapperQuestion>
        </StyledWrapperQuestions>
      </StyledWrapperQuestionAll>
      <StyledWrapperBtn>
        <Button variant="outlined">GO BACK</Button>
        <Button variant="sucsses">SAVE</Button>
      </StyledWrapperBtn>
    </>
  );
};

const StyledWrapperQuestionss = styled("div")({
  display: "flex",
  gap: "10px",
});
const StyledWrapperBtn = styled("div")({
  display: "flex",
  gap: "15px",
  position: "relative",
  left: "40.2rem",
  top: "2rem",
});
const StyledWrapperQuestions = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});
const StyledWrapperQuestionAll = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "37px",
});
const StyledQuestionSecond = styled("div")({
  width: "171px",
  height: "46px",
  border: "1px solid #D4D0D0",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "15px",

  padding: "12px ",
});
const StyledWrapperQuestion = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
});
const StyledQuestion = styled("div")({
  width: "234px",
  height: "46px",
  border: "1px solid #D4D0D0",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
});

const StyledWrapperTitlePosition = styled("div")({
  position: "relative",
  left: "46rem",
  bottom: "11rem",
});
const StyledWrapperTitle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});
const StyledWrapperDes = styled("div")({
  marginTop: "45px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});
const StyledWrapperDesSecond = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

const StyledTitle = styled("h4")({
  fontSize: "17px",
  fontWeight: "900",
  color: " #3752B4",
});
