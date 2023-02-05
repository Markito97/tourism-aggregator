import React, { ReactNode } from 'react'
import { ArrowBack } from '../../../assets/icons/ArrowBack'
import { ArrowNext } from '../../../assets/icons/ArrowNext'
import styles from './SliderButton.module.css'

interface SliderButtonProps {
  children: ReactNode
  onClick: () => void
}

export const SliderButton = ({
  children,
  onClick,
}: SliderButtonProps): JSX.Element => {
  return (
    <div
      className={children === 'BACK' ? styles.arrowPrev : styles.arrowNext}
      onClick={onClick}
    >
      {children === 'BACK' ? <ArrowBack /> : <ArrowNext />}
      <span className={children === 'BACK' ? styles.textBack : styles.textNext}>
        {children}
      </span>
    </div>
  )
}
