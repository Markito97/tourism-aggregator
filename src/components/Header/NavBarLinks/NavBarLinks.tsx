import React, { FunctionComponent } from 'react'
import { NavBarLink } from '../NavBarLink/NavBarLInk'
import styles from './NavBarLinks.module.css'

const navBarLinks = ['Destinations', 'Activities', 'About Us', 'Contact']

export const NavBarLinks: FunctionComponent = () => {
  return (
    <ul className={styles.links}>
      {navBarLinks.map((link) => (
        <NavBarLink key={link} link={link} />
      ))}
    </ul>
  )
}
