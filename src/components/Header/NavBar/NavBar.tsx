import React from 'react'
import { NavBarLinks } from './NavBarLinks/NavBarLinks'
import styles from './NavBar.module.css'

interface NavBarProps {
  handle: () => void
}

export const NavBar = ({ handle }: NavBarProps): JSX.Element => {
  return (
    <nav className={styles.navBar}>
      <NavBarLinks />
    </nav>
  )
}
