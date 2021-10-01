import React from 'react'
import {BrowserRouter as  Router , NavLink} from 'react-router-dom'

import {navLinks} from './navLinks'


const Navigation = () => {
    return (
            <ul>
            {
                navLinks.map(el =>
                    <li key={el.title} >
                        <NavLink  to={el.path}>{el.title}</NavLink> 
                    </li>
                )
                } 
            </ul>
    )
}

export default Navigation