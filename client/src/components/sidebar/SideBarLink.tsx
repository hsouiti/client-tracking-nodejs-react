import React from 'react'

import { NavLink } from 'react-router-dom'
import {ListItem,ListItemText, ListItemIcon, Typography} from '@mui/material'

import useStyles from './sidebarLinkStyles'

const SideBarLink = ({...item}) => {
    const styles = useStyles()
console.log('styles', styles)
    return (
        <ListItem  key={item.name} classes={{ root: styles.item}}>
            <ListItemIcon>{item.icon}</ListItemIcon>   
            <ListItemText>
                <Typography 
                    variant='subtitle1'
                    align='center'  
                    noWrap

                >                       
                    <NavLink 
                    exact
                    to={item.path} 
                        className={styles.navLink}
                        activeClassName={styles.selected}
                    > 
                        {item.name}
                    </NavLink>  
                </Typography>   
            </ListItemText>
        </ListItem>

    )
}

export default SideBarLink
