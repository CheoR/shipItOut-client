import React from 'react'

import { MdViewAgenda } from 'react-icons/md'

import { PageNotFound } from '../helpers/PageNotFound'
import { DataTable } from '../table/DataTable'

import styles from './ContainerList.module.css'

export const ContainerList = () => {
  const token = localStorage.getItem('user_token')
  return token ? (
    <div className={styles.container}>
      <DataTable
        endpoint='containers'
        Icon={MdViewAgenda}
      />
    </div>
  ) : (
    <PageNotFound />
  )
}
