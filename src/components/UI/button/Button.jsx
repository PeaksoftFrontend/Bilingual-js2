import { Button as MyButton, styled } from "@mui/material";

export const Button = ({
  children,
  onClick,
  variant = "text",
  disabled,
  type = "button",
  icon,
  ...props
}) => {
  return (
    <StyledBtn
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
    </StyledBtn>
  );
};

const StyledBtn = styled(MyButton)(({ variant }) => ({
  fontWeight: "600",
  "&:disabled": {
    pointerEvents: "auto",
    cursor: "not-allowed",
  },
  ...(variant === "text" && {
    display: "flex",
    gap: "10px",
    width: "164px",
    height: "42px",
    textTransform: "uppercase",
    fontSize: "14px",
    borderRadius: "8px",
    backgroundColor: "#3A10E5",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#3A10E5E5",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    },
    "&:active": {
      backgroundColor: "#3007DA",
    },
    "&.Mui-disabled": {
      backgroundColor: "#FEFEFF",
      color: "#C4C4C4",
      border: "2px solid #C4C4C4",
    },
  }),

  ...(variant === "sucsses" && {
    width: "82px",
    height: "42px",
    textTransform: "uppercase",
    fontSize: "14px",
    borderRadius: "8px",
    backgroundColor: "#2AB930",
    color: "#FFFFFF",
    border: "none",

    "&:hover": {
      backgroundColor: "#31CF38",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    },
    "&:active": {
      backgroundColor: "#08AF10",
    },
    "&.Mui-disabled": {
      cursor: "not-allowed !important",
      backgroundColor: "#FEFEFF",
      color: "#C4C4C4",
      border: "2px solid #C4C4C4",
    },
  }),

  ...(variant === "outlined" && {
    width: "fit-content",
    height: "40px",
    textTransform: "uppercase",
    fontSize: "14px",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    color: "#3A10E5",
    border: "2px solid #3A10E5",
    textWrap: "nowrap",

    "&:hover": {
      backgroundColor: "#3A10E5",
      color: "#FEFEFF",
      border: "none",
    },
    "&:active": {
      backgroundColor: "#3007DA",
    },
    "&.Mui-disabled": {
      cursor: "not-allowed !important",
      backgroundColor: "#FEFEFF",
      color: "#C4C4C4",
      border: "2px solid #C4C4C4",
    },
  }),

  ...(variant === "contained" && {
    width: "143px",
    height: "42px",
    textTransform: "uppercase",
    fontSize: "14px",
    borderRadius: "8px",
    backgroundColor: "#3A10E5",
    color: "#FEFEFF",

    "&:hover": {
      backgroundColor: "#4E28E8",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    },
    "&:active": {
      backgroundColor: "#3007DA",
    },
    "&.Mui-disabled": {
      border: "2px solid #C4C4C4",
      backgroundColor: "#C4C4C4",
      color: "#FEFEFF",
    },
  }),
}));
