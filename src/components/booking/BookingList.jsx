import React, { useEffect, useState } from "react"
import { Add, Delete, Update, View } from "../btn/Button"
import { Table } from "../table/Table"

import styles from "./BookingList.module.css"

export const BookingList = () => {
  const token = 'a21c520dfc25fa2764ffdb1c4d8db69e6b0df117'

  const [data, setData] = useState([])
  const [query, setQuery] = useState("")
  const [colToSearch, setColToSearch] = useState(["booking", "notes"])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/bookings', {
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        // stupid nulls
        // fix nulls for search until you fix it on the backend
        const columns = res[0] && Object.keys(res[0])

        columns.forEach(col => {
          res.forEach(row => {
            if (row[col] === null) {
              row[col] = ''
            }
          })
        })
        setData(res)
      })

  }, [])

  const search = ( rows ) => {
    return rows.filter(row => colToSearch.some(col => row[col].toString().toLowerCase().indexOf(query.toLowerCase()) > -1))
  }

  const columns = data[0] && Object.keys(data[0])
  return (

    <section className={styles.page}>
      <h1 className={styles.title}>Bookings</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      {
        columns && columns.map(header => 
          <label key={header}>
            <input type="checkbox" checked={colToSearch.includes(header)} onChange={(e) => { 
              const checked = colToSearch.includes(header)
              setColToSearch(prev => checked
                ? prev.filter(searchCol => searchCol !== header)
                : [...prev, header]
              )
            }}  />
            {header}
          </label>)
      }
      <Table data={search(data)}/>
      <section className={styles.btnList}>
        <Add />
        <View />
        <Update />
        <Delete />
      </section>
    </section>
  )
}
