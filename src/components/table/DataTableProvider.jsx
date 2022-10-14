import React, { createContext, useState } from 'react'

export const DataTableContext = createContext()

export const DataTableProvider = (props) => {
  const [data, setData] = useState([])

  const getDataTableFor = (endpoint) => {
    return fetch(`${process.env.REACT_APP_API}/${endpoint}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('user_token')}`,
      },
    })
      .then((res) => res.json())
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
