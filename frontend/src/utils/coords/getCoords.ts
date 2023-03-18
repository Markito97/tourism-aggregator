import { MutableRefObject } from 'react';

export function getCoords<T>(element: T): { top: number; bottom: number } {
  const coords = element.getBoundingClientRect();
  return {
    top: coords.top + window.pageYOffset,
    bottom: coords.bottom + window.pageYOffset,
  };
}
