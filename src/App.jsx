import { Modal } from "./components/UI/modal/Modal";
import { useState } from "react";
import { Header } from "./components/landingPageComponents/Header";
import { Input } from "./components/UI/input/Input";
import { Button } from "./components/UI/button/Button";
import { styled } from "@mui/material";

export const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Header />
      {open ? (
        <Styled role="USER" handleClose={handleClose} open={open}>
          <div>
            <h5>Title</h5>
            <Input placeholder={"Select the main idea"} />
            <p>Is true option?</p>
          </div>
          <StyledBtn>
            <Button onClick={handleClose}>close</Button>
            <Button>add</Button>
          </StyledBtn>
        </Styled>
      ) : (
        <Button onClick={handleOpen}>open</Button>
      )}
    </div>
  );
};

const Styled = styled(Modal)({
  // display: "flex",
  // flexDirection: "column",
});

const StyledBtn = styled("div")({
  display: "flex",
  justifyContent: "end",
  gap: "16px",
  padding: "26px 0 0 0",
});
