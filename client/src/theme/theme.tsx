import { createTheme } from "@mui/material/styles";
import { green, purple } from '@mui/material/colors';


// https://mui.com/customization/color/#picking-colors

const primaryColor =  'rgba(17,34,56,1)'
const secondaryColor =  'rgba(255, 145, 0,1)'

export const theme = createTheme({
    palette : {
        primary: {
            main: primaryColor,
        },
         secondary:  {
             main: secondaryColor
         }
    }
})

