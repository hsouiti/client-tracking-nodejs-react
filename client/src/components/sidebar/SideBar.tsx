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
                <LogoApp {...logo}/>
                  {
                    appRoutes.map(el => {
                      return (
                        <div className={styles.sideBarElement} key={el.name}>                         
                            <Typography variant="subtitle1" gutterBottom >
                                <ListItemIcon >{el.icon}</ListItemIcon>   
                                <NavLink 
                                to={el.path}
                                //className={`${styles.navLink} ${styles.navLinkRoot}`}
                                >
                                  {el.name}
                                </NavLink>
                              </Typography>
                            {
                              el.subLinks && (
                                <List className={styles.sublinksList}>
                                  {
                                    el.subLinks?.map(item => {
                                      return (
                                        // TODO: Extract to a new component <LinkSideBar />

                                        <SideBarLink {...item} />

                                       
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
      </>
    )

}

export default SideBar