
import {Home, Customers, Invoices} from '../pages/indexPages'

export const appRoutes = [
    {
        name:'Home',
        path: '/',
        exact: true, 
        component: Home
    },
    {
        name:'Customers',
        path: '/customers',
        component: Customers
    },
    {
        name:'Invoices',
        path: '/invoices',
        component: Invoices
    },
]

