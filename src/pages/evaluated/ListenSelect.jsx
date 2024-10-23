import { useState } from "react";
import { styled } from "@mui/material";
import { Icons } from "../../assets/icons";
import { Button } from "../../components/UI/button/Button";
import { dataFour } from "../../utils/constants/general";

export const ListenSelect = () => {
  const [selectedIcons, setSelectedIcons] = useState(
    dataFour.question.reduce((acc, item) => {
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
          <h3>{dataFour.testQuestions} </h3>
          <StyledWrapperDesSecond>
            <StyledTitle>
              Question Title:{" "}
              <span style={{ color: "black" }}>{dataFour.questionTitle}</span>
            </StyledTitle>
            <StyledTitle>
              Duration (in minutes):
              <span style={{ color: "black" }}>{dataFour.duration}</span>
            </StyledTitle>
            <StyledTitle>
              Question Type:{" "}
              <span style={{ color: "black" }}>{dataFour.questionType}</span>
            </StyledTitle>
          </StyledWrapperDesSecond>
        </StyledWrapperDes>
      </StyledWrapperTitle>
      <StyledWrapperTitlePosition>
        <h3>{dataFour.evaluation}</h3>
        <StyledTitle>
          Score:{" "}
          <span style={{ color: dataFour.score > 5 ? "green" : "black" }}>
            {dataFour.score}
          </span>
        </StyledTitle>
      </StyledWrapperTitlePosition>
      <StyledWrapperQuestionAll>
        <StyledWrapperQuestion>
          {dataFour.question.map((item) => (
            <StyledQuestion key={item.id}>
              <StyledWrapperQuestionss>
                <span>{item.id}</span>
                <Icons.SoundSmall />
                {item.question}
              </StyledWrapperQuestionss>
              <div onClick={() => handleIconClick(item.id)}>
                {selectedIcons[item.id] ? (
                  <Icons.TickGreen />
                ) : (
                  <Icons.EmptyTick />
                )}
              </div>
              <Icons.Trash />
            </StyledQuestion>
          ))}
        </StyledWrapperQuestion>
        <StyledWrapperQuestions>
          <h3>{dataFour.answer} </h3>
          <StyledWrapperQuestion>
            {dataFour.usersAnswer.map((item) => (
              <StyledQuestionSecond key={item.id}>
                <span>{item.id}</span>
                <Icons.SoundSmall />
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
  bottom: "7.4rem",
});
const StyledWrapperTitle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});
const StyledWrapperDes = styled("div")({
  marginTop: "40px",
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
