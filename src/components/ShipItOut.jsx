import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { PageNotFound } from './helpers/PageNotFound'

import { Home } from './home/Home'
import { BookingList } from './booking/BookingList'
import { BookingUpdate } from './booking/BookingUpdate'
import { ContainerList } from './container/ContainerList'
import { ContainerView } from './container/ContainerView'

import { ProductList } from './product/ProductList'

import { BkgPage } from './forms/BkgPage'
import { BookingView } from './booking/BookingView'
import { ProductView } from './product/ProductView'
// import { BookingCreate } from './booking/BookingCreate'
import Layout from './layout/Layout'

export const ShipItOut = () => {
  let token = localStorage.getItem('user_token')

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
          component={token ? BookingList : Home}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  )
}
