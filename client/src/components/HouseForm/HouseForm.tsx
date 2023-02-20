import React, { useState } from 'react'
import styles from './House.module.css'
import { Resolver, useForm } from 'react-hook-form'

// interface IHouseForm {
//   name: string
//   description: string
//   location: string
// }

// /^[a-zA-Z]+$/

// const resolver: Resolver<IHouseForm> = async (values) => {
//   return {
//     values: values.name || values.description ? values : {},
//     errors:
//       !values.name && !values.description
//         ? {
//             name: {
//               type: 'required',
//               message: 'This is required.',
//             },
//             description: {
//               type: 'required',
//               message: 'This is required.',
//             },
//           }
//         : !values.name
//         ? {
//             name: {
//               type: 'required',
//               message: 'This is required.',
//             },
//           }
//         : !values.description
//         ? {
//             description: {
//               type: 'required',
//               message: 'This is required.',
//             },
//           }
//         : {},
//   }
// }

export const HouseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [drag, setDrag] = useState<boolean>(false)
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
    const house = {}
  }

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
  }

  console.log('rerender')

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
        <input type="submit" />
      </form>
    </div>
  )
}
