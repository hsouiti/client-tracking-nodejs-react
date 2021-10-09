import { createTheme } from "@mui/material/styles";


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

