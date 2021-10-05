import React from 'react'

import { NavLink } from 'react-router-dom'
import {ListItem,ListItemText, ListItemIcon, Typography} from '@mui/material'

import useStyles from './sidebarLinkStyles'


const SideBarLink = ({...item}) => {
    const styles = useStyles()
    return (
        <ListItem  key={item.name} 
            className={styles.root}
        >
            <ListItemIcon className={styles.iconLink}>
                {item.icon}
            </ListItemIcon>
            <ListItemText className={styles.textLink}>
                <Typography 
                    variant='subtitle1'
                    align='left'  
                    noWrap
                >                       
                    <NavLink 
                        exact
                        to={item.path} 
                        className={styles.navLink}
                        activeClassName={styles.active}
                    > 
                        {item.name}
                    </NavLink>  
                </Typography>   
            </ListItemText>
        </ListItem>

    )
}

export default SideBarLink
