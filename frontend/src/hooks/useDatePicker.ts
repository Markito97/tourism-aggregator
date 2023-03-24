import { useContext, useEffect, useRef, useState } from 'react';
import { useOutside } from './useOutside';
import { PickedDateUnitsContext } from '../context/DateContext';

export function useDatePicker(isModal: boolean) {
  const [checkin, setCheckin] = useState<string>('');
  const [checkout, setCheckout] = useState<string>('');

  const [isCheckIn, setIsCheckIn] = useState<boolean>(false);
  const [isCheckOut, setIsCheckOut] = useState<boolean>(false);

  const pickedDateUnits = useContext(PickedDateUnitsContext);

  if (!pickedDateUnits) throw new Error('DatePick Error');

  const [isClose, setIsClose] = useState(false);

  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClose(false);
  }, [pickedDateUnits.firstPickedDateUnit, pickedDateUnits.secondPickedDateUnit]);

  const handleClose = () => {
    if (isModal) return;
    setIsCheckIn(false);
    setIsClose(true);
    setIsCheckOut(false);
  };

  const isFirstPicked =
    !pickedDateUnits.firstPickedDateUnit?.day ||
    !pickedDateUnits.firstPickedDateUnit?.month ||
    !pickedDateUnits.firstPickedDateUnit?.year;

  const isSecondPicked =
    !pickedDateUnits.secondPickedDateUnit?.day ||
    !pickedDateUnits.secondPickedDateUnit?.month ||
    !pickedDateUnits.secondPickedDateUnit?.year;

  useEffect(() => {
    if (isFirstPicked) return;
    if (pickedDateUnits.firstPickedDateUnit && pickedDateUnits.secondPickedDateUnit) {
      if (!isClose) {
        setIsCheckIn(false);
        setIsCheckOut(false);
        setIsClose(true);
      }
    }
  }, [pickedDateUnits.firstPickedDateUnit]);

  useEffect(() => {
    if (isSecondPicked) return;
    if (pickedDateUnits.firstPickedDateUnit && pickedDateUnits.secondPickedDateUnit) {
      if (isModal) {
        setIsClose(true);
      } else {
        setIsCheckIn(false);
        setIsCheckOut(false);
        setIsClose(true);
      }
    }
  }, [pickedDateUnits.secondPickedDateUnit]);

  useOutside(handleClose, pickerRef, checkinRef, checkoutRef, isCheckIn, isCheckOut);

  return {
    refs: {
      checkinRef,
      checkoutRef,
      pickerRef,
    },
    datePicker: {
      checkin,
      checkout,
      isCheckIn,
      isCheckOut,
      isClose,
    },
    handlers: {
      setCheckin,
      setCheckout,
      setIsCheckIn,
      setIsCheckOut,
      setIsClose,
    },
  };
}
