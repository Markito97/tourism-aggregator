import React, { ReactNode } from "react"
import styles from './Button.module.css'

interface ButtonPorps {
    onClick?: () => void
}

export const Button = (props: ButtonPorps, children: ReactNode): JSX.Element => {
    return <button className={styles.btn} onClick={props.onClick}>{children}</button>
}