import { DatePickerProps } from '../components/DatePicker/DatePicker';
import { DatePickerProvider } from '../context/DateContext';
import { ComponentType } from 'react';

export default function withContextHoc<T extends DatePickerProps>(Component: ComponentType<T>) {
  return function (props: T) {
    return (
      <DatePickerProvider {...props}>
        <Component {...props} />
      </DatePickerProvider>
    );
  };
}
