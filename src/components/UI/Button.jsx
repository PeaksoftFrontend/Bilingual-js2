import { Button as MyButton, styled } from "@mui/material";
export const Button = ({
  children,
  onClick,
  variant = "text",
  disabled,
  type = "button",
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
      {children}
    </StyledBtn>
  );
};

const StyledBtn = styled(MyButton)(({ variant }) => ({
  ...(variant === "text" && {
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
    },
  }),

  ...(variant === "outlined" && {
    width: "82px",
    height: "42px",
    textTransform: "uppercase",
    fontSize: "14px",
    borderRadius: "8px",
    backgroundColor: "#2AB930",
    color: "#FFFFFF",

    "&:hover": {
      backgroundColor: "#31CF38",
    },
    "&:activ": {
      backgroundColor: "#08AF10",
    },
    "&:disabled": {
      backgroundColor: "#FEFEFF",
      color: "#C4C4C4",
      border: "1px solid #C4C4C4 ",
    },
  }),
  ...(variant === "contained" && {
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
      backgroundColor: "#C4C4C4",
      color: "#FEFEFF",
    },
  }),
  ...(variant === "LOGOUT" && {
    width: "104px",
    height: "42px",
    textTransform: "uppercase",
    fontSize: "14px",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    color: "#4C4C4C",
    border: "2px solid  #4C4859",

    "&:hover": {
      backgroundColor: "#3A10E5",
      color: "#FFFFFF",
      border: "none",
    },
  }),
}));
