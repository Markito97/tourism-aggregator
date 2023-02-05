import React, { FunctionComponent } from 'react'
import classes from './NavBarLink.module.css'
import { Link } from 'react-router-dom'

interface INavBarLink {
  link: string
}

export const NavBarLink: FunctionComponent<INavBarLink> = ({ link }) => {
  const linkLower = link.toLowerCase()
  return (
    <Link to={`${linkLower}`} className={classes.navLink}>
      {link}
    </Link>
  )
}
