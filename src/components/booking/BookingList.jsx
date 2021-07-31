import React from 'react'

import { BiNews } from 'react-icons/bi'

import { PageNotFound } from '../helpers/PageNotFound'
import { DataTable } from '../table/DataTable'

import styles from './BookingList.module.css'

export const BookingList = () => {
  const token = localStorage.getItem('user_token')
  return (

    token
      ? <div className={styles.booking}><DataTable endpoint='bookings' Icon={BiNews} /></div>
      : <PageNotFound />
  )
}
