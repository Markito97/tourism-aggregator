/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm, Controller } from 'react-hook-form';
import { TextField } from 'main/src/UI/TextField';
// import styles from './SearchPanel.module.css';
import * as css from './SearchPanel.sass';

export const SeacrhPanel = (): JSX.Element => {
  const { control, handleSubmit, setFocus } = useForm({
    defaultValues: {
      lake: '',
      dateStart: '',
      dateEnd: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  // console.log(errors.lake);

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="lake"
          rules={{ required: 'This required field.' }}
          render={({
            field: { onChange, onBlur, value, ref },
            formState,
            fieldState,
          }) => {
            return (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                fieldState={fieldState}
                label="lake"
                type="text"
                placeholder="lake"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="dateStart"
          rules={{ required: 'This required field.' }}
          render={({
            field: { onChange, onBlur, value, ref },
            formState,
            fieldState,
          }) => {
            return (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                fieldState={fieldState}
                label="from"
                type="text"
                placeholder="Check-in"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="dateEnd"
          rules={{ required: 'This required field.' }}
          render={({
            field: { onChange, onBlur, value, ref },
            formState,
            fieldState,
          }) => {
            return (
              <TextField
                onFocus={setFocus}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                fieldState={fieldState}
                label="to"
                type="text"
                placeholder="Check-out"
              />
            );
          }}
        />
        <input style={{ height: '50px' }} type="submit" />
      </form>
    </div>
  );
};
