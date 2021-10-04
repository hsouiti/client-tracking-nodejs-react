import React from 'react'
import {  Switch, Route,  BrowserRouter, Redirect } from 'react-router-dom'

import { appRoutes } from '../constants/appRoutes';
import SideBar from '../components/sidebar/SideBar';
import Header from '../components/layout/header/Header';
import { Box } from '@mui/material';
import { drawerWidth } from '../components/sidebar/styles';

const NotFound = () => <h2>Not Found</h2>

const RenderRoute = ({...route}: any) => {  
  console.log('hhh', route)
  return <Route 
    exact={route.exact}
    path={route.Path}
    render={(props) => <route.Component {...props} />}
  /> 
}



const contentStyle = {
  marginLeft:drawerWidth,
width: '100%',
padding:'20px',
backgroundColor: 'aqua  '
}


const Routes = () => {
  return (
        <BrowserRouter>
          <SideBar />
          <Box style={contentStyle}>
              <React.Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {appRoutes.map(el => {
                  return (
                    el.subLinks  ?
                    el.subLinks?.map(item => <RenderRoute {...item} key={item.name} />)
                    
                    : <RenderRoute {...el} key={el.name} />                        
                    )
                  })}

                <Route path='/404' component={NotFound} />
                <Redirect to='/404' />
              </Switch>
            </React.Suspense>
        </Box>
        </BrowserRouter>
    )

}

export default Routes