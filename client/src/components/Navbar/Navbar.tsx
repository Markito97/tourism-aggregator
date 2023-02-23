import { createRef } from 'react'
import { NavLink } from 'react-router-dom'
import { setIsActive } from '@utils/utility'
import styles from './Navbar.module.css'
import { BurgerMenu } from '../../assets/icons/BurgerMenu'

const navigationLinks = [
  { text: 'Home', path: '/' },
  { text: 'Hotels', path: 'hotels' },
  { text: 'Activities', path: 'activities' },
  { text: 'About Us', path: 'aboutus' },
  { text: 'Contacts', path: 'contacts' },
]

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
      <ul ref={burgerMenuRef} className={styles.navigation}>
        {navigationLinks.map((link) => (
          <NavLink
            key={link.text}
            to={link.path}
            className={(status) => setIsActive(status, styles)}
          >
            {link.text}
          </NavLink>
        ))}
      </ul>
      <div className={styles.navigationBurger} onClick={handleMenu}>
        <BurgerMenu />
      </div>
    </nav>
  )
}
