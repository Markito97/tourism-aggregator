import { RefObject, useEffect } from 'react';

export function useOutside(
  onClose: () => void,
  pickerRef: RefObject<HTMLDivElement>,
  fieldRef: RefObject<HTMLInputElement>,
  flag: boolean,
): void {
  useEffect(() => {
    // console.log(pickerRef, fieldRef);
    if (!flag) return;
    const handleClick = (e: MouseEvent) => {
      if (
        pickerRef?.current &&
        !pickerRef.current?.contains(e.target as Node) &&
        !fieldRef.current?.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  });
}

// https://stackoverflow.com/questions/61102101/cannot-assign-refobjecthtmldivelement-to-refobjecthtmlelement-instance
