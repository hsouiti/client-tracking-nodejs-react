import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Box,
  List, 
  Typography,
  ListItem,
  ListItemIcon,
  Drawer as MuiDrawer
}   from '@mui/material/'


import { appRoutes } from '../../constants/appRoutes'

import useStyles from './styles'


const SideBar = () => {
  const styles = useStyles()

    return (
      
      <MuiDrawer 
        variant="permanent"
        anchor="left"
        open 
        >
            <Box className={styles.sidebar}> 
              
                  {
                    appRoutes.map(el => {
                      return (
                        <div className={styles.sideBarElement} key={el.name}>                         
                            <Typography variant="subtitle1" gutterBottom >
                                <ListItemIcon >{el.icon}</ListItemIcon>   
                                {el.name}
                              </Typography>
                            {
                              el.subLinks && (
                                <List className={styles.sublinksList}>
                                  {
                                    el.subLinks?.map(item => {
                                      return (
                                        <ListItem key={item.name}>
                                          <ListItemIcon>{item.icon}</ListItemIcon>   
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
                                        </ListItem>
                                      )
                                    })
                                  }
                                </List>
                              )
                            }
                          </div>
                        )
                    })
                }
         </Box>
      </MuiDrawer>
    )

}

export default SideBar