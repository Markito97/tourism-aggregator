import React from 'react'
import styles from './TextField.module.css'

interface ITextFieldProps {
  value: string
  placeholder: string
  onChange?: (value: string) => void
}

export const TextFiled = (props: ITextFieldProps) => {
  return (
    <input
      value={props.value}
      className={styles.textField}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e.target.value)}
    />
  )
}
