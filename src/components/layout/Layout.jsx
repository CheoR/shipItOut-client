import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { Footer } from '../footer/Footer'
import { NavBar } from '../nav/NavBar'

const sxContainer = {
  // display: 'flex',
  // flexDirection: 'column',
  minHeight: '100vh',
  background: 'blue',
}

const Layout = ({ children }) => {
  return (
    <Grid container sx={sxContainer}>
      <Grid item sx={{background: "pink"}}>
        <NavBar />
      </Grid>

      <Grid item>
        <Container
          component='main'
          sx={{ background: 'red' }}
        >
          { children }
        </Container>
      </Grid>

      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Layout
