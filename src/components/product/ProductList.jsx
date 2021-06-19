import React, { useEffect, useState } from "react"
import { Add, Delete, Update, View } from "../btn/Button"
import { PageNotFound } from "../helpers/PageNotFound"
import { Table } from "../table/Table"

import styles from "./ProductList.module.css"

export const ProductList = () => {

  const token = localStorage.getItem("user_token")
  const [data, setData] = useState([])
  const [query, setQuery] = useState("")
  const [colToSearch, setColToSearch] = useState(["commodity"])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products', {
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        // stupid nulls
        // fix nulls for search until you fix it on the backend
        console.table(res)
        const columns = res[0] && Object.keys(res[0])

        columns.forEach(col => {
          res.forEach(row => {
            console.log(`row[col]: ${row[col]} === null => ${row[col] === null}`)
            if (row[col] === null) {
              row[col] = ''
              console.log(`\n\t\t ==>  now row[col] is ${row[col]}`)
            }
          })
        })
        setData(res)
      })
      .catch(err => {
        {console.log(`some error: ${err}`)}
      })

  }, [ ])

  const search = ( rows ) => {
    return rows.filter(row => colToSearch.some(col => row[col].toString().toLowerCase().indexOf(query.toLowerCase()) > -1))
  }

  const columns = data[0] && Object.keys(data[0])
  return (

    token
    
      ?
        <section className={styles.page}>
          <h1 className={styles.title}>Products</h1>
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
      :
        <PageNotFound />
    
  )
}
