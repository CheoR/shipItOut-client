import React from "react"

import { GrCubes } from "react-icons/gr"

import { PageNotFound } from "../helpers/PageNotFound"
import { DataTable } from "../table/DataTable"

import styles from "./ProductList.module.css"

export const ProductList = () => {

  const token = localStorage.getItem("user_token")
  return (
    token
      ?
        <div className={styles.product}><DataTable endpoint="products" Icon={GrCubes}/></div>
      :
        <PageNotFound />
  )
}
