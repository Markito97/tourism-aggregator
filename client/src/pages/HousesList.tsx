import React, { useState } from 'react'
import styles from './HousesList.module.css'
import { HouseForm } from '../components/HouseForm/HouseForm'

export const HousesList = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className={styles.container}>
      <div style={{ paddingTop: '35px' }}>Houses List</div>
      <div className={styles.list}>
        <div style={{ paddingLeft: '180px', paddingRight: '180px' }}>
          <div className={styles.listItem}>
            <div>1</div>
            <div>Название</div>
            <div>Локация</div>
            <div>Описание</div>
            <div>Цена</div>
            <div>X</div>
          </div>
        </div>
        <div style={{ paddingLeft: '180px', paddingRight: '180px' }}>
          <div className={styles.listItem}>
            <div>1</div>
            <div>Название</div>
            <div>Локация</div>
            <div>Описание</div>
            <div>Цена</div>
            <div>X</div>
          </div>
        </div>
        <div style={{ paddingLeft: '180px', paddingRight: '180px' }}>
          <div className={styles.listItem}>
            <div>1</div>
            <div>Название</div>
            <div>Локация</div>
            <div>Описание</div>
            <div>Цена</div>
            <div>X</div>
          </div>
        </div>
        <div style={{ paddingLeft: '180px', paddingRight: '180px' }}>
          <button>Add new Houses</button>
        </div>
      </div>
      <HouseForm />
    </div>
  )
}
