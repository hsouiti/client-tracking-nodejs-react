import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  Box,
  List, 
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Drawer as MuiDrawer
}   from '@mui/material/'


import { appRoutes } from '../../constants/appRoutes'

import useStyles from './styles'




const SideBar = () => {
  const styles = useStyles()

    return (
         <Box>
          <MuiDrawer variant="permanent" open>
            <List>
              {
                appRoutes.map(el => {
                  return (
                      <ListItem key={el.name}>
                          <ListItemButton>
                            <ListItemIcon></ListItemIcon>                           
                              <NavLink 
                                exact
                                to={el.path} 
                                 activeClassName={styles.selected}
                                >
                                {el.name}
                              </NavLink>  
                          </ListItemButton>
                      </ListItem>
                    )
                })
            }

            </List>
          </MuiDrawer>
        </Box>
    )

}

export default SideBar