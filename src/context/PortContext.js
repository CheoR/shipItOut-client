import React, { createContext, useEffect, useState } from 'react'
import axiosInstance from '../utils/axios'
// import { BookingPage1 } from '../components/booking/BookingPage1'

export const PortContext = createContext(null)

export const PortContextProvider = ({ children }) => {
  const [ports, setPorts] = useState([])

  useEffect(() => {
    const fetchPorts = () => {
      return axiosInstance
        .get('/ports')
        .then(setPorts)
        .catch((err) => {
          const msg = 'Error: Could not Fetch Ports.\n'
          console.error(`${msg}: ${err.response.data}`)
        })
    }
    fetchPorts()
  }, [])

  // useEffect(() => {
  //   async function fetchPorts() {
  //     const response = await axiosInstance.get('/ports').catch((err) => {
  //       const msg = 'Error: Could not Fetch Ports.\n'
  //       console.error(`${msg}: ${err.response.data}`)
  //     })
  //     setPorts(response.data)
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
