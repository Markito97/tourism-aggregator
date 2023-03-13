import { useState } from 'react';

export function useDrag() {
  const [preloadFiles, setPreloadFiles] = useState<Array<File>>([]);
  const [isDrag, setIsDrag] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDrag(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDrag(!isDrag);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDrag(false);
    void setPreloadFiles([...preloadFiles, ...Array.from(e.dataTransfer.files)]);
  };

  const handleRemove = (index: number) => {
    void setPreloadFiles([...preloadFiles.filter((file, idx) => idx !== index)]);
  };

  return {
    isDrag,
    preloadFiles,
    handleDragStart,
    handleDragLeave,
    handleDrop,
    handleRemove,
  };
}
