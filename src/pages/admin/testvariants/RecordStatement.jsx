import { useState } from "react";
import { Input } from "../../../components/UI/input/Input";
import { Button } from "../../../components/UI/button/Button";
import { styled } from "@mui/material";

export const RecordStatement = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <StyledDiv>
      <StyledLable>
        Statement
        <Input onChange={handleChange} value={value} />
      </StyledLable>
      <StyledWrappperBtn>
        <Button variant="outlined">GO BACK</Button>
        <Button variant="sucsses">SAVE</Button>
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
