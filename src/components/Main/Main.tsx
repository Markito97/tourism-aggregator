import React from 'react'

import styles from './Main.module.css'
import { Activities } from './Activities/Activities'
import { Hotels } from './Hotels/Hotels'

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
