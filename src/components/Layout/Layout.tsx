import React, { useEffect, useState } from 'react'
import { Titles } from '../Titles/Titles'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import styles from './Layout.module.css'
import { Footer } from './Footer'

const headerTitles = {
  title: 'Norway',
  subTitle: 'Explore',
  className: 'imageContent',
}

export const Layout = (): JSX.Element => {
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
          <Navbar />
          <div className={styles.titleContainer}>
            {isShow && <Titles titles={headerTitles} />}
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <Footer />
        </div>
      </footer>
    </div>
  )
}
