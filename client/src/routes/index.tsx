import React from 'react'
import {  Switch, Route,  BrowserRouter } from 'react-router-dom'

import { appRoutes } from '../constants/appRoutes';
import SideBar from '../components/sidebar/SideBar';
import Header from '../components/layout/header/Header';


const NotFound = () => <h2>Not Found</h2>

const RenderRoute = ({...Routees}: any) => {  
  return <Route 
    exact={Routees.exact}
    path={Routees.Path}
    render={(props) => <Routees.Component {...props} />}
  /> 
}



const Routes = () => {
  return (
     <>
        <BrowserRouter>
            <div style={{display: 'flex', width: '100%'}}>
                
                <div style={{border: '1px solid red', width: '15%'}}>
                    <SideBar />
                </div>
                
                <div style={{border: '1px solid red', flexGrow:1}}>
                  <Header />
                    <Switch>
                      {appRoutes.map(el => (
                        <RenderRoute {...el} key={el.name} /> 
                      ))}
                      <Route component={NotFound} />
                    </Switch>
                </div>
            </div>

        </BrowserRouter>
     </>
    )

}

export default Routes