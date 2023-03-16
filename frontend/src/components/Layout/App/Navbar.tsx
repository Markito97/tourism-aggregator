import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { setIsActive } from '@utils/utility';
import { BurgerMenu } from '../../../assets/icons/BurgerMenu';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Cross } from '../../../assets/icons/Cross';
import styles from './Navbar.module.css';

const navigationLinks = [
  { text: 'Home', path: '/' },
  { text: 'Houses', path: 'houses' },
];

export const Navbar = (): JSX.Element => {
  const { width } = useWindowDimensions();
  const [isBurger, setIsBurger] = useState<boolean>(false);

  useEffect(() => {
    if (width > 767.98) {
      setIsBurger(false);
    }
  }, [width]);

  const handelOpen = (): void => {
    setIsBurger(!isBurger);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={isBurger ? styles.burger : styles.navigation}>
        {navigationLinks.map((link) => {
          return (
            <NavLink
              key={link.text}
              to={link.path}
              className={(status) => {
                return setIsActive(status, styles);
              }}
              onClick={() => {
                setIsBurger(false);
              }}
            >
              {link.text}
            </NavLink>
          );
        })}
      </ul>

      <div className={styles.navigationBurger} onClick={handelOpen}>
        {isBurger ? <Cross /> : <BurgerMenu />}
      </div>
    </nav>
  );
};
