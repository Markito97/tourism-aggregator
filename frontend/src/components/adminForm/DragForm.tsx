import { Profiler, useEffect, useState } from 'react';
import * as css from './DragForm.sass';
import { UseControllerProps, useController } from 'react-hook-form';
import { FormValues } from './AdminForm';
import { Trash } from '../../assets/icons/Trash';

interface DragFormProps {
  onFiles: (files: Array<File>) => void;
}

export const DragForm = ({
  ...props
}: UseControllerProps<FormValues> | any): JSX.Element => {
  const [preloadFiles, setPreloadFiles] = useState<Array<File> | boolean[]>([]);
  const [imagePath, setImagePath] = useState<string[] | unknown[]>([]);
  const { field, fieldState } = useController(props);
  const [onDrag, setDrag] = useState(false);

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    console.log(e.dataTransfer.files);
    e.preventDefault();
    setPreloadFiles([...preloadFiles, ...Array.from(e.dataTransfer.files)]);
    // props.onFiles(e.dataTransfer.files);
  };

  const hanldeRemoveFile = (index: number) => {
    if (!preloadFiles) return;
    setPreloadFiles([...preloadFiles?.filter((_file, idx) => idx !== index)]);
    setImagePath([...imagePath?.filter((_file, idx) => idx !== index)]);
  };

  const toBase64 = (file: File): Promise<any> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });
  };

  useEffect(() => {
    props.onFiles(preloadFiles);
    if (!preloadFiles) return;
    Promise.all(preloadFiles.map((image) => toBase64(image))).then((image) => {
      console.log(image);
      setImagePath([...image]);
    });
  }, [preloadFiles]);

  return (
    <div style={{ margin: '5px' }}>
      <label htmlFor="">Images</label>
      <div className={css.drag__container}>
        {imagePath &&
          imagePath.map((img, index) => (
            <div key={img + index} className={css.image__unit}>
              <img className={css.image} src={img} />
              <div className={css.image__unit__remove}>
                <Trash onClick={() => hanldeRemoveFile(index)} />
              </div>
            </div>
          ))}
        <div
          style={{ width: '50px', height: '50px' }}
          onDragStart={dragStartHandler}
          onDragOver={dragStartHandler}
          onDragLeave={dragLeaveHandler}
          onDrop={onDropHandler}
        >
          Drop
        </div>
      </div>
      <p className={css.drag__error}>
        {fieldState.error && (fieldState.error.message || 'This is required')}
      </p>
    </div>
  );
};
