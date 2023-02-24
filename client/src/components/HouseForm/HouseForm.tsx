import styles from './House.module.css'
import { useForm } from 'react-hook-form'
import { useFileDrop } from '../../hooks/useFileDrop'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { ServiceContext } from '../../context/ServiceContext'

export interface IHouse {
  name: string
  description: string
  price: string
  location: string
}

export const HouseForm = observer(() => {
  const { houses } = useContext(ServiceContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHouse>()
  const [
    dragStartHandler,
    dragLeaveHandler,
    onDropHandler,
    imagesPreviews,
    files,
  ] = useFileDrop()

  const onSubmit = (house: any) => {
    houses.createHouse(house, files)
  }

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
        {/* <input type="file" /> */}
      </form>

      {/* <div ref={testRef}></div> */}
    </div>
  )
})
