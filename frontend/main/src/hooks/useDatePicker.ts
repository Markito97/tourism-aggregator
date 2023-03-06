/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable func-names */
/* eslint-disable no-void */
import { useEffect, useRef, useState } from 'react';
import useDatePick from './useDatePick';
import { useOutside } from './useOutside';

export function useDatePicker() {
  const [checkin, setCheckin] = useState<string>('');
  const [checkout, setCheckout] = useState<string>('');

  const [isCheckIn, setIsCheckIn] = useState<boolean>(false);
  const [isCheckOut, setIsCheckOut] = useState<boolean>(false);

  // console.log(isCheckIn);
  // console.log(isCheckOut);

  const [pickedDateUnits, setPickedDateUnits] = useDatePick();

  const [isClose, setIsClose] = useState(false);

  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const onChange = (dispatch: React.Dispatch<React.SetStateAction<string>>) => {
    return function (value: any): void {
      void dispatch(value);
    };
  };

  const onToggle = (
    dispatch: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    return function (value: boolean): void {
      dispatch(value);
    };
  };

  const onChangeCheckIn = onChange(setCheckin);
  const onChangeCheckOut = onChange(setCheckout);

  const onToggleIsCheckin = onToggle(setIsCheckIn);
  const onToggleIsCheckout = onToggle(setIsCheckOut);

  useEffect(() => {
    setIsClose(false);
  }, [pickedDateUnits.firstPickedDateUnit]);

  useEffect(() => {
    setIsClose(false);
  }, [pickedDateUnits.secondPickedDateUnit]);

  useEffect(() => {});

  const handleClose = () => {
    onToggleIsCheckin(false);
    setIsClose(true);
    onToggleIsCheckout(false);
  };

  useEffect(() => {
    if (
      !pickedDateUnits.firstPickedDateUnit?.day ||
      !pickedDateUnits.firstPickedDateUnit?.month ||
      !pickedDateUnits.firstPickedDateUnit?.year
    )
      return;
    onChangeCheckIn(
      `${pickedDateUnits.firstPickedDateUnit?.day} / ${pickedDateUnits.firstPickedDateUnit?.month} / ${pickedDateUnits.firstPickedDateUnit?.year}`,
    );
    if (
      pickedDateUnits.firstPickedDateUnit &&
      pickedDateUnits.secondPickedDateUnit
    ) {
      if (!isClose) {
        onToggleIsCheckin(false);
        onToggleIsCheckout(false);
        setIsClose(true);
      }
    }
  }, [pickedDateUnits.firstPickedDateUnit]);

  useEffect(() => {
    if (
      !pickedDateUnits.secondPickedDateUnit?.day ||
      !pickedDateUnits.secondPickedDateUnit?.month ||
      !pickedDateUnits.secondPickedDateUnit?.year
    )
      return;
    onChangeCheckOut(
      `${pickedDateUnits.secondPickedDateUnit?.day} / ${pickedDateUnits.secondPickedDateUnit?.month} / ${pickedDateUnits.secondPickedDateUnit?.year}`,
    );
    if (
      pickedDateUnits.firstPickedDateUnit &&
      pickedDateUnits.secondPickedDateUnit
    ) {
      onToggleIsCheckin(false);
      onToggleIsCheckout(false);
      setIsClose(true);
    }
  }, [pickedDateUnits.secondPickedDateUnit]);

  useOutside(
    handleClose,
    pickerRef,
    checkinRef,
    checkoutRef,
    isCheckIn,
    isCheckOut,
  );

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
      onChangeCheckIn,
      onChangeCheckOut,
      onToggleIsCheckin,
      onToggleIsCheckout,
      setIsClose,
    },
  };
}
