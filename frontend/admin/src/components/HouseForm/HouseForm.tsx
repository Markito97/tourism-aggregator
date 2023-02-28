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
  testField: string;
  checkin: string;
  checkout: string;
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
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.leftFormPart}>
          <div className={styles.formItem}>
            <label className={styles.textLable}>NAME</label>
            <input
              className={styles.textField}
              placeholder="Name"
              {...register('name', {
                required: 'This is required.',
                // minLength: {
                // value: 5,
                // message: 'Minimum 5 characters',
                // },
              })}
            />

            {errors?.name && (
              <p className={styles.error}>{errors.name?.message}</p>
            )}
          </div>
          <div className={styles.formItem}>
            <label className={styles.textLable}>LOCATION</label>
            <input
              className={styles.textField}
              placeholder="LOCATION"
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
          <div className={styles.formItem}>
            <label className={styles.textLable}>SOME FIELD</label>
            <input
              className={styles.textField}
              placeholder="SOME FIELD"
              {...register('testField', {
                required: 'This is required.',
              })}
            />
            {errors?.price && (
              <p className={styles.error}>{errors.price?.message}</p>
            )}
          </div>
          <div className={styles.formItem}>
            <label className={styles.textLable}>SOME FIELD</label>
            <input
              className={styles.textField}
              placeholder="SOME FIELD"
              {...register('price', {
                required: 'This is required.',
              })}
            />
            {errors?.price && (
              <p className={styles.error}>{errors.price?.message}</p>
            )}
          </div>
          <div className={styles.formItem}>
            <label className={styles.textLable}>PRICE</label>
            <input
              className={styles.textField}
              placeholder="PRICE"
              {...register('price', {
                required: 'This is required.',
              })}
            />
            {errors?.price && (
              <p className={styles.error}>{errors.price?.message}</p>
            )}
          </div>
        </div>
        <div className={styles.rightFormPart}>
          <div className={styles.formItem}>
            <label className={styles.textLable}>FROM</label>
            <input
              className={styles.textField}
              placeholder="CHECK-IN"
              {...register('checkin', {
                required: 'This is required.',
              })}
            />
            {errors?.price && (
              <p className={styles.error}>{errors.price?.message}</p>
            )}
          </div>
          <div className={styles.formItem}>
            <label className={styles.textLable}>TO</label>
            <input
              className={styles.textField}
              placeholder="CHECK-OUT"
              {...register('checkout', {
                required: 'This is required.',
              })}
            />
            {errors?.price && (
              <p className={styles.error}>{errors.price?.message}</p>
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
              <p className={styles.errorDescription}>
                {errors.description?.message}
              </p>
            )}
          </div>
          <label className={styles.textLable}>IMAGES</label>
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
          <button type="submit" className={styles.submitFormBtn}>
            <span className={styles.btnText}>SUBMIT</span>
          </button>
        </div>
      </form>
    </div>
  );
});
