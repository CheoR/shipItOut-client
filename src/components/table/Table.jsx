import React from "react"

import styles from "./Table.module.css"


export const Table = () => {
  return (
     <table className={styles.table}>
       <tbody>
        <tr className={styles.tableHeader}>
          <th>Status</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
       </tbody>
</table> 
  )
}