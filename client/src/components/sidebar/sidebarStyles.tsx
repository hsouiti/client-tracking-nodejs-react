import { makeStyles } from '@mui/styles'

export const drawerWidth = 350;

export default makeStyles({
    logoApp: {
        fontSize: '2.5rem',
        color: 'rgba(255,255,255,.9)',
        fontWeight: 'bold',
        padding: '10px 20px',
        marginBottom: 30
    },
    sidebar: {
        width: drawerWidth,
        padding:'0 30px',
        backgroundColor: 'rgba(17,34,56,1)',
        height: '100vh'
    },
    sideBarElement: {
        color:'white',
        marginBottom: 15
    },
    sublinksList: {
        padding:0,
    },
    item :{
        display:'flex'
    },
    itemIcon: {
        fontSize:'1.5rem',
        '&&': {
            color: 'rgba(255,255,255,.7)'
        }
    },
    navLinkRoot: {
        display: 'inline-block',
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'normal',
    },  
    sublinksListItem: {
        margin: 10,
        paddingTop: 0,
        paddingBottom: 50,
        border: '1px solid green'
    },
});