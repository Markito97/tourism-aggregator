import React from 'react'
import { NavLink } from 'react-router-dom'
import { setIsActive } from '@utils/utility'
import styles from './Navbar.module.css'

export const Navbar = (): JSX.Element => {
  return (
    <ul className={styles.content}>
      <NavLink className={(status) => setIsActive(status, styles)} to={'/'}>
        Home
      </NavLink>
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
