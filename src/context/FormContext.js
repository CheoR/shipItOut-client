import React, { createContext, useEffect, useState } from 'react'

import axiosInstance from '../utils/axios'

export const FormContext = createContext(null)

const FormContextProvider = ({ children }) => {
  // TODO memoize data
  const [data, setData] = useState({
    ports: [],
    carriers: [],
    voyages: [],
    isLoading: false,
  })

  useEffect(() => {
    // const fetchCarriers = () => axiosInstance.get('/appusers/just_carriers')
    // const fetchPorts = () => axiosInstance.get('/ports')
    // const fetchVoyages = () => axiosInstance.get('/voyages')

    const fetchData = async () => {
      // try {
      //   const carriers = await fetchCarriers()
      //   const ports = await fetchPorts()
      //   const voyages = await fetchVoyages()

      //   setData({
      //     carriers: carriers.data,
      //     ports: ports.data,
      //     voyages: voyages.data,
      //     isLoading: false,
      //   })
      // } catch (err) {
      //   const msg = `Error: could not fetch promise data.\n`
      //   if (err.response) {
      //     // Not in 200 response range
      //     console.error(`${msg}\n `, err.response.data)
      //   }
      // }
      const fetchCarriers = await axiosInstance.get('/appusers/just_carriers')
      const fetchPorts = await axiosInstance.get('/ports')
      const fetchVoyages = await axiosInstance.get('/voyages')

      Promise.all([fetchCarriers, fetchPorts, fetchVoyages])
        .then(([carriers, ports, voyages]) => {
          setData({
            carriers: carriers.data,
            ports: ports.data,
            voyages: voyages.data,
            isLoading: false,
          })
        })
        .catch((err) => {
          const msg = `Error: could not fetch promise data.\n`
          if (err.response) {
            // Not in 200 response range
            console.error(`${msg}\n `, err.response.data)
          }
        })
    }

    setData({
      ...data,
      isLoading: true,
    })
    fetchData()
    setData({
      ...data,
      isLoading: false,
    })
  }, [])

  return (
    <FormContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormContextProvider
