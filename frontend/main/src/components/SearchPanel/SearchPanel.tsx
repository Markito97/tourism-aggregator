/* eslint-disable object-shorthand */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useRef, useState } from 'react';
import { useOutside } from 'main/src/hooks/useOutside';
import useDatePick from 'main/src/hooks/useDatePick';
import { DatePicker } from '../DatePicker/DatePicker';

interface IField {
  isClose?: boolean;
  endDate?: boolean;
}

export const FieldsContext = createContext<IField | null>(null);

export const SeacrhPanel = (): JSX.Element => {
  // inputs value
  const [checkin, setCheckin] = useState<string>('');
  const [checkout, setCheckout] = useState<string>('');
  // show picker
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);
  // input refs
  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const [isClose, setIsClose] = useState(false);
  // close picker
  const handleClose = () => {
    setIsClose(true);
    setIsCheckIn(false);
  };

  const [pickedDateUnits, setPickedDateUnits] = useDatePick();

  console.log(pickedDateUnits);

  useEffect(() => {
    setIsClose(false);
  }, [pickedDateUnits.firstPickedDateUnit]);

  useEffect(() => {
    if (
      !pickedDateUnits.firstPickedDateUnit?.day ||
      !pickedDateUnits.firstPickedDateUnit?.month ||
      !pickedDateUnits.firstPickedDateUnit?.year
    )
      return;
    setCheckin(
      `${pickedDateUnits.firstPickedDateUnit?.day} / ${pickedDateUnits.firstPickedDateUnit?.month} / ${pickedDateUnits.firstPickedDateUnit?.year}`,
    );
  });

  // useEffect(() => {
  //   if (isCheckIn) {
  //     // setPickedDateUnits({
  //     //   ...pickedDateUnits,
  //     //   firstPickedDateUnit: null,
  //     // });
  //   }
  // }, [pickedDateUnits, setPickedDateUnits]);

  useOutside(handleClose, pickerRef, checkinRef, isCheckIn);
  return (
    <div>
      <input
        onFocus={() => setIsCheckIn(true)}
        // onBlur={() => setis}
        ref={checkinRef}
        value={checkin}
        onChange={(e) => setCheckin(e.target.value)}
      />
      <input
        ref={checkoutRef}
        value={checkout}
        onChange={(e) => setCheckout(e.target.value)}
      />
      {isCheckIn && (
        <FieldsContext.Provider value={{ isClose: isClose }}>
          <DatePicker pickerRef={pickerRef} />
        </FieldsContext.Provider>
      )}
    </div>
  );
};
