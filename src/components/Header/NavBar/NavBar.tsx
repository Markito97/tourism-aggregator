import React, { FunctionComponent } from 'react'
import { NavBarLinks } from './NavBarLinks/NavBarLinks'
import styles from './NavBar.module.css'
import { SignIn } from '../SignIn/SignIn'
import { Logo } from '../../Logo/Logo'

export const NavBar: FunctionComponent = () => {
  return (
    <nav className={styles.navBar}>
      <Logo />
      <NavBarLinks />
      <SignIn />
    </nav>
  )
}
