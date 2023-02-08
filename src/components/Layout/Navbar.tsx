import React, { createRef } from 'react'
import { NavLink } from 'react-router-dom'
import { setIsActive } from '@utils/utility'
import styles from './Navbar.module.css'
import { BurgerMenu } from '../../assets/icons/BurgerMenu'

export const Navbar = (): JSX.Element => {
  const burgerMenuRef = createRef<HTMLUListElement>()
  const handleMenu = (): void => {
    if (burgerMenuRef.current!.style.display === 'flex') {
      burgerMenuRef.current!.style.display = 'none'
    } else {
      burgerMenuRef.current!.style.display = 'flex'
    }
  }

  return (
    <nav className={styles.navbar}>
      <ul ref={burgerMenuRef} className={styles.content}>
        <NavLink className={(status) => setIsActive(status, styles)} to={'/'}>
          Home
        </NavLink>
        <NavLink
          className={(status) => setIsActive(status, styles)}
          to={'hotels'}
        >
          Hotels
        </NavLink>
        <NavLink
          className={(status) => setIsActive(status, styles)}
          to={'activities'}
        >
          Activities
        </NavLink>

        <NavLink
          className={(status) => setIsActive(status, styles)}
          to={'aboutus'}
        >
          About Us
        </NavLink>
        <NavLink
          className={(status) => setIsActive(status, styles)}
          to={'contacts'}
        >
          Contacts
        </NavLink>
      </ul>
      <div className={styles.menu} onClick={handleMenu}>
        <BurgerMenu />
      </div>
    </nav>
  )
}
