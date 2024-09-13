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
    },
    "&:activ": {
      backgroundColor: "#3007DA",
    },
    "&:disabled": {
      backgroundColor: "#FEFEFF",
      color: "#C4C4C4",
      border: "1px solid #C4C4C4 ",
      сursor: "not-allowed",
    },
  }),

  ...(variant === "contained" && {
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
    },
    "&:activ": {
      backgroundColor: "#08AF10",
    },
    "&:disabled": {
      сursor: "not-allowed",
      backgroundColor: "#FEFEFF",
      color: "#C4C4C4",
      border: "2px solid #C4C4C4 ",
    },
  }),
  ...(variant === "outlined" && {
    width: "100px",
    height: "42px",
    textTransform: "uppercase",
    fontSize: "14px",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    color: "#3A10E5",
    border: "2px solid #3A10E5",

    "&:hover": {
      backgroundColor: "#3A10E5",
      color: "#FEFEFF",
      border: "none",
    },
    "&:activ": {
      backgroundColor: "#3007DA",
    },
    "&:disabled": {
      сursor: "not-allowed",

      backgroundColor: "#FEFEFF",
      color: "#C4C4C4",
      border: "1px solid #C4C4C4 ",
    },
  }),
  ...(variant === "NEXT" && {
    width: "143px",
    height: "42px",
    textTransform: "uppercase",
    fontSize: "14px",
    borderRadius: "8px",
    backgroundColor: "#3A10E5",
    color: "#FEFEFF",

    "&:hover": {
      backgroundColor: "#4E28E8",
    },
    "&:activ": {
      backgroundColor: "#3007DA",
    },
    "&:disabled": {
      сursor: "not-allowed",

      backgroundColor: "#C4C4C4",
      color: "#FEFEFF",
    },
  }),
}));
