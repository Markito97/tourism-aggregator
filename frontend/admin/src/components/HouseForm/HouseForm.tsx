/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import useFileDrop from 'admin/src/hooks/useFileDrop';
import styles from './House.module.css';

export interface IHouse {
  name: string;
  description: string;
  price: string;
  location: string;
}

export const HouseForm = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHouse>();
  const [
    dragStartHandler,
    dragLeaveHandler,
    onDropHandler,
    imagesPreviews,
    files,
  ] = useFileDrop();

  const onSubmit = (house: any) => {
    console.log(house);
  };
  return (
    <div className={styles.houseFormFields}>
      <h1>Adding House</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formItem}>
          <label className={styles.textLable}>
            Name
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
          </label>

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
          />
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
            onDragStart={(e) => {
              return dragStartHandler(e);
            }}
            onDragOver={(e) => {
              return dragStartHandler(e);
            }}
            onDragLeave={(e) => {
              return dragLeaveHandler(e);
            }}
            onDrop={(e) => {
              return onDropHandler(e);
            }}
          >
            Drop
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
});
