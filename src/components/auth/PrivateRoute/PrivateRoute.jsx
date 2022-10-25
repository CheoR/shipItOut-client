import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'

const PrivateRoute = () => {
  const { user: { token } } = useContext(UserContext)
  const location = useLocation()
  return (
    token ? <Outlet /> : <Navigate to="/login" replace={true} state={{ from: location }} />
  )
}

export default PrivateRoute
