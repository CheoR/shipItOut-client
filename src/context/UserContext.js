import React, { createContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UserContext = createContext(null)

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState({
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  useEffect(() =>{
    const getToken = () => localStorage.getItem(key)

    getToken()
  }, [])

  return (
    <UserContext.Provider value={{
      token,
      setToken
    }}
    >
      { children }
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}