import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { BookingPage } from "./pages/booking/BookingPage"
import { ContainerView } from './pages/container/ContainerView'
import { ProductView } from './pages/product/ProductView'

import { DataTableProvider } from './table/DataTableProvider'
import PrivateRoute from './auth/PrivateRoute/PrivateRoute'
import { UserContext } from '../context/UserContext'
import { PageNotFound } from './pages/PageNotFound'
import { DataTable } from './table/DataTable'
import { Register } from './auth/Register'
import { Landing } from './pages/Landing'
import { Login } from './auth/Login'
import Layout from './layout/Layout'


export const ShipItOut = () => {
  const { user: { token } } = useContext(UserContext)

  return (
    <DataTableProvider>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ token ? <DataTable endpoint="bookings" /> : <Landing /> } />

            <Route element={ <PrivateRoute />}>
              <Route path="products">
                <Route index element={ <DataTable endpoint="products" /> } />
                <Route path="update/:id" element={ <ProductView /> } />
                <Route path="create" element={ <ProductView /> } />
                <Route path=":id" element={ <ProductView /> } />
                <Route path="*" element={ <PageNotFound /> } />
              </Route>

              <Route path="containers">
                <Route index element={ <DataTable endpoint="containers" /> } />
                <Route path="update/:id" element={ <ContainerView /> } />
                <Route path="create" element={ <ContainerView /> } />
                <Route path="view/:id" element={ <ContainerView /> } />
                <Route path="*" element={ <PageNotFound /> } />
              </Route>

              <Route path="bookings">
                <Route index element={<DataTable endpoint="bookings" />} />
                <Route path="update/:id" element={ <BookingPage /> } />
                <Route path="view/:id" element={ <BookingPage /> } />
                <Route path="create" element={ <BookingPage /> } />
                <Route path="*" element={ <PageNotFound /> } />
              </Route>
            </Route>

            <Route path="register" element={ <Register /> } />
            <Route path="login" element={ <Login /> } />
            <Route path="*" element={ <PageNotFound /> } />
          </Route>
        </Routes>
    </DataTableProvider>
  )
}
