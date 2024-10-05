import { Box, Modal as MuiModal, styled } from "@mui/material";
import { Icons } from "../../../assets/icons";

export const Modal = ({ children, handleClose, open, role, ...props }) => {
  return (
    <StyledModal open={open} onClose={handleClose} {...props}>
      <StyledBox role={role}>
        {role === "ADMIN" && (
          <StyledIcon onClick={handleClose}>
            <Icons.XSmall />
          </StyledIcon>
        )}
        <StyledChildren role={role}>{children}</StyledChildren>
      </StyledBox>
    </StyledModal>
  );
};

const StyledBox = styled(Box)(() => ({
  height: "fit-content",
  background: "#fff",
  borderRadius: "20px",
  padding: "22px",
  overflow: "hidden",
}));

const StyledModal = styled(MuiModal)(() => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#655f5f28",
  position: "fixed",
  top: "0",
  left: "0",
  display: "flex",
  justifyContent: " center",
  alignItems: "center",
}));

const StyledIcon = styled("div")({
  display: "flex",
  justifyContent: "end",
  cursor: "pointer",
});

const StyledChildren = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));
