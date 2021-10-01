import React from 'react'
import { NavLink } from 'react-router-dom'

import { appRoutes } from '../../constants/appRoutes';
 import styles from './Sidebar.module.css'


const SideBar = () => {
    return (
         <>
          <div style={{
            backgroundColor:'#6464e7', 
             height: '130px',
            color: '#FFF', 
            display: 'flex', 
            justifyContent: 'start', 
            alignItems:'center',
            textTransform: 'uppercase',
            paddingLeft: '20px'
           }} >

            <h2>Logo.</h2>
            
          </div>
            <ul>
            {
                appRoutes.map(el => {
                  return (
                      <li key={el.name}>
                        <NavLink 
                          to={el.path} 
                          className={styles.nav}
                          activeClassName={styles.selected}
                        >
                          {el.icon} {el.name}
                        </NavLink> 
                      </li>
                    )
                 })
            } 
            <NavLink to='/yyyy'>YYYY</NavLink>
            </ul>
        </>
    )

}

export default SideBar