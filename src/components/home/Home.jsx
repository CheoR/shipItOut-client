import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, ButtonGroup, Typography } from '@mui/material'

import logo from '../../assets/images/pugTransport.svg'

export const Home = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <Box>
        <Typography
          variant='h1'
          sx={{ textAlign: 'center' }}
        >
          ShipItOut
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={logo}
          alt='Pug Transport Logo'
        />
      </Box>
      <Box>
        <Typography
          variant='body1'
          sx={{ textAlign: 'center' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          debitis neque unde beatae maxime dolor quis.
        </Typography>
        <Typography
          variant='body2'
          sx={{ textAlign: 'center' }}
        >
          Sunt quia hic modi quod, laboriosam et excepturi quo repellendus
          harum? Praesentium corrupti nulla aperiam. Eveniet architecto,
          distinctio iste facilis adipisci ipsum. Rem, aliquam odio. Soluta
          dolorem laudantium quam iusto delectus architecto eaque pariatur.
        </Typography>
      </Box>
      <ButtonGroup
        variant='contained'
        aria-label='outlined primary button group'
        sx={{ gap: 1, margin: '0 auto' }}
        size='large'
      >
        <Link to='login'>
          <Button>Login</Button>
        </Link>
        <Link to='/register'>
          <Button>Register</Button>
        </Link>
      </ButtonGroup>
    </Box>
  )
}
