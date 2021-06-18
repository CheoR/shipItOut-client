import React from "react"
import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"

import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

import { Home } from "./home/Home"


export const ShipItOut = () => (
    <>
    <Route render={() => {
        if (localStorage.getItem("user_token")) {
            return <>
                <Route render={NavBar} />
                <Route render={props => <ApplicationViews {...props} />} />
            </>
        } 
        // else {
        //     return <>
        //         {/* <Route render={NavBar} /> */}
        //         {console.log(" i am home -")}
        //         <Route render={Home} />
        //     </>
        // }
    }} />
    <Route exact path="/" render={Home} />
    <Route exact path="/login" render={Login} />
    <Route exact path="/register" render={Register} />
    </>
)