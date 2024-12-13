import { styled } from "@mui/material";
import { Icons } from "../../assets/icons";
import { Button } from "../../components/UI/button/Button";
import { dataThree } from "../../utils/constants/general";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const EnglishWordsSelect = () => {
  const { resultQuestion } = useSelector((state) => state.result);
  const { testInfoId, testId } = useParams();
  console.log("testInfoId: ", testInfoId);
  const navigate = useNavigate();
  console.log("resultQuestion: ", resultQuestion);

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
  const handleNavigate = () => {
    navigate(
      `/admin/submitted-results/result-info/${testInfoId}/testInfo/${testId}`
    );
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <StyledWrapperDes>
            <h3>{dataThree.testQuestions} </h3>
            <StyledWrapperDesSecond>
              <StyledTitle>
                Question Title:
                <span style={{ color: "black" }}>
                  {resultQuestion?.questionTitle}
                </span>
              </StyledTitle>
              <StyledTitle>
                Duration (in minutes):
                <span style={{ color: "black" }}>
                  {formatDuration(resultQuestion.duration)}
                </span>
              </StyledTitle>
              <StyledTitle>
                Question Type:
                <span style={{ color: "black" }}>
                  {resultQuestion?.questionType ===
                    "SELECT_REAL_ENGLISH_WORD" && "Select real English words"}
                </span>
              </StyledTitle>
            </StyledWrapperDesSecond>
          </StyledWrapperDes>
          <StyledWrapperTitlePosition>
            <h3>Evaluation</h3>
            <StyledTitle>
              Score:
              <span style={{ color: resultQuestion.score > 5 && "green" }}>
                {resultQuestion?.score}
              </span>
            </StyledTitle>
          </StyledWrapperTitlePosition>
        </div>
      </StyledWrapperTitle>

      <StyledWrapperQuestionAll>
        <StyledWrapperQuestion>
          {resultQuestion?.optionList?.map((item, i) => (
            <StyledQuestion key={item.id}>
              <StyledWrapperQuestionss>
                <span>{i + 1}</span>
                {item.title}
              </StyledWrapperQuestionss>
              <div>
                {item.isTrue ? <Icons.TickGreen /> : <Icons.EmptyTick />}
              </div>
            </StyledQuestion>
          ))}
        </StyledWrapperQuestion>
        <StyledWrapperQuestions>
          <h3>{dataThree.answer} </h3>
          <StyledWrapperQuestion>
            {resultQuestion?.optionFromUser?.map((item, i) => (
              <StyledQuestionSecond key={item.id}>
                <span>{i + 1}</span>
                {item.title}
              </StyledQuestionSecond>
            ))}
          </StyledWrapperQuestion>
        </StyledWrapperQuestions>
      </StyledWrapperQuestionAll>
      <StyledWrapperBtn>
        <Button variant="outlined" onClick={handleNavigate}>
          GO BACK
        </Button>
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
  // position: "relative",
  // left: "46rem",
  // bottom: "11rem",
});
const StyledWrapperTitle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "25px",
});
const StyledWrapperDes = styled("div")({
  marginBottom: "15px",
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
