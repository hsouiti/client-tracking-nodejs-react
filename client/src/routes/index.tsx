import React from 'react'
import {  Switch, Route } from 'react-router-dom'

import { appRoutes } from '../constants/appRoutes';
import SideBar from '../components/sidebar/SideBar';
import Header from '../components/layout/header/Header';



const renderRoutes = (
  <Switch>
    {appRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            component={route.component}
            key={route.name}
            exact={route.exact}
          />
        );
     
    })}
  </Switch>
);


const Routes = () => {
    return (
         <>
            <div style={{display: 'flex', width: '100%'}}>
                
                <div style={{border: '1px solid red', width: '15%', backgroundColor:'#6464e7'}}>
                    <SideBar />
                </div>
                
                <div style={{border: '1px solid red', flexGrow:1}}>
                    <Header />
                    {renderRoutes}
                </div>
            </div>

        </>
    )

}

export default Routes