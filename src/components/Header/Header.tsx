import React, { FunctionComponent } from 'react'
import { NavBar } from './NavBar/NavBar'
import styles from './Header.module.css'

export const Header: FunctionComponent = () => {
  return (
    <header>
      <NavBar />
    </header>
  )
}
