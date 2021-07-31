import React from 'react'

import styles from './Table.module.css'

export const Table = ({ data }) => {
  const columns = data[0] && Object.keys(data[0])

  return (
    <table cellPadding={0} cellSpacing={0} className={styles.table}>
      <thead>
        <tr>{data[0] && columns.map(colHeader => <th key={colHeader}>{colHeader}</th>)}</tr>
      </thead>
      <tbody>
        {
       data.map(rowObj =>
         <tr key={`${rowObj.id} - ${Math.random()}`}>
           {
           columns.map(colHeader => <td key={`${rowObj.id} - ${Math.random()}`}>{rowObj[colHeader]}</td>)
         }
         </tr>)
      }
      </tbody>
    </table>

  )
}
