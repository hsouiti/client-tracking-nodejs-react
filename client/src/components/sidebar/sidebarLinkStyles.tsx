import { makeStyles } from '@mui/styles'

/*
#### reference of overwritting the default styles by & ####
https://cssinjs.org/jss-plugin-nested?v=v10.8.0
*/
export default makeStyles(theme => ({
    
    root: {
        color: 'white', 
        // Overwriting the default styling       
        '&&': {
          padding:'0px 20px',
          paddingLeft: 30
        },
        
        '&:hover, &:hover .MuiTypography-root a, &:hover .MuiSvgIcon-root': {
          color: 'orange'
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
      color:'orange'
    } 
}))

/*
export const styles = (theme) => ({
  /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
  /*root: {
    '&$focusVisible': {
      backgroundColor: theme.palette.action.selected,
    },
    '&$selected, &$selected:hover': {
      backgroundColor: theme.palette.action.selected,
    },
    '&$disabled': {
      opacity: 0.5,
    },
  },
  /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
  //focusVisible: {},
  /* Styles applied to the inner `component` element if `button={true}`. */
  /*button: {
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Pseudo-class applied to the root element if `selected={true}`. */
 /* selected: {},
});

*/