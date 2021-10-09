import React from 'react'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


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
        icon:  <DashboardIcon />,
        Component: Home,
    },
    {
        name:'Customers',
        path: '/customers',
        exatct: true,
        icon:  <PeopleIcon />,
        Component: Customers,
        subLinks: [
            {
                name: 'List Customers',
                path:'/customers',
                exact:true,
                icon:<PeopleIcon />,
                Component: Customers
            },
            {
                name: 'New Customer',
                path:'/customers/new',
                icon:<PeopleIcon />,
                Component: CustomersAdd
            },
        ]
    },
    {
        name:'Invoices',
        path: '/invoices',
        icon:  <InsertDriveFileIcon />,
        component: Invoices,
        subLinks: [
            {
                name: 'List Invoices',
                path:'/invoices',
                exact:true,
                icon:<InsertDriveFileIcon />,
                Component: Invoices
            },
            {
                name: 'New Invoice',
                path:'/invoices/new',
                icon:<InsertDriveFileIcon />,
                Component:InvoiceAdd
            },
        ]
    },
]

