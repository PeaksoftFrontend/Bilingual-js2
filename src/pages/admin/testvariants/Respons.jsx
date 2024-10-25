import { styled } from "@mui/system";
import { Button } from "../../../components/UI/button/Button";
import { useState } from "react";
import { Input } from "../../../components/UI/input/Input";

export const Respons = () => {
  const [num, setNum] = useState(0);
  const handleChangeNumber = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value < 10) {
      setNum(value);
    }
  };

  const [title, setTitle] = useState("");
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <StyledH4>Question statement</StyledH4>
      <StyledInput onChange={handleChangeTitle} value={title} />
      <div>
        <StyledH1>Number off Words</StyledH1>
        <StyledInputNumber
          type="number"
          value={num}
          onChange={handleChangeNumber}
        />
        <StyledButton>
          <StyledButtonGoBeck variant="outlined">Go Back</StyledButtonGoBeck>
          <Button variant="sucsses">Save</Button>
        </StyledButton>
      </div>
    </>
  );
};

const StyledInput = styled(Input)({
  width: "820px",
});

const StyledInputNumber = styled(Input)({
  width: "49px",
  height: "42px",
  "& .MuiOutlinedInput-input": {
    padding: "14.5px 0px",
  },
});

const StyledH1 = styled("h4")({
  width: "80px",
  height: "36px",
  marginBottom: "12px",
  marginTop: "12px",
  color: "#4B4759",
});

const StyledH4 = styled("h4")({
  marginBottom: "12px",
  marginTop: "12px",
  color: "#4B4759",
});

const StyledButton = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1rem",
});

const StyledButtonGoBeck = styled(Button)({
  width: "105px",
});
