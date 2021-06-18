import React from "react"
import { Add, Delete, Update, View } from "../btn/Button"
import { Footer } from "../footer/Footer"
import { NavBar } from "../nav/NavBar"
import { Table } from "../table/Table"

import styles from "./BookingList.module.css"

export const BookingList = () => {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Bookings</h1>
      <Table />
      <section className={styles.btnList}>
        <Add />
        <View />
        <Update />
        <Delete />
      </section>
      <Footer className={styles.Footer}/>
    </section>
  )
}
