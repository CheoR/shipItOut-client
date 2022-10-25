import React, { useContext } from 'react'

import { GrCubes } from 'react-icons/gr'

import { UserContext } from '../../../context/UserContext'
import { DataTable } from '../../table/DataTable'
import { PageNotFound } from '../PageNotFound'

import styles from './ProductList.module.css'


export const ProductList = () => {
  const { user: { token } } = useContext(UserContext)
  return token ? (
    <div className={styles.product}>
      <DataTable
        endpoint='products'
        Icon={GrCubes}
      />
    </div>
  ) : (
    <PageNotFound />
  )
}
