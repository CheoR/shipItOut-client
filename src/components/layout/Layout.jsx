import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Grid } from '@mui/material'

import { Footer } from '../footer/Footer'
import { NavBar } from '../nav/NavBar'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useEffect } from 'react'

const sxContainer = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  background: 'lightgray',
}

const Layout = () => {

  const [token] = useLocalStorage('user_token')

  useEffect(() => {}, [token])
  return (
    <Grid
      container
      sx={sxContainer}
    >
      <Grid item>
        <NavBar />
      </Grid>

      <Grid
        item
        sx={{ flex: 1 }}
      >
        <Container
          component='main'
          sx={{ height: '100%' }}
        >
          <Outlet />
        </Container>
      </Grid>

      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Layout
