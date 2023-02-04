import React, { FunctionComponent } from 'react'
import { NavBar } from './NavBar/NavBar'
import styles from './Header.module.css'
import { ImageTitle } from './ImageTitle/ImageTitle'
import { MapMenu } from './MapMenu/MapMenu'

export const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <NavBar />
        <ImageTitle />
        <MapMenu />
      </div>
    </header>
  )
}
