import { useEffect, useState } from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import { ImagesPreview } from './ImagesPreview';
import { toBase64 } from '../../utils/files/toBase64';
import { AdminFormValues } from './CreateHouseFrom';
import { useDragFiles } from '../../hooks/useDragFiles';
import * as css from './DragForm.sass';

export const DragForm = ({ ...props }: UseControllerProps<AdminFormValues> | any): JSX.Element => {
  const [previewImages, setPreviewImages] = useState<Array<string | ArrayBuffer | null>>([]);
  const { field, fieldState } = useController(props);
  const { isDrag, preloadFiles, handleDragStart, handleDragLeave, handleDrop, handleRemove } =
    useDragFiles();

  const hanldeRemoveFile = (index: number) => {
    if (!preloadFiles) return;
    void handleRemove(index);
    void setPreviewImages([...previewImages?.filter((_file, idx) => idx !== index)]);
  };

  useEffect(() => {
    props.onFiles(preloadFiles);
    if (!preloadFiles) return;
    Promise.all(preloadFiles.map((image) => toBase64(image))).then((image) => {
      if (!image.length || !image) return;
      setPreviewImages([...image]);
    });
  }, [preloadFiles]);

  return (
    <div style={{ margin: '5px' }}>
      <div className={css.drag__container}>
        {!isDrag ? (
          <div
            className={css.drag}
            onDragStart={handleDragStart}
            onDragOver={handleDragStart}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            Drag images here
          </div>
        ) : (
          <div
            className={css.drop}
            onDragOver={handleDragStart}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            Drop images here
          </div>
        )}
      </div>
      <p className={css.drag__error}>
        {fieldState.error && (fieldState.error.message || 'This is required')}
      </p>
      <ImagesPreview images={previewImages} onRemove={hanldeRemoveFile} />
    </div>
  );
};
