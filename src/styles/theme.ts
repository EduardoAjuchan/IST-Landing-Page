// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00A1E4', // Azul
    },
    secondary: {
      main: '#00C853', // Verde
    },
    text: {
      primary: '#37474F', // Gris oscuro
    },
    background: {
      default: '#F5F5F5', // Gris claro
      paper: '#FFFFFF',
    },
  },
});

export default theme;
