import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { NavBar } from './nav/NavBar'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { PageNotFound } from './helpers/PageNotFound'
import { Footer } from './footer/Footer'

import { Home } from './home/Home'
import { BookingList } from './booking/BookingList'
import { BookingUpdate } from './booking/BookingUpdate'
import { ContainerList } from './container/ContainerList'
import { ContainerView } from './container/ContainerView'

import { ProductList } from './product/ProductList'

import styles from './ShipItOut.module.css'

import { BkgPage } from './forms/BkgPage'
import { BookingView } from './booking/BookingView'
import { DataTableProvider } from './table/DataTableProvider'
import { ProductView } from './product/ProductView'
import { BookingCreate } from './booking/BookingCreate'

export const ShipItOut = () => (
  <BrowserRouter>
    <DataTableProvider>
      <main className={styles.shipItout}>
        <NavBar />
        <Switch>
          <Route
            exact
            path='/products/:id(\d+)'
            component={ProductView}
          />
          <Route
            exact
            path='/products'
            component={ProductList}
          />

          <Route
            exact
            path='/containers/:id(\d+)'
            component={ContainerView}
          />
          <Route
            exact
            path='/containers'
            component={ContainerList}
          />

          <Route
            exact
            path='/bookings/update/:id(\d+)'
            component={BookingUpdate}
          />
          <Route
            exact
            path='/bookings/:id(\d+)'
            component={BookingView}
          />
          <Route
            exact
            path='/bookings/create'
            component={BkgPage}
          />
          <Route
            exact
            path='/bookings'
            component={BookingList}
          />

          <Route
            exact
            path='/register'
            component={Register}
          />
          <Route
            exact
            path='/login'
            component={Login}
          />
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </main>
    </DataTableProvider>
  </BrowserRouter>
)
