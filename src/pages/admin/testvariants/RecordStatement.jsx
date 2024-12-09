import { useState } from "react";
import { Button } from "../../../components/UI/button/Button";
import { styled } from "@mui/material";
import { questionsPostRequest } from "../../../store/adminQuestion/adminQuestionThunk";
import { useDispatch } from "react-redux";
import { StyledInput } from "./EnglishWords";

export const RecordStatement = ({
  selectedValue,
  title,
  duration,
  onReset,
  setDuration,
  setTitle,
}) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addOptionHandler = () => {
    const [minutes, seconds] = duration.split(":").map(Number);
    const totalDurationInSeconds = minutes * 60 + (seconds || 0);

    const data = {
      title,
      duration: totalDurationInSeconds,
      correctAnswer: value,
    };

    dispatch(questionsPostRequest({ data, selectedValue }));
    setTitle("");
    setDuration("15:00");
    onReset();
  };
  return (
    <StyledDiv>
      <StyledLable>
        Statement
        <StyledInput onChange={handleChange} value={value} />
      </StyledLable>
      <StyledWrappperBtn>
        <Button variant="outlined">GO BACK</Button>
        <Button variant="sucsses" disabled={!value} onClick={addOptionHandler}>
          SAVE
        </Button>
      </StyledWrappperBtn>
    </StyledDiv>
  );
};
const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  marginTop: "30px",
});
const StyledWrappperBtn = styled("div")({
  position: "relative",
  left: "38.5rem",
  display: "flex",
  gap: "20px",
});
const StyledLable = styled("lable")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  color: "#4C4859",
  fontWeight: "700",
});
