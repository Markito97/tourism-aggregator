import { MutableRefObject } from 'react';
import { getCoords } from './getCoords';

export function setCoords<T>(ref: T): void {
  const element = (ref as MutableRefObject<HTMLDivElement>).current;
  if (!element) return;
  const { top, bottom } = getCoords<HTMLDivElement>(element);
  if (bottom > window.innerHeight) {
    element.style.top = '-350px';
  }
  if (top < 0) {
    element.style.top = '120px';
  }
}
