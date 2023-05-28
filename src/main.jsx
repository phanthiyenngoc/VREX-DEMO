import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themeConfig.js";
import router from "./router/index.jsx";
import "swiper/css";
import { RouterProvider } from "react-router-dom";
import { UserAuthProvider } from "./contexts/user.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <UserAuthProvider>
      <RouterProvider router={router} />
    </UserAuthProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
