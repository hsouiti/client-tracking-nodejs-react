import { makeStyles } from '@mui/styles'
import {Theme} from '@mui/material'

export const drawerWidth = 320;

export default makeStyles((theme: Theme) =>({
    logoApp: {
        fontSize: '2.5rem',
        color: 'rgba(255,255,255,.9)',
        fontWeight: 'bold',
        padding: '20px',
        marginBottom: 30,
        /* marginBottom:theme.spacing(2) */
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
        '&&': {
            color: 'rgba(255,255,255,.7)',
            minWidth: 35,
            justifyContent: 'center',
        },
        '& .MuiSvgIcon-root' :{
            fontSize: '1.45rem'
        }
    },
    navLinkRoot: {
        display: 'inline-block',
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'normal',
        '&:hover, &:active' :{
            color: 'orange'
        }
    },  
    sublinksListItem: {
        margin: 10,
        paddingTop: 0,
        paddingBottom: 50,
    },
    active: {
      textDecoration: 'underline',
      color:'orange'
    } 

}))