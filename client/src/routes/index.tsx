import React from 'react'
import {
BrowserRouter as Router,
  Switch,
  Route, 
  NavLink
} from 'react-router-dom'

import {Home, Customers} from '../pages/indexPages'

import { navLinks } from '../components/layout/sidebar/navigation/navLinks'

const appRoutes = [
    {path: '/', component: Home},
    {path: '/customers', component: Customers},
]


export const Nav = () => {
    return(
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



export const NotFound = () => <h1>404!</h1>

const Routes = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/customers'  component={Customers} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default Routes
