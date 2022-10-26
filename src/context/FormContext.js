import React, { createContext, useEffect, useState } from 'react'

import axiosInstance from '../utils/axios'
import { URL } from '../constants/routes'

export const FormContext = createContext(null)

const FormContextProvider = ({ children }) => {
  // TODO memoize data
  const [data, setData] = useState({
    ports: [],
    carriers: [],
    voyages: [],
    booking_statuses: [],
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
      const fetchCarriers = await axiosInstance.get(URL.JUST_CARRIERS)
      const fetchPorts = await axiosInstance.get(URL.PORTS)
      const fetchVoyages = await axiosInstance.get(URL.VOYAGES)
      const fetchBookingStatus = await axiosInstance.get(URL.BOOKING_STATUSES)
      const fetchContainerTypes = await axiosInstance.get(URL.CONTAINER_TYPES)
      const fetchContainerLocations = await axiosInstance.get(
        URL.CONTAINER_LOCATIONS,
      )
      const fetchContainerAvailable = await axiosInstance.get(
        URL.CONTAINERS_AVAILABLE,
      )

      Promise.all([
        fetchCarriers,
        fetchPorts,
        fetchVoyages,
        fetchBookingStatus,
        fetchContainerTypes,
        fetchContainerLocations,
        fetchContainerAvailable,
      ])
        .then(
          ([
            carriers,
            ports,
            voyages,
            statuses,
            containers,
            locations,
            availablity,
          ]) => {
            setData({
              carriers: carriers.data,
              ports: ports.data,
              voyages: voyages.data,
              booking_statuses: statuses.data.booking_status,
              container_types: containers.data.container_type,
              container_locations: locations.data.container_location,
              containers_available: availablity.data,
              isLoading: false,
            })
          },
        )
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
