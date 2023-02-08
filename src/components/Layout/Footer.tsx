import React from 'react'
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'

export const Footer = (): JSX.Element => {
  return (
    <div className={styles.content}>
      <NavLink to={'/partnership'}>Partnership</NavLink>
      <NavLink to={'/rules'}>Residence Rules</NavLink>
      <NavLink to={'/get'}>How to get there</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
      <NavLink to={'/policy'}>Privacy policy</NavLink>
    </div>
  )
}
