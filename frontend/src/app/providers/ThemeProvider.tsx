// src/app/providers/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#10B981", // tu verde
    },
    secondary: {
      main: "#3B82F6", // tu azul
    },
    error: {
      main: "#EF4444", // tu rojo
    },
  },
});
