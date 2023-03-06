/* eslint-disable react/jsx-no-constructed-context-values */
import { useDatePicker } from 'main/src/hooks/useDatePicker';
import { FieldsContext } from '../../context/DateContext';
import { DatePicker } from '../DatePicker/DatePicker';

export const SeacrhPanel = (): JSX.Element => {
  const { refs, datePicker, handlers } = useDatePicker();

  return (
    <div>
      <input
        onFocus={() => {
          handlers.onToggleIsCheckin(true);
        }}
        ref={refs.checkinRef}
        value={datePicker.checkin}
        onChange={handlers.onChangeCheckIn}
      />
      <input
        onFocus={() => {
          handlers.onToggleIsCheckout(true);
          // handlers.setIsClose(false);
        }}
        ref={refs.checkoutRef}
        value={datePicker.checkout}
        onChange={handlers.onChangeCheckOut}
      />
      {datePicker.isCheckIn || datePicker.isCheckOut ? (
        <FieldsContext.Provider
          value={{
            isClose: datePicker.isClose,
            isCheckIn: datePicker.isCheckIn,
            isCheckOut: datePicker.isCheckOut,
          }}
        >
          <DatePicker disablePreviousDays pickerRef={refs.pickerRef} />
        </FieldsContext.Provider>
      ) : null}
    </div>
  );
};
export { FieldsContext };
