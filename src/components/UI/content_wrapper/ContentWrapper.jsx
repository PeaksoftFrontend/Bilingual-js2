import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledContainer = styled(Box)(({ theme }) => ({
  width: "980px",
  padding: "50px 80px",
  borderRadius: "1.25rem",
  backgroundColor: "#f6f8fc",
  margin: "0 auto",
  overflow: "hidden",
  boxShadow: "0rem 0.25rem 0.625rem rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

export const ContentWrapper = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
