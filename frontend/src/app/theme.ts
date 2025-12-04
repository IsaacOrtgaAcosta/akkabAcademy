import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#10b981",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#3b82f6",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ef4444",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#f97316",
      contrastText: "#1F2937",
    },
    info: {
      main: "#1f2937",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F3F4F6",
      paper: "#ffffff",
    },
    text: {
      primary: "#1F2937",
      secondary: "#585b5e",
    },
  },
});

export const theme = createTheme({
  ...baseTheme,
  components: {
    MuiAlert: {
      styleOverrides: {
        // Alert estándar con severity="success"
        filledSuccess: {
          backgroundColor: baseTheme.palette.primary.main,
          color: baseTheme.palette.primary.contrastText,
        },
        // Alert estándar con severity="error"
        filledError: {
          backgroundColor: baseTheme.palette.error.main,
          color: baseTheme.palette.error.contrastText,
        },
        // Alert estándar con severity="info"
        filledInfo: {
          backgroundColor: baseTheme.palette.secondary.main,
          color: baseTheme.palette.secondary.contrastText,
        },
        // Alert estándar con severity="warning"
        filledWarning: {
          backgroundColor: baseTheme.palette.warning.main,
          color: baseTheme.palette.warning.contrastText,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedSuccess: {
          backgroundColor: baseTheme.palette.primary.main,
          color: baseTheme.palette.primary.contrastText,
        },
        containedPrimary: {
          backgroundColor: baseTheme.palette.secondary.main,
          color: baseTheme.palette.secondary.contrastText,
        },
      },
    },
   MuiLink: {
  styleOverrides: {
    root: {
      color: baseTheme.palette.secondary.main,
      fontWeight: 500,
      textUnderlineOffset: "3px",
      textDecorationColor: baseTheme.palette.secondary.main,
      "&:hover": {
        textDecoration: "underline",
        textDecorationColor: baseTheme.palette.secondary.main,
      },
    },
  },
},
  },
});
