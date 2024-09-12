import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#3A10E5",
      light: "#3752B4",
      dark: "#23212A",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FE9102",
      light: "#666CA7",
      dark: "#262626",
      contrastText: "#FEF5E8",
    },
  },
  gradients: {
    purple:
      "linear-gradient(270deg, #C23677 0%, #C5397A 27.92%, #C43879 64.37%, #BB2E6F 100%)",
  },
});
