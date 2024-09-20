import { Button, styled } from "@mui/material";

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
    background: "linear-gradient(145deg, #cb6995, #d738c7)",
    border: "none",
    boxShadow: "1px 1.5px #cb6995, 3px 8px #FFCCBFAD",
    color: "white",
    cursor: "pointer",
    padding: "10px 15px",
    position: "relative",
    overflow: "hidden",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    margin: "4px 2px",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
    fontSize: "1.5em",
    width: "200px",
    height: "60px",
    borderBlock: "0 0 5px ",
    borderTopRightRadius: "75px",
    borderTopLeftRadius: "75px",
    borderBottomRightRadius: "45px",
    borderBottomLeftRadius: "45px",
    "&:hover": {
      background: "linear-gradient(145deg, #cc5c8e, #d72cc6)",
      transform: "translate3D(0, .25em)",
      position: "relative",
      overflow: "hidden",
    },
    "&:active": {
      background: "linear-gradient(145deg, #cc5c8e, #d72cc6)",
      boxShadow: "3px 2.5px #cb6995, 1.5px 1px #FFCCBFAD",
    },
    "&::before,after": {
      position: "absolute",
      left: "0",
      right: "0",
      height: "2px",
      backgroundColor: "#cb6995",
    },
    "butto::before": {
      top: "50%",
    },
    "::after": {
      top: "50%",
    },
  }),
}));
