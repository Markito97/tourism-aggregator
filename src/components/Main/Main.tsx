import { Activities } from './Activities/Activities'
import styles from './Main.module.css'
import { Hotels } from './Hotels/Hotels'
import React from 'react'

export const Main = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <div className="container">
        <Activities />
        <Hotels />
      </div>
    </main>
  )
}
