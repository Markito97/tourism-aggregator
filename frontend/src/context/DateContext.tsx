import { useContext, createContext, useState, ReactNode } from 'react';

export interface PickedDateUnit {
  year: number;
  month: number;
  day: number;
}

export type PickedDateUnits = {
  firstPickedDateUnit: PickedDateUnit | null;
  secondPickedDateUnit: PickedDateUnit | null;
};

export interface IField {
  isClose?: boolean;
  isCheckIn: boolean;
  isCheckOut: boolean;
  isModal?: boolean;
}

export type PickedDateUnitsDispatch = React.Dispatch<React.SetStateAction<PickedDateUnits>>;

export const FieldsContext = createContext<IField | null>(null);
export const PickedDateUnitsContext = createContext<PickedDateUnits | null>(null);

export const YearMonthContext = createContext<number[]>([0, 0]);
export const PickedDateUnitsDispatchContext = createContext<PickedDateUnitsDispatch | null>(null);
export const DisablePreviousDaysContext = createContext<boolean>(false);

export interface DatePickerProviderProps {
  children: ReactNode;
  disablePreviousDays: boolean;
}

export const DatePickerProvider = ({ children, disablePreviousDays }: DatePickerProviderProps) => {
  const [pickedDateUnits, setPickedDateUnits] = useState<PickedDateUnits>({
    firstPickedDateUnit: null,
    secondPickedDateUnit: null,
  });

  return (
    <PickedDateUnitsDispatchContext.Provider value={setPickedDateUnits}>
      <PickedDateUnitsContext.Provider value={pickedDateUnits}>
        <DisablePreviousDaysContext.Provider value={disablePreviousDays}>
          {children}
        </DisablePreviousDaysContext.Provider>
      </PickedDateUnitsContext.Provider>
    </PickedDateUnitsDispatchContext.Provider>
  );
};
