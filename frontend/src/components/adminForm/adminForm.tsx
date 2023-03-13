import { useForm } from 'react-hook-form';
import { ServiceContext } from '../../context/ServiceContext';
import { DragEventHandler, Profiler, useContext, useEffect, useState } from 'react';
import { TextField } from '../../UI/TextField';
import styles from './AdminForm.module.css';
import { IRating } from 'src/dto/house.dto';
import { DragForm } from './DragForm';

export interface FormValues {
  houseName: string;
  address: string;
  lake: string;
  price: string;
  persons?: string;
  geoData?: string;
  files: Array<File>;
}

const rating: IRating = {
  oneStar: [],
  twoStar: [],
  threeStar: [],
  fourStar: [],
  fiveStar: [],
};

export const AdminForm = () => {
  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      houseName: '',
      address: '',
      lake: '',
      price: '',
      persons: '',
      geoData: '',
      files: [],
    },
  });
  const { houses } = useContext(ServiceContext);

  const handleFiles = (files: Array<File>) => {
    setValue('files', files);
  };

  const onSubmit = (house: FormValues): void => {
    houses.createHouse({ ...house, rating });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div className={styles.requiredFields}>
          <TextField control={control} rules={{ required: true }} name="houseName" />
          <TextField control={control} rules={{ required: true }} name="address" />
          <TextField control={control} rules={{ required: true }} name="lake" />
          <TextField control={control} rules={{ required: true }} type="number" name="price" />
        </div>
        <div className={styles.rightFields}>
          <TextField control={control} name="geoData" />
          <TextField control={control} name="persons" />
          <DragForm
            control={control}
            name="files"
            onFiles={handleFiles}
            rules={{ required: true }}
          />
          <input type="submit" />
        </div>
      </div>
    </form>
  );
};
