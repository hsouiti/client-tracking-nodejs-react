import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import { appRoutes } from '../../constants/appRoutes';



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
                appRoutes.map(el =>
                    <li key={el.name} >
                        <NavLink  to={el.path}>{el.name}</NavLink> 
                    </li>
                )
            } 
            </ul>
        </>
    )

}

export default SideBar