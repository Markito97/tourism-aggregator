import React, { FunctionComponent } from 'react'
import { NavBarLink } from '../NavBarLink/NavBarLInk'
import styles from './NavBarLinks.module.css'
import { Logo } from '../../../Logo/Logo'

const navBarLinks = ['Hotels', 'Activities', 'About Us', 'Contact', 'Menu']

export const NavBarLinks: FunctionComponent = () => {
  return (
    <ul className={styles.links}>
      <Logo />
      {navBarLinks.map((link) => (
        <NavBarLink key={link} link={link} />
      ))}
    </ul>
  )
}
