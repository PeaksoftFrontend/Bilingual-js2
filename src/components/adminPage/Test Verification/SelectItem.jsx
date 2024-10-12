import { useState } from "react";
import { Icons } from "../../../assets/icons";
import { styled } from "@mui/material";

export const SelectItem = ({ title, index, id, deleteHandler }) => {
  const [iconIsValid, setIconIsValid] = useState(false);

  const handleIconTrueAndFalse = () => {
    setIconIsValid((prevState) => !prevState);
  };

  return (
    <DivContainer>
      <TitleContent>
        <p>{index}</p>
        <p>{title}</p>
      </TitleContent>
      <IconContent>
        <div onClick={handleIconTrueAndFalse}>
          {iconIsValid ? <Icons.TickGreen /> : <Icons.EmptyTick />}
        </div>
        <div onClick={() => deleteHandler(id)}>
          <Icons.Trash />
        </div>
      </IconContent>
    </DivContainer>
  );
};

const DivContainer = styled("div")(() => ({
  width: "16.313rem",
  height: "2.875rem",
  border: "1px solid #D4D0D0",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "78px",
  padding: "14px 16px",
}));

const TitleContent = styled("div")(() => ({
  display: "flex",
  gap: "16px",
}));

const IconContent = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
}));
