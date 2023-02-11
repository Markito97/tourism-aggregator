import React, { useState } from 'react'
import styles from './House.module.css'
import { fileUpload } from '../../actions/fileUpload.action'
import { TextFiled } from '../../UI/TextField'

export const HouseForm = () => {
  const [drag, setDrag] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [descirption, setDescription] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [file, setFile] = useState()

  const dragStartHandler = (e: any) => {
    e.preventDefault()
    setDrag(true)
  }

  const dragLeaveHandler = (e: any) => {
    e.preventDefault()
    setDrag(false)
  }

  const onDropHandler = (e: any) => {
    e.preventDefault()
    let files = e.dataTransfer.files
    setFile(files['0'])
    setDrag(false)
  }

  const handleSendData = () => {
    const house = {
      name,
      descirption,
      price,
      location,
    }
    fileUpload(house, file)
  }

  return (
    <div className={styles.houseFormFields}>
      <div className={styles.form}>
        <h1>Adding House</h1>
        <form>
          <TextFiled value={name} onChange={setName} placeholder={'Name'} />
          <TextFiled
            value={descirption}
            onChange={setDescription}
            placeholder={'Descirption'}
          />
          <TextFiled value={price} onChange={setPrice} placeholder={'Price'} />
          <TextFiled
            value={location}
            onChange={setLocation}
            placeholder={'Location'}
          />
        </form>
        <div className={styles.dragContainer}>
          {drag ? (
            <div
              className={styles.drag}
              onDragStart={(e) => dragStartHandler(e)}
              onDragOver={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDrop={(e) => onDropHandler(e)}
            >
              Drop files, to upload them
            </div>
          ) : (
            <div
              className={styles.drop}
              onDragStart={(e) => dragStartHandler(e)}
              onDragOver={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
            >
              Drag files, to upload them
            </div>
          )}
        </div>
      </div>
      <button onClick={handleSendData}>Add a house</button>
    </div>
  )
}
