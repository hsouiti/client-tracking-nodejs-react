import { makeStyles } from '@mui/styles'
const drawerWidth = 300;

export default makeStyles({
    sidebar: {
        width: drawerWidth,
        backgroundColor: 'aqua'
    },
    linksWrapper: {
        width: drawerWidth
    },
    ul: {},
    li: {display: 'block'},
    navLink: {
        textDecoration: 'none'
    },
    selected: {
        textDecoration: 'underline'
    }
});