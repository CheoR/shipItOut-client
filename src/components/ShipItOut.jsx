import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import { BookingList } from './booking/BookingList'
// import { BookingUpdate } from './booking/BookingUpdate'
import { BookingView } from './booking/BookingView'
import { BookingPage } from "./booking/BookingPage"

import { ContainerList } from './container/ContainerList'
import { ContainerView } from './container/ContainerView'

import { ProductList } from './product/ProductList'
import { ProductView } from './product/ProductView'

import { PageNotFound } from './helpers/PageNotFound'
import { Register } from './auth/Register'
import Layout from './layout/Layout'
import { Login } from './auth/Login'
import { Home } from './home/Home'

export const ShipItOut = () => {
  let token = localStorage.getItem('user_token')
  useEffect(() => {
    // refresh
  }, [token])

  return (
    <Layout>
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
          component={BookingPage} // BookingUpdate}
        />
        <Route
          exact
          path='/bookings/:id(\d+)'
          component={BookingView}
        />
        <Route
          exact
          path='/bookings/create'
          component={BookingPage}
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
          component={token ? BookingList : Home}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  )
}
