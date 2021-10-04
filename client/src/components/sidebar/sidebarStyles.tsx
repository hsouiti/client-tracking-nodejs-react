import { makeStyles } from '@mui/styles'

export const drawerWidth = 300;

export default makeStyles({
    
    sidebar: {
        width: drawerWidth,
        padding:'0 20px',
        backgroundColor: 'rgba(17,34,56,1)',
        height: '100vh'
    },
    sideBarElement: {
        border: '1px solid blue',
        color:'white',
    },
    sublinksList: {
        border: '1px solid pink',
        padding:0,
    },
    sublinksListItem: {
        backgroundColor: 'red',
        margin: 10,
        paddingTop: 0,
        paddingBottom: 50
    },
});