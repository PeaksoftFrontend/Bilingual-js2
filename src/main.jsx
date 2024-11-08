import ReactDOM from "react-dom/client";
import "./index.css";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/store";
// import { AppRoutes } from "./routes/routes";
import { WordSelector } from "./pages/client/WordSelector";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <WordSelector />
      {/* <AppRoutes /> */}
    </ThemeProvider>
  </Provider>
);
