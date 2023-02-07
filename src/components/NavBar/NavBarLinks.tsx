import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBarLinks.module.css'
import { Logo } from '../Logo/Logo'
import { setIsActive } from '../../utility/utility'

interface NavBarLinksProps {
  handle: (path: string) => void
}

export const NavBarLinks = ({ handle }: NavBarLinksProps): JSX.Element => {
  return (
    <ul className={styles.links}>
      <Logo />
      <NavLink
        onClick={() => {
          handle('Hotels')
        }}
        className={(status) => setIsActive(status, styles)}
        to={'/hotels'}
      >
        Hotels
      </NavLink>
      <NavLink
        onClick={() => {
          handle('activities')
        }}
        className={(status) => setIsActive(status, styles)}
        to={'/activities'}
      >
        Activities
      </NavLink>

      <NavLink
        onClick={() => {
          handle('aboutus')
        }}
        className={(status) => setIsActive(status, styles)}
        to={'/aboutus'}
      >
        About Us
      </NavLink>
      <NavLink
        onClick={() => {
          handle('contacts')
        }}
        className={(status) => setIsActive(status, styles)}
        to={'/contacts'}
      >
        Contacts
      </NavLink>
    </ul>
  )
}
