import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Home from './Home'
import Profile from './Profile'
// import Setting from './Setting'
// import Community from './Community'
// import Error from './Error'



class Router extends React.Component {

    render(){
        const routes = [
            // {
            //     path: "/",
            //     component : Home,
            //     exact: true
            // },
            {
                path: "/user/:id",
                component : Profile
            },
            // {
            //     path: "/Réglages",
            //     component : Setting ,
            //     exact : true
            // },
            // {
            //     path: "/Communauté",
            //     component : Community ,
            //     exact : true
            // },
            // {
            //     path: "*",
            //     component : Error ,
            // },
        ]

        return(
            <Switch>
                {routes.map((route, index)=> (
                     <Route key={index} {...route} />
                ))}
            </Switch>
        )
    }

}

export default Router