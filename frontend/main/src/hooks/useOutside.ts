import { RefObject, useEffect } from 'react';

export function useOutside(
  onClose: () => void,
  pickerRef: RefObject<HTMLDivElement>,
  checkinRef: RefObject<HTMLInputElement>,
  checkinOut: RefObject<HTMLInputElement>,
  checkin: boolean,
  checkout: boolean,
): void {
  useEffect(() => {
    if (!checkin && !checkout) return;
    const handleClick = (e: MouseEvent) => {
      if (
        pickerRef?.current &&
        !pickerRef.current?.contains(e.target as Node) &&
        !checkinRef.current?.contains(e.target as Node) &&
        !checkinOut.current?.contains(e.target as Node)
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
