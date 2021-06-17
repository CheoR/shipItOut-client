import React from "react"
import { Route, Redirect } from "react-router-dom"
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
            console.log("there is a token");
                <Route render={NavBar} />
                <Route render={props => <ApplicationViews {...props} />} />
            </>
        } else {
            return <>
                {/* <Route render={NavBar} /> */}
                <Route render={Home} />
            </>
        }
    }} />

    <Route path="/login" render={Login} />
    <Route path="/register" render={Register} />
    </>
)