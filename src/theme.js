import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "hsla(45, 100%, 50%, 1)",
      color: "hsla(338, 100%, 50%, 1)",
    },
    secondary: {
      main: "hsla(338, 100%, 50%, 1)",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "Lato",
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "hsla(48, 30%, 2%, 1)",
        },
        iconOpen: {
          color: "hsla(45, 100%, 50%, 1)",
        },
        select: {},
        outlined: {
          "&:hover": {
            border: "3px solid red",
          },
        },
      },
    },
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       "&:hover": {
    //         border: "2px solid red",
    //       },
    //     },
    //   },
    // },
  },
});
