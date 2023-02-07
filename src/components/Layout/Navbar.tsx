import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import { setIsActive } from '../../utility/utility'
import styles from './Navbar.module.css'

export const Navbar = (): JSX.Element => {
  return (
    <ul className={styles.content}>
      <Logo />
      <NavLink
        className={(status) => setIsActive(status, styles)}
        to={'/hotels'}
      >
        Hotels
      </NavLink>
      <NavLink
        className={(status) => setIsActive(status, styles)}
        to={'/activities'}
      >
        Activities
      </NavLink>

      <NavLink
        className={(status) => setIsActive(status, styles)}
        to={'/aboutus'}
      >
        About Us
      </NavLink>
      <NavLink
        className={(status) => setIsActive(status, styles)}
        to={'/contacts'}
      >
        Contacts
      </NavLink>
    </ul>
  )
}
