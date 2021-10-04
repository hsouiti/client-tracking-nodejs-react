import { makeStyles } from '@mui/styles'

export const drawerWidth = 300;

export default makeStyles({
    
    sidebar: {
        width: drawerWidth,
        padding:20,
        backgroundColor: 'rgba(17,34,56,1)',
    },
    sideBarElement: {
        border: '1px solid blue',
        color:'white',
         marginBottom: 10
        },
    sublinksList: {
        //border: '1px solid purple'
        color: 'white'
    },
    navLink: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'normal',
        fontSize: '.9rem'
    },
    selected: {
        textDecoration: 'underline'
    }
});