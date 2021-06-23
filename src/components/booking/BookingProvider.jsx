import React, { createContext } from "react"


const BookingContext = createContext()


export const BookingProvider = ( props ) => {

  return (
   <BookingContext.Provider value={{

   }}>
    {{ props.children }}
   </BookingContext.Provider>
  )
}