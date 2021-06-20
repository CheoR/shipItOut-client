import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { PageNotFound } from "./helpers/PageNotFound"
import { Footer } from "./footer/Footer"

import { Home } from "./home/Home"
import { BookingView } from "./booking/BookingView"
import { BookingList } from "./booking/BookingList"
import { ContainerList } from "./container/ContainerList"
import { ProductList } from "./product/ProductList"

import styles from "./ShipItOut.module.css"

export const ShipItOut = () => (
    
    <BrowserRouter>
    <main className={styles.shipItout}>
      <NavBar/>
      <Switch>
        <Route exact path="/bookings/:id(\d+)" component={BookingView} />
        <Route exact path="/containers" component={ContainerList} />
        <Route exact path="/products"   component={ProductList} />
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

