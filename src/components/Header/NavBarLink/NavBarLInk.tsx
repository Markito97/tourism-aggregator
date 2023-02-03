import React, { FunctionComponent } from 'react'
import classes from './NavBarLink.module.css'

interface INavBarLink {
  link: string
}

export const NavBarLink: FunctionComponent<INavBarLink> = ({ link }) => {
  return <li className={classes.navLink}>{link}</li>
}
