import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import { setIsActive } from '@utils/utility'

export const Footer = (): JSX.Element => {
  return (
    <div className={styles.content}>
      <NavLink
        className={(status) => setIsActive(status, styles)}
        to={'/partnership'}
      >
        Partnership
      </NavLink>
      <NavLink
        className={(status) => setIsActive(status, styles)}
        to={'/rules'}
      >
        Residence Rules
      </NavLink>
      <NavLink className={(status) => setIsActive(status, styles)} to={'/get'}>
        How to get there
      </NavLink>
      <NavLink
        className={(status) => setIsActive(status, styles)}
        to={'/contact'}
      >
        Contact
      </NavLink>
      <NavLink
        className={(status) => setIsActive(status, styles)}
        to={'/policy'}
      >
        Privacy policy
      </NavLink>
    </div>
  )
}
