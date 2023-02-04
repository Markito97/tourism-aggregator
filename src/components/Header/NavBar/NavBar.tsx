import React, { FunctionComponent } from 'react'
import { NavBarLogo } from '../NavBarLogo/NavBarLogo'
import { NavBarLinks } from '../NavBarLinks/NavBarLinks'
import styles from './NavBar.module.css'
import { SignIn } from '../SignIn/SignIn'

export const NavBar: FunctionComponent = () => {
  return (
    <nav className={styles.navBar}>
      <NavBarLogo />
      <NavBarLinks />
      <SignIn />
    </nav>
  )
}
