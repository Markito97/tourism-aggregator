import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Logo.module.css'
import { setIsActive } from '../../utility/utility'

interface LogoProps {
  handle?: () => void
}

export const Logo = ({ handle }: LogoProps): JSX.Element => {
  return (
    <NavLink
      className={(status) => setIsActive(status, styles)}
      onClick={handle}
      to={'/'}
    >
      Home
    </NavLink>
  )
}
