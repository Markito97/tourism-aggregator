import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBarLink.module.css'
import { setIsActive } from '../../../../utility/utility'

interface INavBarLink {
  link: string
}

export const NavBarLink: FunctionComponent<INavBarLink> = ({ link }) => {
  const linkLower = link.toLowerCase()
  return (
    <NavLink
      to={`${linkLower}`}
      className={(status) => setIsActive(status, styles)}
    >
      {link}
    </NavLink>
  )
}
