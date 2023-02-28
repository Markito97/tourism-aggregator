import { useState } from 'react';

export default function useFileDrop() {
  const [imagesPreviews, setImagesPreviews] = useState<any>([]);
  const [files, setFiles] = useState<any>();

  const dragStartHandler = (e: DragEvent): void => {
    e.preventDefault();
  };

  const dragLeaveHandler = (e: DragEvent): void => {
    e.preventDefault();
  };

  const onDropHandler = (e: any): void => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    setFiles([...files]);
    files.map((file) => {
      const reader = new FileReader();
      reader.onload = (file) => {
        setImagesPreviews([...imagesPreviews, file.target?.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  return [
    dragStartHandler,
    dragLeaveHandler,
    onDropHandler,
    imagesPreviews,
    files,
  ];
}
