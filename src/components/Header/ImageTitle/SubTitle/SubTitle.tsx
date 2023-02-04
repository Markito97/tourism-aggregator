import React, { ReactNode } from 'react'
import styles from './SubTitle.module.css'

interface SubTitleProps {
  children: ReactNode
}

export const SubTitle = ({ children }: SubTitleProps): JSX.Element => {
  return <h6 className={styles.subTitle}>{children}</h6>
}
