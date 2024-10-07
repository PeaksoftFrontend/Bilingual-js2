import { Box, keyframes, Modal as MuiModal, styled } from "@mui/material";
import { Icons } from "../../../assets/icons";

export const Modal = ({ children, onClose, open, role, ...props }) => {
  return (
    <StyledModal open={open} onClose={onClose} {...props}>
      <StyledBox role={role}>
        {role === "ADMIN" && (
          <StyledIcon onClick={onClose}>
            <Icons.XSmall />
          </StyledIcon>
        )}
        <StyledChildren role={role}>{children}</StyledChildren>
      </StyledBox>
    </StyledModal>
  );
};

const tvTurnOn = keyframes`
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  50% {
    opacity: 1;
    transform: scaleY(1);
  }
  100% {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const StyledBox = styled(Box)(() => ({
  height: "fit-content",
  background: "#fff",
  borderRadius: "20px",
  padding: "22px",
  overflow: "hidden",
  animation: `${slideIn} 0.5s ease forwards`,
}));

const StyledModal = styled(MuiModal)(() => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#655f5f28",
  position: "fixed",
  top: "0",
  left: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  animation: `${tvTurnOn} 0.7s ease forwards`,
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
