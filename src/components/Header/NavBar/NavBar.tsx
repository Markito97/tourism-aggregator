import React, { FunctionComponent } from 'react'
import { NavBarLinks } from './NavBarLinks/NavBarLinks'
import styles from './NavBar.module.css'
import { Logo } from '../../Logo/Logo'
import { SignIn } from './SignIn/SignIn'

interface NavBarProps {
  handle: () => void
}

export const NavBar = ({ handle }: NavBarProps): JSX.Element => {
  return (
    <nav className={styles.navBar}>
      <Logo handle={handle} />
      <NavBarLinks />
      <SignIn />
    </nav>
  )
}
