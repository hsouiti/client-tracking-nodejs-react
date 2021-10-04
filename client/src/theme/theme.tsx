import { createTheme } from "@mui/material/styles";
import { green, purple } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
// https://mui.com/customization/color/#picking-colors

const mainColor = 'red'

const theme = createTheme({
    palette : {
        primary: {
            main: mainColor,
        } 
    }
})