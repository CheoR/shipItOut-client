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
import { BookingUpdate } from "./booking/BookingUpdate"
import { ContainerList } from "./container/ContainerList"
import { ContainerView } from "./container/ContainerView"
import { ProductList } from "./product/ProductList"

import styles from "./ShipItOut.module.css"
import { FormUser } from "./forms/FormUser"
import { TestForm } from "./forms/TestForm"

export const ShipItOut = () => (
    <BrowserRouter>
    <main className={styles.shipItout}>
      <NavBar/>
      <Switch>
        <Route exact path="/test" component={TestForm} />
        <Route exact path="/signup" component={FormUser} />
        <Route exact path="/bookings/update/:id(\d+)" component={BookingUpdate} />
        <Route exact path="/containers/:id(\d+)"      component={ContainerView} />
        <Route exact path="/bookings/:id(\d+)"        component={BookingView} />
        <Route exact path="/products/:id(\d+)"        component={ProductList} />
        <Route exact path="/containers"               component={ContainerList} />
        <Route exact path="/products"                 component={ProductList} />
        <Route exact path="/bookings"                 component={BookingList} />
        <Route exact path="/register"                 component={Register} />
        <Route exact path="/login"                    component={Login} />
        <Route exact path="/"                         component={Home} />
        <Route                                        component={PageNotFound} />
      </Switch>
      <Footer />
    </main>
  </BrowserRouter>
);

