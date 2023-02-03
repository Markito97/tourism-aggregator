import React, { FunctionComponent } from 'react'
import { NavBarLogo } from '../NavBarLogo/NavBarLogo'
import { NavBarLinks } from '../NavBarLinks/NavBarLinks'
import { NavBarMenu } from '../NavBarMenu/NavBarMenu'
import styles from './NavBar.module.css'

export const NavBar: FunctionComponent = () => {
  return (
    <nav className={styles.navBar}>
      <NavBarLogo />
      <NavBarLinks />
      <NavBarMenu />
    </nav>
  )
}
