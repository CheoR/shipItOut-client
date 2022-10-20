import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { BookingList } from './booking/BookingList'
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
import { DataTableProvider } from './table/DataTableProvider'
import { DataTable } from './table/DataTable'

export const ShipItOut = () => {
  let token = localStorage.getItem('user_token')
  useEffect(() => {
    // refresh
  }, [token])


  return (
    <DataTableProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home">
            <Route index element={ <Home /> } />
          </Route>
          {/* <Route path="products">
            <Route index element={ <DataTable /> } />
            <Route path="update/:id" element={ <ProductUpdate /> } />
            <Route path="create" element={ <ProductForm /> } />
            <Route path=":id" element={ <ProductDetail /> } />
            <Route path="*" element={ <PageNotFound /> } />
          </Route>

          <Route path="containers">
            <Route index element={ <DataTable /> } />
            <Route path="update/:id" element={ <ContainerUpdate /> } />
            <Route path="create" element={ <ContainerForm /> } />
            <Route path=":id" element={ <ContainerDetail /> } />
            <Route path="*" element={ <PageNotFound /> } />
          </Route>

          <Route path="bookings">
            <Route index element={ <DataTable /> } />
            <Route path="update/:id" element={ <BookingUpdate /> } />
            <Route path="create" element={ <BookingForm /> } />
            <Route path=":id" element={ <BookingDetail /> } />
            <Route path="*" element={ <PageNotFound /> } />
          </Route> */}

          <Route path="register" element={ <Register /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Route>
      </Routes>
    </DataTableProvider>
    // <Layout>
    //   <Routes>
    //     <Route
    //       exact
    //       path='/products/:id(\d+)'
    //       component={ProductView}
    //     />
    //     <Route
    //       exact
    //       path='/products'
    //       component={ProductList}
    //     />

    //     <Route
    //       exact
    //       path='/containers/:id(\d+)'
    //       component={ContainerView}
    //     />
    //     <Route
    //       exact
    //       path='/containers'
    //       component={ContainerList}
    //     />

    //     <Route
    //       exact
    //       path='/bookings/update/:id(\d+)'
    //       component={BookingPage}
    //     />
    //     <Route
    //       exact
    //       path='/bookings/view/:id(\d+)'
    //       component={BookingPage}
    //     />
    //     <Route
    //       exact
    //       path='/bookings/create'
    //       component={BookingPage}
    //     />
    //     <Route
    //       exact
    //       path='/bookings'
    //       component={BookingList}
    //     />

    //     <Route
    //       exact
    //       path='/register'
    //       component={Register}
    //     />
    //     <Route
    //       exact
    //       path='/login'
    //       component={Login}
    //     />
    //     <Route
    //       exact
    //       path='/'
    //       component={token ? BookingList : Home}
    //     />
    //     <Route component={PageNotFound} />
    //   </Routes>
    // </Layout>
  )
}
