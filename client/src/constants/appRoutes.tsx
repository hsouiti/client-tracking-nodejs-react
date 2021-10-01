
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import {Home, Customers, Invoices} from '../pages/indexPages'


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

