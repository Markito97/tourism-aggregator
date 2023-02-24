import { createRef, useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { setIsActive } from '@utils/utility'
import styles from './Navbar.module.css'
import { BurgerMenu } from '../../assets/icons/BurgerMenu'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { Cross } from '../../assets/icons/Cross'

const navigationLinks = [
  { text: 'Home', path: '/' },
  { text: 'Hotels', path: 'hotels' },
  { text: 'Activities', path: 'activities' },
  { text: 'About Us', path: 'aboutus' },
  { text: 'Contacts', path: 'contacts' },
]

export const Navbar = (): JSX.Element => {
  const { width, height } = useWindowDimensions()
  const [isBurger, setIsBurger] = useState<boolean>(false)

  useEffect(() => {
    if (width > 767.98) {
      setIsBurger(false)
    }
  }, [width])

  const handelOpen = (): void => {
    setIsBurger(!isBurger)
  }

  return (
    <nav className={styles.navbar}>
      <ul className={isBurger ? styles.burger : styles.navigation}>
        {navigationLinks.map((link) => (
          <NavLink
            key={link.text}
            to={link.path}
            className={(status) => setIsActive(status, styles)}
            onClick={() => {
              setIsBurger(false)
            }}
          >
            {link.text}
          </NavLink>
        ))}
      </ul>

      <div className={styles.navigationBurger} onClick={handelOpen}>
        {isBurger ? <Cross /> : <BurgerMenu />}
      </div>
    </nav>
  )
}
function useCotext(): { houses: any } {
  throw new Error('Function not implemented.')
}
