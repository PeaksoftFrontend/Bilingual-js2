import { Button, styled } from "@mui/material";
import buttonDefault from "../../../assets/images/buttonDefault.png";

export const LandingButton = ({
  children,
  onClick,
  variant = "text",
  disabled,
  type = "button",
  icon,
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {variant === "text" ? (
        <>
          {icon}
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </StyledButton>
  );
};
const StyledButton = styled(Button)(({ variant }) => ({
  fontWeight: "600",
  "&:disabled": {
    pointerEvents: "auto",
    cursor: "not-allowed",
  },

  ...(variant === "siu" && {
    background: "#FFFFFF",
    color: "#333",
    padding: "15px 30px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: "translateY(4px)",

    "&:hover": {
      background: "#F0EDED",
      boxShadow:
        "0 6px 12px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.19)",
      transform: "translateY(2px)",
    },
    "&:active": {
      backgroundColor: "#EBE6E6",
      transform: "translateY(1px)",
      boxShadow:
        "inset 0 2px 4px rgba(0, 0, 0, 0.2), inset 0 4px 12px rgba(0, 0, 0, 0.19)",
    },
  }),

  ...(variant === "team" && {
    backgroundImage: `url(${buttonDefault})`,
    color: "white",
    cursor: "pointer",
    overflow: "hidden",
    textDecoration: "none",
    margin: "4px 2px",
    transition: "all 0.3s ease",
    fontSize: "1.4em",
    width: "200px",
    height: "60px",
    borderTopLeftRadius: "45px 50px",
    borderTopRightRadius: "45px 50px",
    borderBottomRightRadius: "34px 50px",
    borderBottomLeftRadius: "34px 50px",
    "&:hover": {
      backgroundImage: `url(${buttonDefault})`,
      overflow: "hidden",
      scale: "1.02",
    },
    "&:actuve": {
      backgroundImage: `url(${buttonDefault})`,
      position: "relative",
      overflow: "hidden",
    },
  }),
}));
