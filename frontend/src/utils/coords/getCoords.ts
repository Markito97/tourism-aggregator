import { MutableRefObject } from 'react';

export function getCoords<T>(ref: T): { top: number; bottom: number } {
  const coords = ref.current.getBoundingClientRect();
  return {
    top: coords.top + window.pageYOffset,
    bottom: coords.bottom + window.pageYOffset,
  };
}
