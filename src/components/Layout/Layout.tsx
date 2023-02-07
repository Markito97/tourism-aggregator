import React, { ReactNode, useEffect, useState } from 'react'
import { Titles } from '../Titles/Titles'
import { useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import styles from './Layout.module.css'
import { Footer } from './Footer'

const headerTitles = {
  title: 'Norway',
  subTitle: 'Explore',
  className: 'imageContent',
}

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const location = useLocation()
  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsShow(false)
    } else {
      setIsShow(true)
    }
  }, [location])

  return (
    <div className={styles.wrapper}>
      <header className={isShow ? styles.active : styles.inactive}>
        <div className={styles.container}>
          <nav>
            <Navbar />
            {isShow && <Titles titles={headerTitles} />}
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <footer>
        <div className={styles.container}>
          <Footer />
        </div>
      </footer>
    </div>
  )
}
