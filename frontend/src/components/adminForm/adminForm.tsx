import { useForm } from 'react-hook-form';
import { ServiceContext } from '../../context/ServiceContext';
import { useContext, useState } from 'react';
import { TextField } from '../../UI/TextField';
import styles from './AdminForm.module.css';

export interface IHouse {
  houseName: string;
  adress: string;
  lake: string;
  price: string;
  geoData: string | null;
  persons: string | null;
  checkin: string | null;
  checkout: string | null;
}

export const AdminForm = () => {
  const { control, handleSubmit } = useForm<IHouse>({
    defaultValues: {
      houseName: '',
      adress: '',
      lake: '',
      price: '',
      persons: '',
      geoData: '',
      checkin: '',
      checkout: '',
    },
  });
  const { houses } = useContext(ServiceContext);
  const [files, setFiles] = useState<Array<File>>([]);
  const [filesError, setFilesError] = useState(false);

  const dragStartHandler = (e: DragEvent): void => {
    e.preventDefault();
  };

  const dragLeaveHandler = (e: DragEvent): void => {
    e.preventDefault();
  };

  const onDropHandler = (e: any): void => {
    e.preventDefault();
    const f = [...e.dataTransfer.files];
    setFiles([...f]);
  };

  const onSubmit = (house: any) => {
    if (!files.length) {
      setFilesError(true);
      throw new Error('The field cannot be empty');
    }
    setFilesError(false);
    const rating = {
      oneStar: [],
      twoStar: [],
      threeStar: [],
      fourStar: [],
      fiveStart: [],
    };
    houses.createHouse(files, { ...house, rating });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div className={styles.requiredFields}>
          <TextField
            control={control}
            rules={{ required: true }}
            name="houseName"
          />
          <TextField
            control={control}
            rules={{ required: true }}
            name="adress"
          />
          <TextField control={control} rules={{ required: true }} name="lake" />
          <TextField
            control={control}
            rules={{ required: true }}
            type="number"
            name="price"
          />
        </div>
        <div className={styles.rightFields}>
          <TextField control={control} name="geoData" />
          <TextField control={control} name="persons" />
          <label className={styles.textLable}>IMAGES</label>
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
          <p style={{ color: 'red' }}>
            {filesError && 'This field is required'}
          </p>
          <input type="submit" />
        </div>
      </div>
    </form>
  );
};
