import React from 'react'
import styles from './TextField.module.css'

interface ITextFieldProps {
  value: string
  placeholder: string
  lable?: string
  error?: boolean
  objKey: any
  onChange?: (value: any) => void
}

export const TextFiled = (props: ITextFieldProps) => {
  return (
    <div>
      <label htmlFor="">{props.lable}</label>
      <input
        value={props.value}
        className={styles.textField}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange({ [props.objKey]: e.target.value })}
      />
      {props.error && <p>Opa</p>}
    </div>
  )
}
