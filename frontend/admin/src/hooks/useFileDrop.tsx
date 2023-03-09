/* eslint-disable no-param-reassign */
/* eslint-disable no-new */
/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-shadow */
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

  const toBase64 = (file: File) => {
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });
  };
  const onDropHandler = (e: any): void => {
    e.preventDefault();
    const aboba = [...e.dataTransfer.files];
    setFiles([...files]);
    // const base64 = aboba.map((file) => {});
    Promise.all(
      aboba.map(
        (image) =>
          new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.onload = (file) => {
              resolve(file.target.result.split(',')[1]);
            };

            fileReader.onerror = (error) => reject(error);

            fileReader.readAsDataURL(image);
          }),
      ),
    ).then((base64Images) => {
      // Send base64Images to server
      console.log(base64Images);
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
