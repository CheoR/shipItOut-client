import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/pugTransport.svg'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.infoBox}>
          <h1 className={styles.title}>ShipItOut</h1>
          <div className={styles.svgContainer}>
            <img
              className={styles.logo}
              src={logo}
              alt='Pug Transport Logo'
            />
          </div>
          <div className={styles.textBox}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              debitis neque unde beatae maxime dolor quis.
            </p>
            <p>
              Sunt quia hic modi quod, laboriosam et excepturi quo repellendus
              harum? Praesentium corrupti nulla aperiam. Eveniet architecto,
              distinctio iste facilis adipisci ipsum. Rem, aliquam odio. Soluta
              dolorem laudantium quam iusto delectus architecto eaque pariatur.
            </p>
          </div>
        </div>
        {/* className={`${styles.description} ${styles.yellow}`} */}

        <div className={styles.buttonBox}>
          <Link to='/login'>
            <button className={`${styles.btn} ${styles.login}`}>Login</button>
          </Link>
          <Link to='/register'>
            <button className={`${styles.btn} ${styles.register}`}>
              Register
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}
