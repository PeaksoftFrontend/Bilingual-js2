import { createTheme } from "@mui/material/styles";

const typographyVariants = {
  h1Bold: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  h2Bold: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  h3Bold: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  body1Bold: {
    fontSize: "15px",
    fontWeight: "bold",
  },
  body2Bold: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  h1Medium: {
    fontSize: "32px",
    fontWeight: 500,
  },
  h2Medium: {
    fontSize: "18px",
    fontWeight: 500,
  },
  h3Medium: {
    fontSize: "16px",
    fontWeight: 500,
  },
  body2Medium: {
    fontSize: "14px",
    fontWeight: 500,
  },
  h1Regular: {
    fontSize: "28px",
    fontWeight: "normal",
  },
  h2Regular: {
    fontSize: "26px",
    fontWeight: "normal",
  },
  h3Regular: {
    fontSize: "24px",
    fontWeight: "normal",
  },
  h4Regular: {
    fontSize: "18px",
    fontWeight: "normal",
  },
  body1Regular: {
    fontSize: "16px",
    fontWeight: "normal",
  },
  body2Regular: {
    fontSize: "13px",
    fontWeight: "normal",
  },
};

const theme = createTheme({
  typography: typographyVariants,
});

export default theme;
