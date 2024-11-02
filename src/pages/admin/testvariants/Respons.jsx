import { styled } from "@mui/system";
import { Button } from "../../../components/UI/button/Button";
import { useState } from "react";
import { Input } from "../../../components/UI/input/Input";

export const Respons = () => {
  const [num, setNum] = useState(0);
  const [title, setTitle] = useState("");

  const handleChangeNumber = (e) => {
    const value = e.target.value;
    if (/^\d{0,2}$/.test(value)) {
      setNum(value);
    }
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <StyledContainer>
      <div>
        <StyledH4>Question statement</StyledH4>
        <StyledInput onChange={handleChangeTitle} value={title} />
      </div>
      <div>
        <StyledH1>Number off Words</StyledH1>
        <StyledInputNumber
          type={"number"}
          value={num}
          onChange={handleChangeNumber}
          placeholder={"0"}
        />
        <StyledButton>
          <StyledButtonGoBeck variant="outlined">Go Back</StyledButtonGoBeck>
          <Button variant="sucsses">Save</Button>
        </StyledButton>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "27px",
  marginTop: "16px",
}));

const StyledInput = styled(Input)({
  "& .MuiOutlinedInput-root": {
    paddingLeft: "0",
  },
});

const StyledInputNumber = styled(Input)({
  width: "57.5px",
  "& .MuiOutlinedInput-input": {
    padding: "12px 20px",
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      display: "none",
      margin: 0,
    },
    "-moz-appearance": "textfield",
  },
  "& .MuiOutlinedInput-root": {
    padding: "0px",
  },
});

const StyledH1 = styled("h4")({
  width: "80px",
  height: "36px",
  marginBottom: "12px",
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
