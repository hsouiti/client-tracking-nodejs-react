import React from 'react'
import {  Switch, Route,  BrowserRouter, Redirect } from 'react-router-dom'

import { appRoutes } from '../constants/appRoutes';
import SideBar from '../components/sidebar/SideBar';
import Header from '../components/layout/header/Header';


const NotFound = () => <h2>Not Found</h2>

const RenderRoute = ({...Routees}: any) => {  
  return <Route 
    exact={Routees.exact}
    path={Routees.Path}
    render={(props) => <Routees.component {...props} />}
  /> 
}



const Routes = () => {
  return (
     <>
        <BrowserRouter>
            <div style={{display: 'flex', width: '100%'}}>
                
                    <SideBar />
                
                <div style={{border: '1px solid red', flexGrow:1}}>
                  <Header />
                  
                   <React.Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                      {appRoutes.map(el => (
                        <RenderRoute {...el} key={el.name} /> 
                      ))}
                      <Route path='/404' component={NotFound} />
                      <Redirect to='/404' />
                    </Switch>
                  </React.Suspense>
                </div>
            </div>

        </BrowserRouter>
     </>
    )

}

export default Routes