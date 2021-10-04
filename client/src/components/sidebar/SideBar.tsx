import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Box,
  List, 
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
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
                      <>
                          <ListItem className={styles.li}>
                            {el.name}
                          {/* <ListItemIcon></ListItemIcon>    */} 
                            <List>
                              {
                                el.subLinks?.map(item => {
                                  return (
                                    <ListItem>
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
                          </ListItem>
                        </>
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