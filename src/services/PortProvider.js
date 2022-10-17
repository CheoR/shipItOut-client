import React, { createContext, useState } from 'react'

export const PortContext = createContext()

export const PortProvider = (props) => {
  const [ports, setPorts] = useState([])

  const getPorts = () => {
    return fetch(`${process.env.REACT_APP_API}/ports`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('user_token')}`,
      },
    })
      .then((res) => {
        const p = res.json()
        console.log('after fetching ports ')
        console.log(p)
      })
      .then(setPorts)
  }

  //  useEffect(() => {
  //    async function fetchPorts() {
  //      const res = await fetch(`${process.env.REACT_APP_API}/ports`, {
  //        headers: {
  //          Authorization: `Token ${localStorage.getItem('user_token')}`,
  //        },
  //      })
  //      const _ports = res.json()
  //      setPorts(_ports)
  //    }
  //    fetchPorts()
  //  }, [])

  return (
    <PortContext.Provider
      value={{
        ports,
        getPorts,
      }}
    >
      {props.children}
    </PortContext.Provider>
  )
}
