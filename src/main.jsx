import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#01377C",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          "&:hover": {
            background: "#fff",
            color: "#01377C",
          },
        }),
      },
    },
  },
  typography: {
    h1: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      "@media (min-width:600px)": {
        fontSize: "2.2rem",
      },
    },
    h3: {
      fontSize: "1.3rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
