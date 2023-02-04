import React, { ReactNode } from 'react'
import styles from './MainTitle.module.css'

interface MainTitleProps {
  children: ReactNode
}

export const MainTitle = ({ children }: MainTitleProps): JSX.Element => {
  return <h1 className={styles.mainTitle}>{children}</h1>
}
