import { styled } from "@mui/material";
import { Box } from "@mui/material";

const StyledContainer = styled(Box)(({ theme }) => ({
  width: "980px",
  padding: "50px 80px",
  borderRadius: "1.25rem",
  backgroundColor: "#fff",
  margin: "0 auto",
  overflow: "hidden",
  boxShadow: "0rem 0.25rem 0.625rem rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

export const ContentWrapper = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
