/* eslint-disable @typescript-eslint/indent */
import { useContext, createContext, useState } from 'react';

export interface PickedDateUnit {
  year: number;
  month: number;
  day: number;
}

export type PickedDateUnits = {
  firstPickedDateUnit: PickedDateUnit | null;
  secondPickedDateUnit: PickedDateUnit | null;
};
export type PickedDateUnitsDispatch = React.Dispatch<
  React.SetStateAction<PickedDateUnits>
>;
export const PickedDateUnitsContext = createContext<PickedDateUnits | null>(
  null,
);
export const YearMonthContext = createContext<number[]>([0, 0]);

export const PickedDateUnitsDispatchContext =
  createContext<PickedDateUnitsDispatch | null>(null);

export const DatePickerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [pickedDateUnits, setPickedDateUnits] = useState<PickedDateUnits>({
    firstPickedDateUnit: null,
    secondPickedDateUnit: null,
  });

  return (
    <PickedDateUnitsDispatchContext.Provider value={setPickedDateUnits}>
      <PickedDateUnitsContext.Provider value={pickedDateUnits}>
        {children}
      </PickedDateUnitsContext.Provider>
    </PickedDateUnitsDispatchContext.Provider>
  );
};
