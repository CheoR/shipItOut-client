import React from 'react'
import { Box, Button, ButtonGroup, Typography } from '@mui/material'

import {
  FaGithubSquare,
  FaLinkedin,
  FaFreeCodeCamp,
  FaCodepen,
} from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

export const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <ButtonGroup
        variant='outlined'
        aria-label='outlined button group'
        sx={{ gap: 1 }}
      >
        <a
          href='https://cheor.github.io/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>
            <CgProfile />
          </Button>
        </a>
        <a
          href='https://github.com/CheoR'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>
            <FaGithubSquare />
          </Button>
        </a>
        <a
          href='https://www.linkedin.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>
            <FaLinkedin />
          </Button>
        </a>
        <a
          href='https://www.freecodecamp.org/cheor'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>
            <FaFreeCodeCamp />
          </Button>
        </a>
        <a
          href='https://codepen.io/CheoR/full/QzPJbQ'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>
            <FaCodepen />
          </Button>
        </a>
      </ButtonGroup>
      <Typography
        variant='subtitle1'
        sx={{ textAlign: 'center' }}
      >
        &copy; CheoR 2020
      </Typography>
    </Box>
  )
}
