import React from 'react'
import { Link } from 'react-router-dom'

import styles from './PageNotFound.module.css'

export const PageNotFound = () => (
  <div className={styles.box}>
    <h1 className={styles.warn}>PageNotFound</h1>
    <Link to='/'>
      <button>Home</button>
    </Link>
  </div>
)
