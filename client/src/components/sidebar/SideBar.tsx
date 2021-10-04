import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Box,
  List, 
  Typography,
  ListItemIcon,
  Drawer as MuiDrawer
}   from '@mui/material/'


import { appRoutes } from '../../constants/appRoutes'

import useStyles from './sidebarStyles'
import SideBarLink from './SideBarLink'
import LogoApp from '../layout/logo/LogoApp'

const logo= {text:'LOGO APP.'}

const SideBar = () => {
  const styles = useStyles()

    return (
      <>
      <MuiDrawer 
        variant="permanent"
        anchor="left"
        open 
        >
            <Box className={styles.sidebar}> 
                <LogoApp {...logo} style={styles.logoApp} />
                  {
                    appRoutes.map(el => {
                      return (
                        <div className={styles.sideBarElement} key={el.name}>                         
                            <Typography variant="subtitle1" className={styles.item}>
                                <ListItemIcon className={styles.itemIcon}>{el.icon}</ListItemIcon>   
                                <NavLink 
                                to={el.path}
                                className={styles.navLinkRoot}
                                >
                                  {el.name}
                                </NavLink>
                              </Typography>
                            {
                              el.subLinks && (
                                <List classes={{root: styles.sublinksList}}>
                                  {el.subLinks?.map(item => <SideBarLink key={item.name} {...item} />)}
                                </List>
                              )
                            }
                        </div>
                      )
                    })
                }
         </Box>
      </MuiDrawer>
      </>
    )

}

export default SideBar