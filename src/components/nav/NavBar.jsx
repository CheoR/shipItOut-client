import { Box } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/images/pugTransport.svg'
import styles from './NavBar.module.css'

export const NavBar = () => {
  const location = useLocation()
  const url = location.pathname
  let token = localStorage.getItem('user_token')

  useEffect(() => {
    // rerender navbar when user logs in/out
    // console.log(`current url: ${url}`)
  }, [url])

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      background: "red",
      border: "2px solid black",}}>
     {/* <div className={styles.navbar}> */}
      <div className={styles.imgContainer}>
        <img
          src={logo}
          className={styles.img}
          alt='Pug TransportLogo'
        />
      </div>
      <ul className={styles.ulList}>
        <li className={styles.navBarItem}>
          <Link
            className={styles.navLink}
            to={`${token ? '/bookings' : '/'}`}
          >
            <button className={styles.navLinkBtn}>Home</button>
          </Link>
        </li>
        {token ? (
          <>
            <li className={styles.navBarItem}>
              <Link
                className={styles.navLink}
                to='/bookings'
              >
                <button className={styles.navLinkBtn}>Bookings</button>
              </Link>
            </li>
            <li className={styles.navBarItem}>
              <Link
                className={styles.navLink}
                to='/containers'
              >
                <button className={styles.navLinkBtn}>Containers</button>
              </Link>
            </li>
            <li className={styles.navBarItem}>
              <Link
                className={styles.navLink}
                to='/products'
              >
                <button className={styles.navLinkBtn}>Products</button>
              </Link>
            </li>
            <li className={styles.navBarItem}>
              <Link
                className={styles.navLink}
                to='/'
              >
                <button
                  className={styles.navLinkBtn}
                  onClick={() => {
                    localStorage.removeItem('user_token')
                  }}
                >
                  Logout
                </button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className={styles.navBarItem}>
              <Link
                className={styles.navLink}
                to='/login'
              >
                <button className={styles.navLinkBtn}>Login</button>
              </Link>
            </li>
            <li className={styles.navBarItem}>
              <Link
                className={styles.navLink}
                to='/register'
              >
                <button className={styles.navLinkBtn}>Register</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    {/* </div> */}
        </Box>

  )
}
