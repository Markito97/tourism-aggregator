import React, { FunctionComponent } from 'react'
import { NavBar } from './NavBar/NavBar'
import styles from './Header.module.css'
import { MapMenu } from './MapMenu/MapMenu'
import { Titles } from '../Titles/Titles'

const headerTitles = {
  title: 'Norway',
  subTitle: 'Explore',
  className: 'imageContent',
}

export const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <NavBar />
        <Titles titles={headerTitles} />
        <MapMenu />
      </div>
    </header>
  )
}
