import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
/*
#### reference of overwritting the default styles by & ####
https://cssinjs.org/jss-plugin-nested?v=v10.8.0
*/
export default makeStyles((theme: Theme) => ({
    
    root: {
        color: 'white', 
        // Overwriting the default styling       
        '&&': {
          padding:'0px 20px',
          paddingLeft: 30
        },
        
        '&:hover, &:hover .MuiTypography-root a, &:hover .MuiSvgIcon-root': {
          color:theme.palette.secondary.main 
        }
        
      },
      textLink: {
      },
      iconLink: {
        '&&': {
          minWidth: 40,
          justifyContent: 'center',
          color: 'rgba(255,255,255,.7)',
        },
        '& .MuiSvgIcon-root': {
          fontSize: '1.3rem',
        },
      },
    navLink: {
      textDecoration: 'none',
      color: 'white',
      fontWeight: 'normal',
      margin:0,
      fontSize: '.85rem',
      padding: 0,
    },  
    active: {
      textDecoration: 'underline',
      color:theme.palette.secondary.main 
    } 
}))
