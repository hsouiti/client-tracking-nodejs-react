import { makeStyles } from '@mui/styles'


export default makeStyles({
    
    root: {
        color: 'white',
        border: '1px solid yellow',     
        backgroundColor: 'purple', 
        padding:0
    },
    item: {
        border: '1px solid yellow',     
        padding: 0
    },
    navLink: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'normal',
        margin:0,
        fontSize: '.85rem',
        padding: 0,
    },  
    selected: {
        textDecoration: 'underline'
    } 
});

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