import React, { createContext, useEffect, useState } from 'react'

console.log('================ CARRIER CONTEXT CALLED =====')
const CarrierContext = createContext(null)

const CarrierContextProvider = ({ children }) => {
  const [carriers, setCarriers] = useState([])

  useEffect(() => {
    const getCarriers = () => {
      console.log('================ FETCHING CARRIER DATA =====')
      fetch(`${process.env.REACT_APP_API}/appusers/just_carriers`, {
        headers: {
          Authorization: `Token ${localStorage.getItem('user_token')}`,
        },
      })
        .then((res) => {
          const data = res.json()
          console.log('+++++++++++in use effect carriers')
          console.log(data)
          console.log('++++++++++')
          return data
        })
        .then(setCarriers)
        .catch((error) => console.log('Error fetching Carriers: ', error))
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
