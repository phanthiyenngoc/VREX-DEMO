import { createTheme } from "@mui/material/styles";

export const light = {
  palette: {
    mode: "light",
    primary: {
      main: "#8D18AF",
      // light: "#74C044",
      dark: "#47005d",
    },
    secondary: {
      main: "#F37506",
    },
    ruby: {
      main: "#DC496C",
    },
    jade: {
      light: "#626262",
      dark: "#222222",
    },
    smoke: {
      light: "#E1E1E1",
      dark: "#9F9F9F",
    },
    supernova: {
      light: "#FFC901",
      dark: "#FFC600",
    },
    canvas: {
      light: "#FAFAFA",
      dark: "#FAFAFA",
    },
    success: {
      main: "#0448CA",
      light: "#E5ECFA",
      contrastText: "#E5ECFA",
    },
    error: {
      main: "#D50134",
      light: "#F2B2C1",
      contrastText: "#F2B2C1",
    },
    text: {
      primary: "#222222",
    },
    Boxider: "#E1E1E1",
  },
  spacing: [0, 4, 8, 16, 24, 32, 48, 64, 96, 112],
  breakpoints: {
    values: {
      xs: 0,
      md: 600,
      lg: 960,
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    subtitle1: {
      color: "#626262",
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    subtitle2: {
      color: "#626262",
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    caption: {
      color: "#626262",
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    body1: {
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    body2: {
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    h4: {
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    h5: {
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
    h6: {
      color: "#222222",
      lineHeight: "1.5em",
      letterSpacing: "0.05em",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "12.5px 14px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: `
          &.MuiPaper-root {
            box-shadow:rgb(0 0 0 / 8%) 0px 1px 12px;
          }`,
      },
    },
  },
};

export const rateColor = "#faaf00";
export default Object.assign(
  {},
  {
    light,
    dark: {},
  }
);

export const theme = createTheme(light);
