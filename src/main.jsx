import ReactDOM from "react-dom/client";
import "./index.css";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AudioRecordingInterface } from "./pages/evaluated/RecordSayingStatment";
// import { AppRoutes } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* <AppRoutes /> */}
      <AudioRecordingInterface />
    </ThemeProvider>
  </Provider>
);
