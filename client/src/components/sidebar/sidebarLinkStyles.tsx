import { makeStyles } from '@mui/styles'


export default makeStyles(theme => ({
    
    root: {
        color: 'white',        
        '&&': {
           padding:'0px 20px'
        }

    },
  textLink: {
  },
  iconLink: {
    '&&': {
      minWidth: 40,
      justifyContent: 'center',
        color: 'rgba(255,255,255,.7)',
        fontSize:'1rem'
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
  selected: {
      textDecoration: 'underline'
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