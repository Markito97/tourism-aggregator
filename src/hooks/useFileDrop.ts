import { useState } from 'react';

export default function useFileDrop() {
  const [imagesPreviews, setImagesPreviews] = useState<any>([]);
  const [files, setFiles] = useState<any>([]);

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

  return [
    dragStartHandler,
    dragLeaveHandler,
    onDropHandler,
    imagesPreviews,
    files,
  ];
}
