import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  Box,
  List, 
  Typography,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Drawer as MuiDrawer
}   from '@mui/material/'


import { appRoutes } from '../../constants/appRoutes'

import useStyles from './styles'




const SideBar = () => {
  const styles = useStyles()

    return (
         <Box>
          <MuiDrawer 
            variant="permanent"
            anchor="left"
            open 
            className={styles.sidebar}
          >
            <div className={styles.linksWrapper}>
            <List>
              {
                appRoutes.map(el => {
                  return (
                      <ListItem key={el.name}>
                          <ListItemButton>
                            <ListItemIcon></ListItemIcon>    
                             <Typography variant="h6" noWrap component="div">                       
                              <NavLink 
                                  exact
                                  to={el.path} 
                                  className={styles.navLink}
                                 activeClassName={styles.selected}
                                >
                                {el.name}
                              </NavLink>  
                              </Typography>
                          </ListItemButton>
                      </ListItem>
                    )
                })
            }

            </List>
            </div>
          </MuiDrawer>
        </Box>
    )

}

export default SideBar