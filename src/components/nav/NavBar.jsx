import React, { useContext, useEffect, useState } from 'react'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import { Link } from '@mui/material'
import Box from '@mui/material/Box'

import { loggedInPages, loggedOutPages, settings } from '../../constants/pages'
import { UserContext } from '../../context/UserContext'
import logo from '../../assets/images/pugTransport.svg'
import { URL } from '../../constants/routes'


export const NavBar = () => {
  const { user: { token }, logout } = useContext(UserContext)
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const navigateTo = useNavigate()
  const location = useLocation()

  const url = location.pathname

  useEffect(() => {
    // rerender navbar when user logs in/out
  }, [url, token])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = (e) => {
    if (e.target.textContent.toLowerCase() === 'logout') {
      logoutUser()
      setAnchorElNav(null)
    } else {
      setAnchorElNav(null)
    }
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  
  const logoutUser = () => {
    logout()
    navigateTo(URL.HOME)
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img
              src={logo}
              alt='Pug TransportLogo'
              style={{ height: 30, width: 30 }}
            />
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ShipItOut
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            {/* below for smaller screens */}
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {token
                ? loggedInPages.map((page) => (
                    <MenuItem
                      key={page.page}
                      onClick={handleCloseNavMenu}
                      sx={[
                        {
                          '&:hover': {
                            backgroundColor: 'gray',
                          },
                        },
                      ]}
                    >
                      <Link
                        component={RouterLink}
                        to={`/${page.link}`}
                        underline='none'
                      >
                        <Typography
                          textAlign='center'
                          sx={{
                            color: 'black',
                          }}
                        >
                          {page.page}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))
                : loggedOutPages.map((page) => (
                    <MenuItem
                      key={page.page}
                      onClick={handleCloseNavMenu}
                      sx={[
                        {
                          '&:hover': {
                            backgroundColor: 'gray',
                          },
                        },
                      ]}
                    >
                      <Link
                        component={RouterLink}
                        to={`/${page.link}`}
                        underline='none'
                      >
                        <Typography
                          textAlign='center'
                          sx={{
                            color: 'black',
                          }}
                        >
                          {page.page}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img
              src={logo}
              alt='Pug TransportLogo'
              style={{ height: 30, width: 30 }}
            />
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ShipItOut
          </Typography>
          {/* for larger screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            {token
              ? loggedInPages.map((page) => (
                  <Link
                    key={page.page}
                    component={RouterLink}
                    to={`/${page.link}`}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page.page}
                    </Button>
                  </Link>
                ))
              : loggedOutPages.map((page) => (
                  <Link
                    key={page.page}
                    component={RouterLink}
                    to={`/${page.link}`}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page.page}
                    </Button>
                  </Link>
                ))}
          </Box>

          {token && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <Avatar
                    alt='ShipItOut'
                    src='/static/images/avatar/2.jpg'
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.setting}
                    onClick={handleCloseUserMenu}
                  >
                    <Link
                      component={RouterLink}
                      to={`/${setting.link}`}
                      underline='none'
                    >
                      <Button
                        key={setting.setting}
                        onClick={handleCloseNavMenu}
                        sx={[
                          { my: 2, color: 'black', display: 'block' },
                          { '&:hover': { background: 'blue' } },
                        ]}
                      >
                        <Typography textAlign='center'>
                          {setting.setting}
                        </Typography>{' '}
                      </Button>
                    </Link>
                  </MenuItem>
                ))}
                {/* <Button
                  key='logout'
                  onClick={logoutUser}
                  sx={[
                    { my: 2, color: 'black', display: 'block', width: '100%' },
                    { '&:hover': { background: 'red' } },
                  ]}
                >
                  <Typography>Logout</Typography>{' '}
                </Button> */}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
