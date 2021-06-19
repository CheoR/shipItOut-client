import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

import { Home } from "./home/Home"
import { Footer } from "./footer/Footer"
import { PageNotFound } from "./helpers/PageNotFound"
import { BookingList } from "./booking/BookingList"
import { ContainerList } from "./container/ContainerList"
import styles from "./ShipItOut.module.css"

export const ShipItOut = () => (
    
    <BrowserRouter>
    <main className={styles.shipItout}>
        {            

            localStorage.getItem("user_token")
            ? <NavBar loggedIn={true} />
            : <NavBar loggedIn={false} />
        }
      <Switch>
        <Route exact path="/containers" component={ContainerList} />
        <Route exact path="/bookings"   component={BookingList} />
        <Route exact path="/register"   component={Register} />
        <Route exact path="/login"      component={Login} />
        <Route exact path="/"           component={Home} />
        <Route                          component={PageNotFound} />
      </Switch>
      <Footer />
    </main>
  </BrowserRouter>
);

