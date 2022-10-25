import React, { createContext, useEffect, useState } from 'react'
import axiosInstance from '../utils/axios'

console.log('================ CARRIER CONTEXT CALLED =====')
const CarrierContext = createContext(null)

const CarrierContextProvider = ({ children }) => {
  const [carriers, setCarriers] = useState([])

  useEffect(() => {
    const getCarriers = () => {
      console.log('================ FETCHING CARRIER DATA =====')
      return axiosInstance
        .get('/appusers/just_carriers')
        .then((response) => {
          console.log('+++++++++++in use effect carriers')
          console.log(response.data)
          console.log('++++++++++')
          return response.data
        })
        .then(setCarriers)
        .catch((err) => {
          const msg = 'Error: Could not Fetch Carriers.\n'
          console.error(`${msg}: ${err.response.data}`)
        })
    }

    getCarriers()
  }, [])

  return (
    <CarrierContext.Provider value={carriers}>
      {children}
    </CarrierContext.Provider>
  )
}

export { CarrierContext, CarrierContextProvider }
