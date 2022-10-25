import React, { createContext, useState } from 'react'
import axiosInstance from '../utils/axios'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    isAuth: false,
    token: '',
  })

  const login = ({ name, token }) => {
    window.localStorage.setItem('user_token', token)
    setUser((prevState) => ({
      name: name,
      auth: true,
      token: token,
    }))
  }

  const logout = () => {
    window.localStorage.removeItem('user_token')
    setUser((prevState) => ({
      name: '',
      auth: false,
      token: '',
    }))
    axiosInstance.setHeader('Authorization', null)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }
