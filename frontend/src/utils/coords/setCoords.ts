import { MutableRefObject } from 'react';
import { getCoords } from './getCoords';

export function setCoords<T>(ref: T): void {
  const refT = (ref as MutableRefObject<HTMLDivElement>).current;
  if (!refT) return;
  const { top, bottom } = getCoords<T>(refT);
  if (bottom > window.innerHeight) {
    refT.style.top = '-350px';
  }
  if (top < 0) {
    refT.style.top = '120px';
  }
}
