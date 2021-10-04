import React from 'react'

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


/* To Get the name of each chunk 
    in production you must add
    (webpackChunkName) as below.
*/
const Home = React.lazy(() => import (/* webpackChunkName: "Home"*/ '../pages/home/home'))
const Customers = React.lazy (() => import (/* webpackChunkName: "Customers"*/ '../pages/customers/customers'))
const Invoices = React.lazy(() => import (/* webpackChunkName: "Invoices" */ '../pages/invoices/invoices'))

const CustomersAdd = () => <h1>Add Customer</h1>
const InvoiceAdd = () => <h1>Add Invoice</h1>

export const appRoutes = [
    {
        name:'Home',
        path: '/',
        exact: true, 
        icon:  <InboxIcon />,
        Component: Home,
    },
    {
        name:'Customers',
        path: '/customers',
        exatct: true,
        icon:  <MailIcon />,
        Component: Customers,
        subLinks: [
            {
                name: 'List Customers',
                path:'/customers',
                exact:true,
                icon:<MailIcon />,
                Component: Customers
            },
            {
                name: 'New Customer',
                path:'/customers/new',
                icon:<MailIcon />,
                Component: CustomersAdd
            },
        ]
    },
    {
        name:'Invoices',
        path: '/invoices',
        icon:  <InboxIcon />,
        component: Invoices,
        subLinks: [
            {
                name: 'List Invoices',
                path:'/invoices',
                exact:true,
                icon:<MailIcon />,
                Component: Invoices
            },
            {
                name: 'New Invoice',
                path:'/invoices/new',
                icon:<MailIcon />,
                Component:InvoiceAdd
            },
        ]
    },
]

