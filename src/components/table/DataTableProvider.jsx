import React, { createContext, useState } from 'react'

import axiosInstance from '../../utils/axios'


export const DataTableContext = createContext()

export const DataTableProvider = (props) => {
  const [data, setData] = useState([])

  const getDataTableFor = (endpoint) => {
    return axiosInstance.get(`/${endpoint}`)
      .then(setData)
  }

  return (
    <DataTableContext.Provider
      value={{
        data,
        setData,
        getDataTableFor,
      }}
    >
      {props.children}
    </DataTableContext.Provider>
  )
}
