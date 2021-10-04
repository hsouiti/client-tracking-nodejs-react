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
    navLink: {
        textDecoration: 'none'
    },
    selected: {
        backgroundColor: 'red'
    }
});