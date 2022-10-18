import React, { createContext, useEffect, useState } from 'react'
// import { BookingPage1 } from '../components/booking/BookingPage1'

export const PortContext = createContext(null)

export const PortContextProvider = ({ children }) => {
  const [ports, setPorts] = useState([])

  // const getPorts = () => {
  //   return fetch(`${process.env.REACT_APP_API}/ports`, {
  //     headers: {
  //       Authorization: `Token ${localStorage.getItem('user_token')}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then(setPorts)
  // }

  // useEffect(() => {
  //   async function fetchPorts() {
  //     const res = await fetch(`${process.env.REACT_APP_API}/ports`, {
  //       headers: {
  //         Authorization: `Token ${localStorage.getItem('user_token')}`,
  //       },
  //     })
  //     const _ports = res.json()
  //     setPorts(_ports)
  //   }
  //   fetchPorts()
  // }, [])

  useEffect(() => {
    const fetchPorts = () => {
      fetch(`${process.env.REACT_APP_API}/ports`, {
        headers: {
          Authorization: `Token ${localStorage.getItem('user_token')}`,
        },
      })
        .then((res) => res.json())
        .then(setPorts)
        .catch((err) => console.log('Could not fetch ports: ', err))
    }
    fetchPorts()
  }, [])

  // useEffect(() => {
  //   async function fetchPorts() {
  //     const res = await fetch(`${process.env.REACT_APP_API}/ports`, {
  //       headers: {
  //         Authorization: `Token ${localStorage.getItem('user_token')}`,
  //       },
  //     })
  //     const _ports = res.json()
  //     setPorts(_ports)
  //   }
  //   fetchPorts()
  // }, [])

  return (
    <PortContext.Provider
      value={{
        ports,
        // getPorts,
      }}
    >
      {children}
      {/* <BookingPage1 /> */}
    </PortContext.Provider>
  )
}
