import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { DataTableProvider } from './table/DataTableProvider'

import { BookingList } from './pages/booking/BookingList'
import { BookingPage } from "./pages/booking/BookingPage"

import { ContainerList } from './pages/container/ContainerList'
import { ContainerView } from './pages/container/ContainerView'

import { ProductList } from './pages/product/ProductList'
import { ProductView } from './pages/product/ProductView'

import { PageNotFound } from './pages/PageNotFound'
import { Register } from './auth/Register'
import { Landing } from './pages/Landing'
import { Login } from './auth/Login'
import Layout from './layout/Layout'
import useLocalStorage from '../hooks/useLocalStorage'

export const ShipItOut = () => {
  // let token = localStorage.getItem('user_token')
  let [token] = useLocalStorage('user_token')
  useEffect(() => {
    // refresh
    // TODO: figure out how to refresh body after token gets set
    // the navbar resets but not the body from Landing to Bookings
    console.log('test ShipItOut use effect token: ', token)
  }, [token])

  console.log('test SHipItout token: ', token)

  return (
    <DataTableProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ token ? <BookingList /> : <Landing /> } />

          <Route path="products">
            <Route index element={ <ProductList /> } />
            <Route path="update/:id(\d+)" element={ <ProductView /> } />
            <Route path="create" element={ <ProductView /> } />
            <Route path=":id(\d+)" element={ <ProductView /> } />
            <Route path="*" element={ <PageNotFound /> } />
          </Route>

          <Route path="containers">
            <Route index element={ <ContainerList /> } />
            <Route path="update/:id(\d+)" element={ <ContainerView /> } />
            <Route path="create" element={ <ContainerView /> } />
            <Route path="view/:id(\d+)" element={ <ContainerView /> } />
            <Route path="*" element={ <PageNotFound /> } />
          </Route>
          <Route path="bookings">
            <Route index element={ <BookingList /> } />
            <Route path="update/:id(\d+)" element={ <BookingPage /> } />
            <Route path="view/:id(\d+)" element={ <BookingPage /> } />
            <Route path="create" element={ <BookingPage /> } />
            <Route path="*" element={ <PageNotFound /> } />
          </Route>

          <Route path="register" element={ <Register /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Route>
      </Routes>
    </DataTableProvider>
  )
}
