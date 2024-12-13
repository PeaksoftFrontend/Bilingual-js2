import { useState } from "react";
import { styled } from "@mui/material";
import { Icons } from "../../assets/icons";
import { Button } from "../../components/UI/button/Button";
import { dataFour } from "../../utils/constants/general";
import { useSelector } from "react-redux";

export const ListenSelect = () => {
  const { resultQuestion } = useSelector((state) => state.result);
  console.log(resultQuestion);

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
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <StyledTitle>
            User:
            <span style={{ color: "black", marginLeft: "5px" }}>
              {resultQuestion?.fullName}
            </span>
          </StyledTitle>
          <StyledTitle>
            Test:
            <span style={{ color: "black", marginLeft: "5px" }}>
              {resultQuestion?.testTitle}
            </span>
          </StyledTitle>
        </div>
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
          {resultQuestion.optionList.map((item, i) => (
            <StyledQuestion key={item.id}>
              <StyledWrapperQuestionss>
                <span>{i + 1}</span>
                <Icons.SoundSmall />
                <StyledWrapperTitlPosition>
                  {item.title}
                </StyledWrapperTitlPosition>
              </StyledWrapperQuestionss>

              <StyledIconsContainer>
                <StyledWrapperIconPosition>
                  {item.isTrue ? <Icons.TickGreen /> : <Icons.EmptyTick />}
                </StyledWrapperIconPosition>
                <Icons.Trash />
              </StyledIconsContainer>
            </StyledQuestion>
          ))}
        </StyledWrapperQuestion>
        <StyledWrapperQuestions>
          <h3>{dataFour.answer} </h3>
          <StyledWrapperQuestion>
            {resultQuestion?.optionFromUser.map((item, i) => (
              <StyledQuestionSecond key={item.id}>
                <span>{i + 1}</span>
                <Icons.SoundSmall />
                {item.title}
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
const StyledWrapperTitlPosition = styled("p")({
  position: "relative",
  top: "2px",
});

const StyledWrapperIconPosition = styled("div")({
  position: "relative",
  top: "3px",
});
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
  padding: "12px 20px",
});

const StyledIconsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
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
  // marginTop: "40px",
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
