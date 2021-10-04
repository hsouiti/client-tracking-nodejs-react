import React from 'react'

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


// Get the name of each chunk in build (webpackChunkName)

const Home = React.lazy(() => import (/* webpackChunkName: "Home"*/ '../pages/home/home'))
const Customers = React.lazy (() => import (/* webpackChunkName: "Customers"*/ '../pages/customers/customers'))
const Invoices = React.lazy(() => import (/* webpackChunkName: "Invoices" */ '../pages/invoices/invoices'))



export const appRoutes = [
    {
        name:'Home',
        path: '/',
        exact: true, 
        icon:  <InboxIcon />,
        Component: Home
    },
    {
        name:'Customers',
        path: '/customers',
        icon:  <MailIcon />,
        Component: Customers
    },
    {
        name:'Invoices',
        path: '/invoices',
        icon:  <InboxIcon />,
        Component: Invoices
    },
]

