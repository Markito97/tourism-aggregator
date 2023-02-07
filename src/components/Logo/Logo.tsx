import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Logo.module.css'
import { setIsActive } from '../../utility/utility'

export const Logo = (): JSX.Element => {
  return (
    <NavLink className={(status) => setIsActive(status, styles)} to={'/'}>
      Home
    </NavLink>
  )
}
