import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import {theme} from "./theme/theme"
import { ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
   <ThemeProvider theme={theme}>
    <App />
   </ThemeProvider>
  </StrictMode>
);
