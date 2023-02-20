import React from 'react'
import styles from './House.module.css'
import { useForm } from 'react-hook-form'
import { useFileDrop } from '../../hooks/useFileDrop'

export const HouseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [
    dragStartHandler,
    dragLeaveHandler,
    onDropHandler,
    imagesPreviews,
    files,
  ] = useFileDrop()

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
  }

  console.log(files)

  return (
    <div className={styles.houseFormFields}>
      <h1>Adding House</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formItem}>
          <label className={styles.textLable}>Name</label>
          <input
            className={styles.textField}
            placeholder="Name"
            {...register('name', {
              required: 'This is required.',
              minLength: {
                value: 5,
                message: 'Minimum 5 characters',
              },
            })}
          />
          {errors?.name && (
            <p className={styles.error}>{errors.name?.message}</p>
          )}
        </div>
        <div className={styles.formItem}>
          <label className={styles.textLable}>Description</label>
          <textarea
            className={styles.textarea}
            placeholder="Description"
            {...register('description', {
              required: 'This is required.',
              maxLength: {
                value: 300,
                message: 'Maximum 300 characters',
              },
            })}
          ></textarea>
          {errors?.description && (
            <p className={styles.error}>{errors.description?.message}</p>
          )}
        </div>

        <div className={styles.formItem}>
          <label className={styles.textLable}>Price</label>
          <input
            className={styles.textField}
            placeholder="price"
            {...register('price', {
              required: 'This is required.',
            })}
          />
          {errors?.price && (
            <p className={styles.error}>{errors.price?.message}</p>
          )}
        </div>

        <div className={styles.formItem}>
          <label className={styles.textLable}>Location</label>
          <input
            className={styles.textField}
            placeholder="Location"
            {...register('location', {
              required: 'This is required.',
              maxLength: {
                value: 300,
                message: 'Maximum 300 characters',
              },
            })}
          />
          {errors?.location && (
            <p className={styles.error}>{errors.location?.message}</p>
          )}
        </div>
        <div className={styles.dragContainer}>
          <div
            className={styles.drag}
            onDragStart={(e) => dragStartHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDrop={(e) => onDropHandler(e)}
          >
            Drop
          </div>
        </div>
        <input type="submit" />
        <input type="file" />
      </form>

      {/* <div ref={testRef}></div> */}
    </div>
  )
}
