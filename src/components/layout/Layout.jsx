import React from 'react'
import { Container, Grid } from '@mui/material'
import { Footer } from '../footer/Footer'
import { NavBar } from '../nav/NavBar'

const sxContainer = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  background: 'lightgray',
}

const Layout = ({ children }) => {
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
          {children}
        </Container>
      </Grid>

      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Layout
