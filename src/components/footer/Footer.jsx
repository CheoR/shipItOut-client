import React from 'react'

import { FaGithubSquare, FaLinkedin, FaFreeCodeCamp, FaCodepen } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <>
      <footer className={styles.footie}>
        <ul className={styles.iconList}>
          <a href='https://cheor.github.io/portfolio/'>  <button className={styles.btn}><CgProfile className={styles.icon} /></button></a>
          <a href='https://github.com/CheoR'>            <button className={styles.btn}><FaGithubSquare className={styles.icon} /></button></a>
          <a href='https://www.linkedin.com/'>           <button className={styles.btn}><FaLinkedin className={styles.icon} /></button></a>
          <a href='https://www.freecodecamp.org/cheor'>  <button className={styles.btn}><FaFreeCodeCamp className={styles.icon} /></button></a>
          <a href='https://codepen.io/CheoR/full/QzPJbQ'><button className={styles.btn}><FaCodepen className={styles.icon} /></button></a>
        </ul>
        <aside className={styles.copy}>&copy; CheoR 2001</aside>
      </footer>
    </>
  )
}
